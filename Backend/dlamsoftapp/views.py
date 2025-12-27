from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
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
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        
        # You could add email notification here
        # send_contact_form_email(serializer.instance)
        
        headers = self.get_success_headers(serializer.data)
        return Response(
            serializer.data, 
            status=status.HTTP_201_CREATED, 
            headers=headers
        )
    
    @action(detail=True, methods=['patch'])
    def mark_as_read(self, request, pk=None):
        message = self.get_object()
        message.is_read = True
        message.save()
        return Response({'status': 'marked as read'})