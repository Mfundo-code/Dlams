# views.py
import json
from django.http import JsonResponse
from django.core.mail import send_mail
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from .models import ContactMessage

@csrf_exempt  
def dlamsoftapp(request):
    if request.method == "POST":
        try:
            # Parse JSON data from request body
            data = json.loads(request.body)
            name = data.get("name")
            phone = data.get("phone")
            subject = data.get("subject")
            message = data.get("message")
        except json.JSONDecodeError:
            return JsonResponse({"success": False, "error": "Invalid JSON."}, status=400)
        
        if not name or not phone or not subject or not message:
            return JsonResponse({"success": False, "error": "All fields are required."}, status=400)

        # Save to database
        ContactMessage.objects.create(
            name=name,
            phone=phone,
            subject=subject,
            message=message
        )

        # Send email
        try:
            send_mail(
                subject=f"New Contact Form Submission: {subject}",
                message=f"Name: {name}\nPhone: {phone}\nSubject: {subject}\n\nMessage:\n{message}",
                from_email=settings.EMAIL_HOST_USER,
                recipient_list=['mfundoknox@gmail.com'],
                fail_silently=False,
            )
        except Exception as e:
            print(f"Failed to send email: {e}")

        return JsonResponse({"success": True, "message": f"Thank you, {name}! Your message has been sent."})

    return JsonResponse({"error": "Invalid request method."}, status=405)