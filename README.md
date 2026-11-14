# Mirevion

Plataforma empresarial unificada modular (ERP / SaaS) para pequenas e médias empresas brasileiras.

## Aplicações

- **Mirevion SaaS** — Backend, API, autenticação, regras de negócio e núcleo da plataforma (Python / Django).
- **Mirevion Web** — Painel administrativo e empresarial acessível pelo navegador (React / TypeScript).
- **Mirevion Mobile** — Aplicativo Android e iOS para funcionários, gestores e administradores (Flutter / Dart).

## Stack tecnológica

| Camada | Tecnologia |
|--------|------------|
| Backend | Python 3.13 + Django 5.2.x + Django REST Framework |
| Banco | PostgreSQL 16 |
| Cache / Fila | Redis 7 + Celery |
| Armazenamento de arquivos | MinIO (dev) / S3 compatível (prod) |
| API Documentação | drf-spectacular (OpenAPI 3) |
| Frontend Web | React 18 + TypeScript + Vite + Tailwind CSS + Radix UI |
| Mobile | Flutter (canal stable) + Dart + Riverpod + go_router |
| Autenticação | JWT (access curto + refresh com rotation) |
| Multi-tenancy | Banco compartilhado, schema compartilhado, tenant_id + RLS |

## Iniciando o ambiente de desenvolvimento

### Pré-requisitos

- Docker e Docker Compose
- uv (gerenciador de dependências Python)
- Node 20 LTS ou 22 LTS
- Flutter SDK (canal stable) — apenas para desenvolvimento mobile

### Passos

1. Clone o repositório e entre no diretório:

   ```bash
   git clone <repositorio>
   cd Mirevion
   ```

2. Copie o arquivo de variáveis de ambiente:

   ```bash
   cp .env.example .env
   # Preencha os valores reais no .env
   ```

3. Inicie a infraestrutura:

   ```bash
   docker compose up -d postgres redis minio
   ```

4. Execute as migrações do Django:

   ```bash
   cd apps/saas
   uv sync
   uv run python manage.py migrate
   ```

5. Inicie a API e o frontend:

   ```bash
   # Terminal 1 — API
   uv run python manage.py runserver 0.0.0.0:8000

   # Terminal 2 — Web
   cd ../web
   npm install
   npm run dev
   ```

6. Acesse:

   - API: http://localhost:8000/
   - OpenAPI / Swagger: http://localhost:8000/api/docs/
   - Web: http://localhost:5173/

### Rodando tudo com Docker Compose

```bash
docker compose up --build
```

## Estrutura de pastas

```
Mirevion/
├── apps/          # Três aplicações independentes (saas, web, mobile)
├── contracts/     # Contrato OpenAPI (gerado pelo drf-spectacular)
├── infrastructure/# Imagens e configurações de infraestrutura
├── database/      # Seeds, documentação e scripts auxiliares
├── docs/          # Documentação técnica
├── scripts/       # Scripts utilitários
└── docker-compose*.yml
```

## Multi-tenancy

O Mirevion suporta múltiplas organizações isoladas no mesmo banco de dados:

- **Organization**: grupo empresarial (nível superior de isolamento).
- **Company**: CNPJ pertencente a uma organização.
- **Membership**: vínculo do usuário com uma organização.

O tenant é resolvido pelo usuário autenticado. Nunca confie em `tenant_id` enviado pelo cliente.

## Licença

Apache License 2.0.

## Contribuição

Veja `CONTRIBUTING.md`.
