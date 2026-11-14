from pathlib import Path
from pydantic_settings import BaseSettings

BASE_DIR = Path(__file__).resolve().parent.parent.parent


class Settings(BaseSettings):
    SECRET_KEY: str = "insecure-dev-key"
    DEBUG: bool = True
    ALLOWED_HOSTS: list[str] = ["localhost", "127.0.0.1"]

    # Installed apps
    INSTALLED_APPS: list[str] = [
        "django.contrib.admin",
        "django.contrib.auth",
        "django.contrib.contenttypes",
        "django.contrib.sessions",
        "django.contrib.messages",
        "django.contrib.staticfiles",
        "rest_framework",
        "drf_spectacular",
        "rest_framework_simplejwt",
        "corsheaders",
        # Apps do Mirevion
        "apps.identity",
        "apps.tenancy",
        "apps.organizations",
        "apps.users",
        "apps.rbac",
        "apps.audit",
        "apps.notifications",
    ]

    # Middleware
    MIDDLEWARE: list[str] = [
        "django.middleware.security.SecurityMiddleware",
        "corsheaders.middleware.CorsMiddleware",
        "django.contrib.sessions.middleware.SessionMiddleware",
        "django.middleware.common.CommonMiddleware",
        "django.middleware.csrf.CsrfViewMiddleware",
        "django.contrib.auth.middleware.AuthenticationMiddleware",
        "django.contrib.messages.middleware.MessageMiddleware",
        "django.middleware.clickjacking.XFrameOptionsMiddleware",
        # Middleware de tenancy do Mirevion
        "apps.shared.middleware.tenancy.TenantMiddleware",
    ]

    ROOT_URLCONF = "config.urls"

    TEMPLATES = [
        {
            "BACKEND": "django.template.backends.django.DjangoTemplates",
            "DIRS": [],
            "APP_DIRS": True,
            "OPTIONS": {
                "context_processors": [
                    "django.template.context_processors.request",
                    "django.contrib.auth.context_processors.auth",
                    "django.contrib.messages.context_processors.messages",
                ],
            },
        },
    ]

    WSGI_APPLICATION = "config.wsgi.application"
    ASGI_APPLICATION = "config.asgi.application"

    # Banco de dados
    DATABASES = {
        "default": {
            "ENGINE": "django.db.backends.postgresql",
            "NAME": "mirevion",
            "USER": "mirevion",
            "PASSWORD": "change-me",
            "HOST": "localhost",
            "PORT": "5432",
        }
    }

    # Validadores de senha
    AUTH_PASSWORD_VALIDATORS = [
        {"NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator"},
        {"NAME": "django.contrib.auth.password_validation.MinimumLengthValidator"},
        {"NAME": "django.contrib.auth.password_validation.CommonPasswordValidator"},
        {"NAME": "django.contrib.auth.password_validation.NumericPasswordValidator"},
    ]

    # Internacionalização
    LANGUAGE_CODE = "pt-br"
    TIME_ZONE = "America/Sao_Paulo"
    USE_I18N = True
    USE_TZ = True

    # Arquivos estáticos
    STATIC_URL = "static/"
    DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

    # Django REST Framework
    REST_FRAMEWORK = {
        "DEFAULT_AUTHENTICATION_CLASSES": (
            "rest_framework_simplejwt.authentication.JWTAuthentication",
        ),
        "DEFAULT_PERMISSION_CLASSES": (
            "rest_framework.permissions.IsAuthenticated",
        ),
        "DEFAULT_SCHEMA_CLASS": "drf_spectacular.openapi.AutoSchema",
        "DEFAULT_PAGINATION_CLASS": "rest_framework.pagination.PageNumberPagination",
        "PAGE_SIZE": 20,
    }

    # drf-spectacular
    SPECTACULAR_SETTINGS = {
        "TITLE": "Mirevion SaaS API",
        "DESCRIPTION": "API do Mirevion — Plataforma Empresarial Unificada",
        "VERSION": "1.0.0",
        "SERVE_INCLUDE_SCHEMA": False,
    }

    # Simples JWT
    SIMPLE_JWT = {
        "ACCESS_TOKEN_LIFETIME_MINUTES": 15,
        "REFRESH_TOKEN_LIFETIME_DAYS": 7,
        "ROTATE_REFRESH_TOKENS": True,
        "BLACKLIST_AFTER_ROTATION": True,
    }

    # CORS
    CORS_ALLOWED_ORIGINS: list[str] = ["http://localhost:5173", "http://localhost:3000"]
    CSRF_TRUSTED_ORIGINS: list[str] = ["http://localhost:5173", "http://localhost:3000"]

    # Celery
    CELERY_BROKER_URL: str = "redis://localhost:6379/0"
    CELERY_RESULT_BACKEND: str = "redis://localhost:6379/0"
    CELERY_TASK_ALWAYS_EAGER: bool = False

    # MinIO / S3
    AWS_ACCESS_KEY_ID: str = "mirevion"
    AWS_SECRET_ACCESS_KEY: str = "change-me"
    AWS_STORAGE_BUCKET_NAME: str = "mirevion-dev"
    AWS_S3_ENDPOINT_URL: str = "http://localhost:9000"
    AWS_S3_REGION_NAME: str = "us-east-1"

    model_config = {"env_file": ".env", "env_file_encoding": "utf-8"}


settings = Settings()


def get_settings() -> Settings:
    return settings


# Expor atributos do settings para compatibilidade com Django
SECRET_KEY = settings.SECRET_KEY
DEBUG = settings.DEBUG
ALLOWED_HOSTS = settings.ALLOWED_HOSTS
INSTALLED_APPS = settings.INSTALLED_APPS
MIDDLEWARE = settings.MIDDLEWARE
ROOT_URLCONF = settings.ROOT_URLCONF
TEMPLATES = settings.TEMPLATES
WSGI_APPLICATION = settings.WSGI_APPLICATION
ASGI_APPLICATION = settings.ASGI_APPLICATION
DATABASES = settings.DATABASES
AUTH_PASSWORD_VALIDATORS = settings.AUTH_PASSWORD_VALIDATORS
LANGUAGE_CODE = settings.LANGUAGE_CODE
TIME_ZONE = settings.TIME_ZONE
USE_I18N = settings.USE_I18N
USE_TZ = settings.USE_TZ
STATIC_URL = settings.STATIC_URL
DEFAULT_AUTO_FIELD = settings.DEFAULT_AUTO_FIELD
REST_FRAMEWORK = settings.REST_FRAMEWORK
SPECTACULAR_SETTINGS = settings.SPECTACULAR_SETTINGS
SIMPLE_JWT = settings.SIMPLE_JWT
CORS_ALLOWED_ORIGINS = settings.CORS_ALLOWED_ORIGINS
CSRF_TRUSTED_ORIGINS = settings.CSRF_TRUSTED_ORIGINS
CELERY_BROKER_URL = settings.CELERY_BROKER_URL
CELERY_RESULT_BACKEND = settings.CELERY_RESULT_BACKEND
CELERY_TASK_ALWAYS_EAGER = settings.CELERY_TASK_ALWAYS_EAGER
AWS_ACCESS_KEY_ID = settings.AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY = settings.AWS_SECRET_ACCESS_KEY
AWS_STORAGE_BUCKET_NAME = settings.AWS_STORAGE_BUCKET_NAME
AWS_S3_ENDPOINT_URL = settings.AWS_S3_ENDPOINT_URL
AWS_S3_REGION_NAME = settings.AWS_S3_REGION_NAME
