from django.urls import path
from . import views

urlpatterns = [
    path('api/contact/', views.SkillhiveApp, name='dlamsoftapp'),
]
