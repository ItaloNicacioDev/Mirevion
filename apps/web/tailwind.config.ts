/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        card: "var(--color-card)",
        "card-foreground": "var(--color-card-foreground)",
        primary: {
          DEFAULT: "var(--color-primary)",
          foreground: "var(--color-on-primary)",
        },
        "primary-light": "var(--color-primary-light)",
        "success-light": "var(--color-success-light)",
        "warning-light": "var(--color-warning-light)",
        secondary: {
          DEFAULT: "var(--color-secondary)",
          foreground: "var(--color-on-secondary)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          foreground: "var(--color-on-accent)",
        },
        muted: {
          DEFAULT: "var(--color-muted)",
          foreground: "var(--color-muted-foreground)",
        },
        border: "var(--color-border)",
        ring: "var(--color-ring)",
        destructive: {
          DEFAULT: "var(--color-destructive)",
          foreground: "var(--color-on-destructive)",
        },
        success: {
          DEFAULT: "var(--color-success)",
          foreground: "var(--color-on-success)",
        },
        warning: {
          DEFAULT: "var(--color-warning)",
          foreground: "var(--color-on-warning)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-bodyMd)", "system-ui", "sans-serif"],
        label: ["var(--font-label)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        display: ["var(--text-display)", { lineHeight: "1.05", letterSpacing: "var(--tracking-display)" }],
        h1: ["var(--text-h1)", { lineHeight: "1.2", letterSpacing: "var(--tracking-h1)" }],
        h2: ["var(--text-h2)", { lineHeight: "1.25", letterSpacing: "var(--tracking-h2)" }],
        h3: ["var(--text-h3)", { lineHeight: "1.3", letterSpacing: "var(--tracking-h3)" }],
        "body-md": ["var(--text-bodyMd)", { lineHeight: "1.6", letterSpacing: "var(--tracking-bodyMd)" }],
        "body-sm": ["var(--text-body-sm)", { lineHeight: "1.5", letterSpacing: "var(--tracking-body-sm)" }],
        label: ["var(--text-label)", { lineHeight: "1.5", letterSpacing: "var(--tracking-label)" }],
        caption: ["var(--text-caption)", { lineHeight: "1.5", letterSpacing: "var(--tracking-caption)" }],
        mono: ["var(--text-mono)", { lineHeight: "1.5", letterSpacing: "var(--tracking-mono)" }],
      },
      fontWeight: {
        "400": "400",
        "500": "500",
        "600": "600",
        "700": "700",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        full: "var(--radius-full)",
      },
      spacing: {
        xs: "var(--spacing-xs)",
        sm: "var(--spacing-sm)",
        md: "var(--spacing-md)",
        lg: "var(--spacing-lg)",
        xl: "var(--spacing-xl)",
        xxl: "var(--spacing-xxl)",
      },
    },
  },
  plugins: [],
}
