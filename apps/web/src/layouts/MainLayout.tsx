import { Outlet, useLocation, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, LogOut, LayoutDashboard, CreditCard, Users, Wallet, Building2 } from "lucide-react";

const navItems = [
  { href: "/", label: "Visão geral", icon: LayoutDashboard },
  { href: "/financeiro", label: "Financeiro", icon: CreditCard },
  { href: "/rh", label: "Recursos Humanos", icon: Users },
  { href: "/despesas", label: "Despesas", icon: Wallet },
  { href: "/organizacao", label: "Organização", icon: Building2 },
];

export default function Layout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("mirevion_sidebar_collapsed") === "true";
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem("mirevion_sidebar_collapsed", String(collapsed));
  }, [collapsed]);

  useEffect(() => {
    const token = localStorage.getItem("mirevion_token");
    if (!token && location.pathname !== "/login") {
      window.location.href = "/login";
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sidebar desktop — fixa fora do fluxo, recolhível */}
      <nav
        className={`hidden lg:flex lg:fixed lg:inset-y-0 lg:left-0 lg:z-20 lg:border-r lg:border-border lg:bg-card lg:overflow-y-auto lg:transition-width duration-300 ease-in-out ${collapsed ? "lg:w-16" : "lg:w-64"}`}
      >
        <div className="flex flex-col h-full">
          <div className={`p-3 shrink-0 ${collapsed ? "p-2" : "p-6"}`}>
            {!collapsed && (
              <div className="font-display text-xl font-semibold text-foreground tracking-tight mb-8">Mirevion</div>
            )}
            {collapsed && (
              <button
                onClick={() => setCollapsed(false)}
                className="p-2 text-muted-foreground hover:text-foreground rounded-md hover:bg-muted transition-colors"
                aria-label="Expandir menu"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className="p-4 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    end={item.href === "/"}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${isActive ? "bg-accent text-on-accent" : "text-muted-foreground hover:bg-muted hover:text-foreground"} ${collapsed ? "justify-center" : ""}`}
                  >
                    <Icon className={`w-5 h-5 ${collapsed ? "mx-auto" : ""}`} />
                    {!collapsed && <span>{item.label}</span>}
                  </NavLink>
                );
              })}
            </div>
          </div>
          <div className={`p-3 border-t border-border shrink-0 ${collapsed ? "p-2" : "p-6"}`}>
            <button
              onClick={() => {
                localStorage.removeItem("mirevion_token");
                localStorage.removeItem("mirevion_user");
                window.location.href = "/login";
              }}
              className={`w-full flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-destructive hover:bg-red-50 rounded-md transition-colors ${collapsed ? "justify-center" : ""}`}
            >
              <LogOut className={`w-5 h-5 ${collapsed ? "mx-auto" : ""}`} />
              {!collapsed && <span>Sair</span>}
            </button>
          </div>
        </div>
      </nav>

      {/* Conteúdo principal — deslocado à direita para não ficar embaixo da sidebar fixa */}
      <div className={`flex-1 min-h-0 transition-width duration-300 ease-in-out ${collapsed ? "lg:pl-16" : "lg:pl-64"}`}>
        {/* Botão de recolher/expandir sidebar (desktop) */}
        {!collapsed && (
          <button
            onClick={() => setCollapsed(true)}
            className="fixed top-6 left-[68px] z-40 lg:flex p-1.5 text-muted-foreground hover:text-foreground rounded-sm hover:bg-muted transition-colors"
            aria-label="Recolher menu"
          >
            <X className="w-4 h-4" />
          </button>
        )}
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
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.href}
                  to={item.href}
                  end={item.href === "/"}
                  onClick={() => setSidebarOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${isActive ? "bg-accent text-on-accent" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`
                  }
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </nav>
          <div className="p-4 border-t border-border shrink-0">
            <button
              onClick={() => {
                localStorage.removeItem("mirevion_token");
                localStorage.removeItem("mirevion_user");
                setSidebarOpen(false);
                window.location.href = "/login";
              }}
              className="w-full flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-destructive hover:bg-red-50 rounded-md transition-colors"
            >
              <LogOut className="w-5 h-5" /> Sair
            </button>
          </div>
        </aside>
      )}
    </div>
  );
}
