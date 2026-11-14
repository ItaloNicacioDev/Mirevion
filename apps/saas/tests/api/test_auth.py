from django.test import TestCase
from rest_framework.test import APIClient
from django.contrib.auth import get_user_model

User = get_user_model()


class AuthenticationTestCase(TestCase):
    """Testes de autenticação JWT."""

    def setUp(self):
        self.user = User.objects.create_user(
            email="auth@test.com", password="senha123"
        )
        self.client = APIClient()

    def test_login_endpoint_exists(self):
        """Endpoint de login responde (400 se sem dados, 200 se válido)."""
        response = self.client.post("/api/v1/auth/login/", {})
        self.assertIn(response.status_code, [400, 200])

    def test_login_with_valid_credentials(self):
        """Login com credenciais válidas retorna tokens."""
        response = self.client.post(
            "/api/v1/auth/login/",
            {"email": "auth@test.com", "password": "senha123"},
            format="json",
        )
        self.assertEqual(response.status_code, 200)
        self.assertIn("access", response.data)
        self.assertIn("refresh", response.data)

    def test_login_with_invalid_credentials(self):
        """Login com credenciais inválidas retorna 401."""
        response = self.client.post(
            "/api/v1/auth/login/",
            {"email": "auth@test.com", "password": "senha_errada"},
            format="json",
        )
        self.assertEqual(response.status_code, 401)

    def test_authenticated_me_endpoint(self):
        """Endpoint /users/me/ requer autenticação."""
        self.client.force_authenticate(user=self.user)
        response = self.client.get("/api/v1/users/me/")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data["email"], "auth@test.com")
