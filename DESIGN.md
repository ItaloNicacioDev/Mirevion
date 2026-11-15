---
version: alpha
name: Mirevion
description: "Sistema visual para plataforma de gestão empresarial (ERP/SaaS) voltada a PMEs brasileiras. Modo Operate: clareza, confiança financeira e eficiência operacional superam expressão decorativa."
colors:
  background: "#F7F5F0"
  foreground: "#3A3734"
  card: "#FFFFFF"
  card-foreground: "#3A3734"
  primary: "#1F3A5F"
  on-primary: "#FFFFFF"
  secondary: "#C9C3B8"
  on-secondary: "#3A3734"
  accent: "#B45309"
  on-accent: "#FFFFFF"
  muted: "#EDE9E0"
  muted-foreground: "#5C574F"
  border: "#D8D3C8"
  ring: "#1F3A5F"
  destructive: "#B91C1C"
  on-destructive: "#FFFFFF"
  success: "#15803D"
  on-success: "#FFFFFF"
  warning: "#D97706"
  on-warning: "#FFFFFF"
typography:
  display:
    fontFamily: "DM Sans"
    fontSize: "3.75rem"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  h1:
    fontFamily: "DM Sans"
    fontSize: "2.5rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  h2:
    fontFamily: "DM Sans"
    fontSize: "1.875rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  h3:
    fontFamily: "DM Sans"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0em"
  body_md:
    fontFamily: "Inter"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
  body_sm:
    fontFamily: "Inter"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
  label:
    fontFamily: "Inter"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.01em"
  caption:
    fontFamily: "Inter"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.02em"
  mono:
    fontFamily: "JetBrains Mono"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.03em"
rounded:
  sm: "6px"
  md: "10px"
  lg: "16px"
  xl: "24px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
shadow:
  sm: "0px 1px 2px 0px rgb(0 0 0 / 0.04)"
  md: "0px 4px 6px -1px rgb(0 0 0 / 0.06), 0px 2px 4px -2px rgb(0 0 0 / 0.04)"
  lg: "0px 10px 15px -3px rgb(0 0 0 / 0.08), 0px 4px 6px -4px rgb(0 0 0 / 0.05)"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "#934307"
  button-secondary:
    backgroundColor: "{colors.card}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
    typography: "{typography.label}"
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.muted-foreground}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
    typography: "{typography.label}"
  input-default:
    backgroundColor: "{colors.card}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.sm}"
    padding: "8px 12px"
    typography: "{typography.body-md}"
  card-default:
    backgroundColor: "{colors.card}"
    rounded: "{rounded.lg}"
  badge-status:
    backgroundColor: "{colors.muted}"
    textColor: "#5C574F"
    rounded: "{rounded.full}"
    padding: "2px 8px"
    typography: "{typography.caption}"

---

## Overview

Mirevion é uma plataforma de gestão empresarial modular (ERP/SaaS) para PMEs brasileiras. Sua identidade visual deve transmitir confiança financeira, clareza operacional e proximidade com o contexto de trabalho de escritório — sem parecer um dashboard genérico de SaaS gerado por IA.

O sistema adota o **modo Operate**: o visitante completa tarefas (financeiro, folha, RH, despesas). Scanability, consistência, expectativas nativas e o cenário real de uso superam expressão decorativa.

## Cores

- **Background (#F7F5F0):** Off-white quente que lembra papel de escritório, não branco clínico (#FFFFFF) nem cream de IA (#F4F1EA). Reduz cansaço visual em uso prolongado.
- **Foreground (#3A3734):** Cinza quente escuro para texto principal. Nunca preto puro (#000000), que gera contraste excessivo e leitura cansativa.
- **Primary (#1F3A5F):** Azul-tinta profundo. Transmite solidez e confiança financeira. Diferente do azul corporativo genérico (#1E40AF) e do roxo da Stripe/Linear.
- **Accent (#B45309):** Terracota queimada para CTAs primários. Cor quente e brasileira, usada com moderação — apenas em ações principais e estados ativos.
- **Card (#FFFFFF):** Superfície branca para cards e containers, criando contraste sutil com o background off-white.
- **Muted (#EDE9E0) / Muted Foreground (#7A756D):** Texto secundário e áreas de baixa ênfase.
- **Border (#D8D3C8):** Bordas suaves, não pretas nem cinzas frios.
- **Destructive (#B91C1C), Success (#15803D), Warning (#D97706):** Usados apenas para estados semânticos, nunca como decoração.

## Tipografia

- **DM Sans** para display e headings: geométrica, calorosa, contemporânea. Diferente do Inter onipresente e do Geist do Vercel.
- **Inter** para body e labels: leitura excelente em interfaces densas de dados (tabelas, formulários financeiros).
- **JetBrains Mono** para dados tabulares, códigos e rótulos técnicos.
- Quatro pesos funcionais: 400 (leitura), 500 (UI/interativo), 600 (ênfase), 700 (display).
- Letras maiúsculas com rastreio sutil (0.01em) apenas em labels de formulário — nunca em cabeçalhos de seção (anti-pattern de IA).
- Line lengths abaixo de 80 caracteres para leitura confortável.

## Layout

- Espaçamento base de 8px com escala orgânica (4, 8, 16, 24, 32, 48). Sem valores fracionários aleatórios.
- Container máximo de ~1200px. Navegação lateral fixa em desktop, hamburger em mobile.
- Separação de seções por mudança de cor de fundo (branco ↔ off-white quente) e espaçamento, nunca por divisores pesados.
- Alinhamento à esquerda (left-aligned) para formulários e dados; centralizado apenas para CTAs de hero e títulos de página vazios.
- Border radius diferenciado por hierarquia: 6px (botões/inputs funcionais), 10px (cards padrão), 16px (cards em destaque), 9999px (badges/status). Nunca o mesmo raio em tudo.

## Profundidade e Elevação

- Sombras sutis, multi-camada, com opacidade individual abaixo de 0.08. Nenhuma sombra pesada ou óbvia.
- Bordas definem bordos; sombras reforçam elevação de forma discreta.
- Elementos flutuantes (dropdowns, modais) usam sombra de nível médio.

## Componentes

- **Botão primário:** Terracota (#B45309), texto branco, raio 10px, apenas para CTAs principais.
- **Botão secundário:** Fundo branco, texto azul-tinta, borda suave (#D8D3C8).
- **Botão ghost:** Fundo transparente, texto cinza-quente, para ações terciárias.
- **Input:** Fundo branco, borda suave, raio 6px, foco com anel azul-tinta.
- **Card:** Fundo branco, borda 1px #D8D3C8, raio 16px, sombra sutil.
- **Badge de status:** Pill (9999px), fundo muted (#EDE9E0), texto muted-foreground (#7A756D). Cores semânticas apenas para status real (sucesso/alerta/erro).

## Regras de Ouro (Do's and Don'ts)

**Do:**
- Use DM Sans para títulos e Inter para corpo de texto.
- Mantenha a paleta enxuta: dois tons de azul-tinta, um terracota, neutros quentes.
- Use bordas suaves e sombras discretas; profundidade vem da diferença de luminosidade entre surfaces.
- Letras maiúsculas com rastreio só em labels de campo, nunca em seções.
- Respeite prefers-reduced-motion; movimento apenas em resposta à ação do usuário.

**Don't:**
- Não use warm cream (#F4F1EA) com serif display — leitura de IA.
- Não use cards idênticos com mesma borda-radius e sombra em todo o lugar.
- Não use ALL-CAPS em rótulos de seção ou meta strings com pontos separados.
- Não use pure white (#FFFFFF) como background principal nem pure black (#000000) como texto.
- Não use roxo (#533afd) ou indigo-violet (#5e6ad2) como marca — já pertencem a Stripe e Linear.
- Não adicione ícones decorativos sem função; ícones apenas quando adicionam clareza.
