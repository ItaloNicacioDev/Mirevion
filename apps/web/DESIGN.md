---
version: alpha
name: Mirevion
description: Plataforma empresarial unificada modular (ERP/SaaS) para PMEs brasileiras. Identidade visual corporativa, confiança, precisão e clareza operacional.
colors:
  primary: "#1f3a5f"
  primary-foreground: "#ffffff"
  secondary: "#c9c3b8"
  secondary-foreground: "#3a3734"
  accent: "#b45309"
  accent-foreground: "#ffffff"
  background: "#f7f5f0"
  foreground: "#3a3734"
  card: "#ffffff"
  card-foreground: "#3a3734"
  muted: "#ede9e0"
  muted-foreground: "#5c574f"
  border: "#d8d3c8"
  ring: "#1f3a5f"
  destructive: "#b91c1c"
  destructive-foreground: "#ffffff"
  success: "#15803d"
  success-foreground: "#ffffff"
  warning: "#d97706"
  warning-foreground: "#ffffff"
typography:
  h1:
    fontFamily: "DM Sans"
    fontSize: 3rem
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  h2:
    fontFamily: "DM Sans"
    fontSize: 2rem
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  h3:
    fontFamily: "DM Sans"
    fontSize: 1.5rem
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0em"
  body-md:
    fontFamily: "Inter"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
  body-sm:
    fontFamily: "Inter"
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
  label:
    fontFamily: "Inter"
    fontSize: 0.875rem
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.01em"
  caption:
    fontFamily: "Inter"
    fontSize: 0.75rem
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.02em"
rounded:
  sm: 6px
  md: 10px
  lg: 16px
  xl: 24px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
shadows:
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)"
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-foreground}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "#92400e"
  button-primary-disabled:
    backgroundColor: "{colors.muted}"
    textColor: "{colors.muted-foreground}"
  input-base:
    backgroundColor: "{colors.card}"
    textColor: "{colors.card-foreground}"
    border: "1px solid {colors.border}"
    rounded: "{rounded.md}"
    padding: "10px 14px"
  input-focus:
    ring: "2px solid {colors.ring}"
    borderColor: "transparent"
  card-base:
    backgroundColor: "{colors.card}"
    border: "1px solid {colors.border}"
    rounded: "{rounded.lg}"
    shadow: "{shadows.md}"
layout:
  containerMaxWidth: 1200px
  sidebarWidth: 256px
  sidebarCollapsedWidth: 64px
  headerHeight: 64px

## Overview

Mirevion é uma plataforma de gestão empresarial para PMEs brasileiras. A identidade visual transmite confiança, precisão e clareza operacional — adequada para gestores que lidam com finanças, folha de pagamento e recursos humanos. A paleta usa azul marinho como cor institucional (seriedade, estabilidade) e âmbar como único tom de interação (energia, ação), sobre um fundo off-white quente que reduz fadiga visual em uso prolongado.

## Colors

- **Primary (#1f3a5f):** Azul marinho institucional. Usado em títulos, navegação, sidebar e áreas de destaque. Transmite seriedade e estabilidade financeira.
- **Accent (#b45309):** Âmbar queimado — único tom de interação. Reservado para CTAs, botões principais, estados ativos e destaques. Nunca usado decorativamente.
- **Background (#f7f5f0):** Off-white quente como fundo principal. Reduz contraste excessivo com branco puro, diminuindo fadiga visual.
- **Card (#ffffff):** Superfícies elevadas (cards, formulários, modais). Sempre com borda sutil (#d8d3c8) e sombra leve.
- **Muted (#ede9e0):** Fundo secundário para áreas menos importantes e estados de repouso.

## Typography

DM Sans para títulos (display/h1-h3), Inter para corpo (body/label/caption). Duas famílias claramente distintas. Títulos usam pesos 600 com tracking apertado; corpo usa peso 400 com line-height relaxado (1.6) para leitura confortável em telas.

## Layout

Sidebar fixa à esquerda (256px desktop, recolhível para 64px), conteúdo deslocado à direita. Header sticky no topo das páginas internas. Login em layout dividido (metade marca, metade formulário) em desktop, empilhado em mobile.

## Components

button-primary é o único botão de alta ênfase. Input-base usa borda sutil e anel de foco no tom primary. card-base aplica borda e sombra consistentes em todos os containers.

## Do's and Don'ts

- Use #1f3a5f para títulos e navegação; #b45309 apenas para interação.
- Não use cores decorativas fora da paleta definida.
- Mantenha bordas em #d8d3c8 e sombras leves; evite bordas fortes ou sombras pesadas.
- Corpo de texto sempre em Inter, peso 400, line-height 1.6 mínimo.
- Títulos nunca em ALL CAPS; use sentence case.
