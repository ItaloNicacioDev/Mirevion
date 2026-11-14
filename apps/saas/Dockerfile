FROM python:3.13-slim

WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    UV_COMPILE_BYTECODE=1 \
    UV_LINK_MODE=copy

# Dependências do sistema
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    build-essential \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Instala uv
COPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx /bin/

# Copia arquivos de dependência
COPY pyproject.toml uv.lock ./

# Instala dependências do projeto (sem as do grupo dev em produção)
RUN uv sync --frozen --no-cache --no-dev

# Copia o código da aplicação
COPY . .

# Porta da aplicação
EXPOSE 8000

# Entrypoint: aguarda serviços e inicia a API
ENTRYPOINT ["sh", "-c", "uv run python manage.py migrate --noinput && uv run python manage.py runserver 0.0.0.0:8000"]
