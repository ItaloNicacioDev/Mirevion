# Contribuindo com o Mirevion

Obrigado por se interessar em contribuir com o Mirevion!

## Como começar

1. Leia o `README.md` para entender o projeto e iniciar o ambiente.
2. Leve em conta a arquitetura definida: três aplicações independentes (SaaS, Web, Mobile).
3. Siga o planejamento de fases descrito na documentação.

## Padrões de código

- Backend: Python 3.13, Django, Ruff (lint + format).
- Web: TypeScript strict, ESLint, Tailwind CSS, Radix UI.
- Mobile: Flutter, Dart, Riverpod, go_router.

## Pull Requests

- Abra um issue antes de enviar um PR para funcionalidades novas.
- Os PRs devem passar nos testes automatizados e na CI.
- Nenhum subagente deve modificar contratos ou arquivos compartilhados sem autorização do agente principal.

## Licença

Apache License 2.0.
