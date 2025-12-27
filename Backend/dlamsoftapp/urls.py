from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'job-postings', views.JobPostingViewSet)
router.register(r'job-applications', views.JobApplicationViewSet)
router.register(r'contact', views.ContactMessageViewSet)

urlpatterns = [
    path('', include(router.urls)),
]