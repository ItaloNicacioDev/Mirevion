import { Outlet, useLocation, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, LogOut } from "lucide-react";

const navItems = [
  { href: "/", label: "Visão geral" },
  { href: "/financeiro", label: "Financeiro" },
  { href: "/rh", label: "Recursos Humanos" },
  { href: "/despesas", label: "Despesas" },
  { href: "/organizacao", label: "Organização" },
];

export default function Layout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Mantém o token de auth no localStorage para CSRF/cookies
  useEffect(() => {
    const token = localStorage.getItem("mirevion_token");
    if (token && location.pathname !== "/login") {
      // Token já existe, sessão ativa
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar desktop */}
      <nav className="hidden lg:flex lg:w-64 flex-col border-r border-border bg-card">
        <div className="p-6">
          <div className="font-display text-xl font-semibold text-foreground tracking-tight mb-8">
            Mirevion
          </div>
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `block px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? "bg-accent text-on-accent"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
        <div className="p-6 border-t border-border">
          <button
            onClick={() => localStorage.removeItem("mirevion_token")}
            className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-destructive hover:bg-red-50 rounded-md transition-colors"
          >
            <LogOut className="w-4 h-4" /> Sair
          </button>
        </div>
      </nav>

      {/* Conteúdo principal */}
      <div className="flex-1 flex flex-col min-h-0">
        {/* Header mobile + desktop top */}
        <header className="sticky top-0 z-20 bg-card border-b border-border px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground rounded-sm hover:bg-muted"
              onClick={() => setSidebarOpen((s) => !s)}
              aria-label={sidebarOpen ? "Fechar menu" : "Abrir menu"}
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <div className="font-display text-lg font-semibold text-foreground tracking-tight">
              Mirevion
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-sm text-muted-foreground">
              Sessão ativa
            </span>
            <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md transition-colors">
              <span className="w-2 h-2 rounded-full bg-success"></span>
              Online
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6 lg:p-8 shrink-0">
          <Outlet />
        </main>
      </div>

      {/* Sidebar mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 lg:hidden backdrop-blur-sm" onClick={() => setSidebarOpen(false)} aria-hidden="true" />
      )}
      {sidebarOpen && (
        <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border flex-col lg:hidden transform transition-transform duration-300 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="p-6 flex items-center justify-between">
            <div className="font-display text-lg font-semibold text-foreground tracking-tight">
              Mirevion
            </div>
            <button
              className="p-2 text-muted-foreground hover:text-foreground"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="p-4 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? "bg-accent text-on-accent"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="p-4 border-t border-border">
            <button
              onClick={() => {
                localStorage.removeItem("mirevion_token");
                setSidebarOpen(false);
              }}
              className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-destructive hover:bg-red-50 rounded-md transition-colors"
            >
              <LogOut className="w-4 h-4" /> Sair
            </button>
          </div>
        </aside>
      )}
    </div>
  );
}
