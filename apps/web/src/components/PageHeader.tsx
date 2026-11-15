import { useLocation } from "react-router-dom";

interface PageHeaderProps {
  title: string;
  description: string;
  action?: React.ReactNode;
}

export default function PageHeader({ title, description, action }: PageHeaderProps) {
  const location = useLocation();
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
        {action && (
          <div className="flex items-center gap-2">{action}</div>
        )}
      </div>
    </header>
  );
}
