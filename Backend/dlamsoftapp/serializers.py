from rest_framework import serializers
from .models import JobPosting, JobApplication, ContactMessage
from django.core.validators import FileExtensionValidator
import os

class JobPostingSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobPosting
        fields = [
            'id', 'title', 'description', 'location', 'job_type',
            'salary_range', 'requirements', 'responsibilities', 
            'benefits', 'posted_date', 'application_deadline', 'is_active'
        ]
        read_only_fields = ['posted_date']

class JobApplicationSerializer(serializers.ModelSerializer):
    job_title = serializers.CharField(source='job.title', read_only=True)
    job_location = serializers.CharField(source='job.location', read_only=True)
    
    class Meta:
        model = JobApplication
        fields = [
            'id', 'full_name', 'email', 'phone', 'cover_letter',
            'cv', 'linkedin_profile', 'portfolio_url', 'job',
            'job_title', 'job_location', 'status', 'application_date',
            'updated_at', 'notes'
        ]
        read_only_fields = ['status', 'application_date', 'updated_at', 'notes']
    
    def validate_cv(self, value):
        # Check file size (max 10MB)
        max_size = 10 * 1024 * 1024  # 10MB
        if value.size > max_size:
            raise serializers.ValidationError('CV file size must be less than 10MB.')
        
        # Check file extension
        ext = os.path.splitext(value.name)[1].lower()
        valid_extensions = ['.pdf', '.doc', '.docx']
        if ext not in valid_extensions:
            raise serializers.ValidationError('Only PDF, DOC, and DOCX files are allowed.')
        
        return value
    
    def validate_linkedin_profile(self, value):
        if 'linkedin.com/in/' not in value and 'linkedin.com/company/' not in value:
            raise serializers.ValidationError('Please enter a valid LinkedIn profile URL.')
        return value
    
    def validate_portfolio_url(self, value):
        if not value.startswith(('http://', 'https://')):
            raise serializers.ValidationError('Please enter a valid URL.')
        return value

class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ['id', 'name', 'email', 'message', 'submitted_at', 'is_read']
        read_only_fields = ['submitted_at', 'is_read']