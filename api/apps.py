from django.apps import AppConfig
from .firebase_service import collection_listener
from .listener_callback import handle_changes

class ApiConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'api'
