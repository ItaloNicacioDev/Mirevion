import pytest
from django.test import TestCase
from rest_framework.test import APIClient
from django.contrib.auth import get_user_model
from apps.tenancy.models import Organization
from apps.users.models import Membership, Role

User = get_user_model()


class TenantIsolationTestCase(TestCase):
    """Testes de isolamento multi-tenant (acesso cruzado)."""

    def setUp(self):
        self.org_a = Organization.objects.create(
            name="Organização A", cnpj="11.111.111/0001-11"
        )
        self.org_b = Organization.objects.create(
            name="Organização B", cnpj="22.222.222/0001-22"
        )

        self.user_a = User.objects.create_user(
            email="user_a@orga.com", password="senha123"
        )
        self.user_b = User.objects.create_user(
            email="user_b@orgb.com", password="senha123"
        )

        self.role_a = Role.objects.create(
            name="Admin", organization=self.org_a, is_system=True
        )
        self.role_b = Role.objects.create(
            name="Admin", organization=self.org_b, is_system=True
        )

        Membership.objects.create(
            user=self.user_a,
            organization=self.org_a,
            role=self.role_a,
        )
        Membership.objects.create(
            user=self.user_b,
            organization=self.org_b,
            role=self.role_b,
        )

    def test_user_organization_scoping(self):
        """Usuário da Org A deve ver apenas a Org A."""
        client = APIClient()
        client.force_authenticate(user=self.user_a)

        response = client.get("/api/v1/organizations/")
        # TODO: quando o endpoint de organizações estiver implementado,
        # verificar que o usuário só vê organizações de sua membership.
        self.assertEqual(response.status_code, 200)

    def test_user_belongs_to_correct_organization(self):
        """Usuário autenticado resolve a organização correta."""
        self.assertEqual(
            self.user_a.memberships.get(is_active=True).organization,
            self.org_a,
        )
        self.assertEqual(
            self.user_b.memberships.get(is_active=True).organization,
            self.org_b,
        )

    def test_organizations_are_distinct(self):
        """Organizações são entidades distintas."""
        self.assertNotEqual(self.org_a.id, self.org_b.id)
        self.assertNotEqual(self.org_a.cnpj, self.org_b.cnpj)

    def test_company_belongs_to_single_organization(self):
        """Uma empresa pertence a exatamente uma organização."""
        from apps.tenancy.models import Company

        company = Company.objects.create(
            organization=self.org_a,
            name="Empresa da Org A",
            cnpj="33.333.333/0001-33",
        )
        self.assertEqual(company.organization, self.org_a)
        self.assertNotEqual(company.organization, self.org_b)
