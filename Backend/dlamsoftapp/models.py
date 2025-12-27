from django.db import models
from django.utils import timezone
from django.core.validators import FileExtensionValidator

class JobPosting(models.Model):
    JOB_TYPE_CHOICES = [
        ('full_time', 'Full Time'),
        ('part_time', 'Part Time'),
        ('contract', 'Contract'),
        ('remote', 'Remote'),
    ]
    
    title = models.CharField(max_length=200)
    description = models.TextField()
    location = models.CharField(max_length=100)
    job_type = models.CharField(max_length=20, choices=JOB_TYPE_CHOICES)
    salary_range = models.CharField(max_length=100, blank=True, null=True)
    requirements = models.TextField()
    responsibilities = models.TextField()
    benefits = models.TextField(blank=True, null=True)
    posted_date = models.DateTimeField(default=timezone.now)
    application_deadline = models.DateField(blank=True, null=True)
    is_active = models.BooleanField(default=True)
    
    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ['-posted_date']

class JobApplication(models.Model):
    # Applicant Information
    full_name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    cover_letter = models.TextField()
    
    # Files
    cv = models.FileField(
        upload_to='applications/cv/',
        validators=[FileExtensionValidator(['pdf', 'doc', 'docx'])]
    )
    
    # URLs
    linkedin_profile = models.URLField()
    portfolio_url = models.URLField()
    
    # Job Reference
    job = models.ForeignKey(
        JobPosting, 
        on_delete=models.CASCADE, 
        related_name='applications'
    )
    
    # Status Tracking
    status = models.CharField(
        max_length=20,
        choices=[
            ('pending', 'Pending'),
            ('reviewed', 'Reviewed'),
            ('shortlisted', 'Shortlisted'),
            ('rejected', 'Rejected'),
            ('hired', 'Hired'),
        ],
        default='pending'
    )
    
    # Timestamps
    application_date = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)
    
    # Additional Notes (for internal use)
    notes = models.TextField(blank=True, null=True)
    
    def __str__(self):
        return f"{self.full_name} - {self.job.title}"
    
    class Meta:
        ordering = ['-application_date']

class ContactMessage(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    message = models.TextField()
    submitted_at = models.DateTimeField(default=timezone.now)
    is_read = models.BooleanField(default=False)
    
    def __str__(self):
        return f"Message from {self.name}"
    
    class Meta:
        ordering = ['-submitted_at']