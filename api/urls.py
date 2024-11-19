# api/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('add-document/', views.test_add_document, name='add_document'),
    path('get-document/', views.test_get_document, name='get_document'),
]
