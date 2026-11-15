import { useLocation } from "react-router-dom";
import { useTheme } from "@/components/ThemeProvider";
import { Moon, Sun } from "lucide-react";

interface PageHeaderProps {
  title: string;
  description: string;
  action?: React.ReactNode;
}

export default function PageHeader({ title, description, action }: PageHeaderProps) {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const isActive = (href: string) =>
    location.pathname === href || (href !== "/" && location.pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-10 bg-card/80 backdrop-blur-md border-b border-border px-6 py-4 shrink-0">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className={`font-display text-h1 font-semibold text-foreground tracking-tight ${isActive("/") ? "text-primary" : ""}`}>
            {title}
          </h1>
          {description && (
            <p className="body-sm text-muted-foreground mt-1 leading-relaxed">{description}</p>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label={theme === "dark" ? "Alternar para modo claro" : "Alternar para modo escuro"}
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          {action && (
            <div className="flex items-center gap-2">{action}</div>
          )}
        </div>
      </div>
    </header>
  );
}
