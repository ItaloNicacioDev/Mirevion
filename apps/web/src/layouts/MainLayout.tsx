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

const navLinkClass = (isActive: boolean) =>
  `block px-4 py-3 text-sm font-medium rounded-md transition-colors ${isActive ? "bg-accent text-on-accent" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`;

export default function Layout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("mirevion_token");
    if (token && location.pathname !== "/login") {
      // Token já existe, sessão ativa
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sidebar desktop — fixa fora do fluxo, não empurra o conteúdo */}
      <nav className="hidden lg:flex lg:fixed lg:inset-y-0 lg:left-0 lg:z-20 lg:w-64 lg:border-r lg:border-border lg:bg-card lg:overflow-y-auto">
        <div className="flex flex-col h-full">
          <div className="p-6 shrink-0">
            <div className="font-display text-xl font-semibold text-foreground tracking-tight mb-8">Mirevion</div>
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className="p-4 space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  end={item.href === "/"}
                  className={({ isActive }) => navLinkClass(isActive)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="p-6 border-t border-border shrink-0">
            <button
              onClick={() => localStorage.removeItem("mirevion_token")}
              className="w-full flex items-center gap-2 px-4 py-3 text-sm font-medium text-destructive hover:bg-red-50 rounded-md transition-colors"
            >
              <LogOut className="w-4 h-4" /> Sair
            </button>
          </div>
        </div>
      </nav>

      {/* Conteúdo principal — deslocado à direita para não ficar embaixo da sidebar fixa */}
      <div className="flex-1 lg:pl-64 min-h-0">
        {/* Botão hamburguer mobile — fixo no topo */}
        <button
          className="sticky top-0 z-30 lg:hidden p-2 text-muted-foreground hover:text-foreground rounded-sm hover:bg-muted transition-colors"
          onClick={() => setSidebarOpen((s) => !s)}
          aria-label={sidebarOpen ? "Fechar menu" : "Abrir menu"}
        >
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
        <main className="overflow-y-auto p-6 lg:p-8 pt-6 lg:pt-0">
          <Outlet />
        </main>
      </div>

      {/* Sidebar mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 lg:hidden backdrop-blur-sm" onClick={() => setSidebarOpen(false)} aria-hidden="true" />
      )}
      {sidebarOpen && (
        <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border flex-col lg:hidden transform transition-transform duration-300 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="p-6 flex items-center justify-between shrink-0">
            <div className="font-display text-lg font-semibold text-foreground tracking-tight">Mirevion</div>
            <button
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="p-4 space-y-1 flex-1 overflow-y-auto">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                end={item.href === "/"}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) => navLinkClass(isActive)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="p-4 border-t border-border shrink-0">
            <button
              onClick={() => {
                localStorage.removeItem("mirevion_token");
                setSidebarOpen(false);
              }}
              className="w-full flex items-center gap-2 px-4 py-3 text-sm font-medium text-destructive hover:bg-red-50 rounded-md transition-colors"
            >
              <LogOut className="w-4 h-4" /> Sair
            </button>
          </div>
        </aside>
      )}
    </div>
  );
}
