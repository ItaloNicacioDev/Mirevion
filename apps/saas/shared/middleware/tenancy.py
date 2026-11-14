from django.utils.deprecation import MiddlewareMixin
from django.contrib.auth import get_user_model
from apps.tenancy.models import Organization

User = get_user_model()


class TenantMiddleware(MiddlewareMixin):
    """
    Resolve a organização do usuário autenticado e anexa ao request.

    Regras de segurança:
    - O tenant (organização) é resolvido exclusivamente a partir do usuário
      autenticado e suas Memberships.
    - Nunca confia em header X-Tenant ou tenant_id enviado pelo cliente.
    """

    def process_request(self, request):
        request.organization = None
        request.current_organization_id = None

        if not request.user or not request.user.is_authenticated:
            return None

        try:
            membership = (
                request.user.memberships.select_related("organization")
                .filter(is_active=True, organization__is_active=True)
                .first()
            )
        except Exception:
            membership = None

        if membership:
            request.organization = membership.organization
            request.current_organization_id = str(membership.organization.id)

        return None
