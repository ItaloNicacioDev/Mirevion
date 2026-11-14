from django.db import models
import uuid


class Organization(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255)
    cnpj = models.CharField(max_length=18, unique=True, db_index=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "organizations_organization"
        verbose_name = "Organização"
        verbose_name_plural = "Organizações"
        ordering = ["name"]

    def __str__(self):
        return self.name


class Company(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    organization = models.ForeignKey(
        Organization, on_delete=models.CASCADE, related_name="companies"
    )
    name = models.CharField(max_length=255)
    cnpj = models.CharField(max_length=18, unique=True, db_index=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "organizations_company"
        verbose_name = "Empresa"
        verbose_name_plural = "Empresas"
        ordering = ["name"]
        constraints = [
            models.UniqueConstraint(
                fields=["organization", "cnpj"],
                name="unique_company_cnpj_per_organization_org",
            )
        ]
        indexes = [
            models.Index(fields=["organization", "cnpj"]),
        ]

    def __str__(self):
        return self.name
