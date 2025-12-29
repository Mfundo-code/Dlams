from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.core.mail import send_mail
from django.conf import settings
from .models import JobPosting, JobApplication, ContactMessage
from .serializers import (
    JobPostingSerializer, 
    JobApplicationSerializer, 
    ContactMessageSerializer
)

class JobPostingViewSet(viewsets.ModelViewSet):
    queryset = JobPosting.objects.filter(is_active=True)
    serializer_class = JobPostingSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['job_type']
    
    def get_permissions(self):
        if self.action in ['create', 'update', 'partial_update', 'destroy']:
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]
    
    def get_queryset(self):
        queryset = JobPosting.objects.all()
        
        # For non-admin users, only show active postings
        if not self.request.user.is_staff:
            queryset = queryset.filter(is_active=True)
        
        return queryset

class JobApplicationViewSet(viewsets.ModelViewSet):
    queryset = JobApplication.objects.all()
    serializer_class = JobApplicationSerializer
    
    def get_permissions(self):
        if self.action == 'create':
            return [permissions.AllowAny()]
        return [permissions.IsAdminUser()]
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        
        # You could add email notification here
        # send_application_received_email(serializer.instance)
        
        headers = self.get_success_headers(serializer.data)
        return Response(
            serializer.data, 
            status=status.HTTP_201_CREATED, 
            headers=headers
        )
    
    @action(detail=True, methods=['patch'])
    def update_status(self, request, pk=None):
        application = self.get_object()
        new_status = request.data.get('status')
        
        if new_status not in dict(JobApplication._meta.get_field('status').choices):
            return Response(
                {'error': 'Invalid status'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        application.status = new_status
        if 'notes' in request.data:
            application.notes = request.data['notes']
        application.save()
        
        # You could add email notification here based on status change
        # send_status_update_email(application)
        
        return Response({'status': 'updated', 'new_status': new_status})

class ContactMessageViewSet(viewsets.ModelViewSet):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
    
    def get_permissions(self):
        if self.action == 'create':
            return [permissions.AllowAny()]
        return [permissions.IsAdminUser()]
    
    def create(self, request, *args, **kwargs):
        # Validate the data first
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        # Save the contact message to database
        self.perform_create(serializer)
        contact_message = serializer.instance
        
        # Send confirmation email to user
        try:
            user_subject = 'Thank you for contacting Dlams Software Solutions'
            
            user_message = f"""
Dear {contact_message.name},

Thank you for contacting Dlams Software Solutions. We have successfully received your message.

Your Message:
{contact_message.message}

Our team will review your message and get back to you within 24 hours.

Contact Information:
- Phone: +27 81 372 6611
- Email: info@dlamsoft.co.za
- WhatsApp: +27 81 372 6611

Best regards,
The Dlams Software Solutions Team

---
This is an automated confirmation email. Please do not reply to this email.
            """
            
            # HTML version for better presentation
            user_html_message = f"""
<!DOCTYPE html>
<html>
<head>
    <style>
        body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
        .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
        .header {{ background: linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%); 
                   color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }}
        .content {{ background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }}
        .message-box {{ background: white; padding: 20px; border-left: 4px solid #FFD700; 
                       margin: 20px 0; border-radius: 5px; }}
        .footer {{ text-align: center; margin-top: 30px; color: #666; font-size: 14px; }}
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Thank You for Reaching Out!</h1>
        </div>
        <div class="content">
            <p>Dear {contact_message.name},</p>
            
            <p>Thank you for contacting <strong>Dlams Software Solutions</strong>. We have successfully received your message and appreciate you taking the time to reach out to us.</p>
            
            <div class="message-box">
                <h3>Your Message:</h3>
                <p>{contact_message.message}</p>
            </div>
            
            <p>Our team will review your message and get back to you within <strong>24 hours</strong>.</p>
            
            <p>If you have any urgent inquiries, please don't hesitate to contact us directly:</p>
            <ul>
                <li>📞 Phone: +27 81 372 6611</li>
                <li>📧 Email: info@dlamsoft.co.za</li>
                <li>💬 WhatsApp: +27 81 372 6611</li>
            </ul>
            
            <div class="footer">
                <p>Best regards,<br>
                <strong>The Dlams Software Solutions Team</strong></p>
                <p style="font-size: 12px; color: #999;">
                    This is an automated confirmation email. Please do not reply to this email.
                </p>
            </div>
        </div>
    </div>
</body>
</html>
            """
            
            send_mail(
                subject=user_subject,
                message=user_message,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[contact_message.email],
                html_message=user_html_message,
                fail_silently=False,
            )
            
        except Exception as e:
            # If email fails, delete the saved message and return error
            contact_message.delete()
            return Response(
                {
                    'error': 'Failed to send confirmation email. Please check your email address and try again.',
                    'detail': str(e)
                },
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Send notification to admin (optional, non-blocking)
        try:
            admin_subject = f'New Contact Form Submission from {contact_message.name}'
            admin_message = f"""
New contact form submission received:

Name: {contact_message.name}
Email: {contact_message.email}
Submitted: {contact_message.submitted_at.strftime('%Y-%m-%d %H:%M:%S')}

Message:
{contact_message.message}

---
View in admin panel: https://www.dlamsoft.co.za/admin/
            """
            
            send_mail(
                subject=admin_subject,
                message=admin_message,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.ADMIN_EMAIL],
                fail_silently=True,  # Don't fail if admin notification fails
            )
        except:
            pass  # Ignore admin notification errors
        
        # Return success response
        headers = self.get_success_headers(serializer.data)
        return Response(
            {
                'success': True,
                'message': 'Thank you for your message! A confirmation email has been sent to your inbox. We will get back to you within 24 hours.',
                'data': serializer.data
            },
            status=status.HTTP_201_CREATED,
            headers=headers
        )
    
    @action(detail=True, methods=['patch'])
    def mark_as_read(self, request, pk=None):
        message = self.get_object()
        message.is_read = True
        message.save()
        return Response({'status': 'marked as read'})