from django.urls import path
from apps.identity import views

urlpatterns = [
    path("auth/login/", views.login, name="auth-login"),
    path("auth/logout/", views.logout, name="auth-logout"),
    path("auth/refresh/", views.refresh, name="auth-refresh"),
    path("users/me/", views.me, name="users-me"),
]
