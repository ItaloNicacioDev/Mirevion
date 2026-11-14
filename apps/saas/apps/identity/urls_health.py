from django.urls import path
from apps.identity import views

urlpatterns = [
    path("health/", views.me, name="health"),  # placeholder temporário
]
