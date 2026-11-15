import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "@/services/auth";
import { Eye, EyeOff } from "lucide-react";
import { ADMIN_ACCOUNTS } from "@/lib/auth-mock";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedAdmin, setSelectedAdmin] = useState<{ email: string; label: string } | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("mirevion_token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  const handleSelectAdmin = (adminEmail: string) => {
    setEmail(adminEmail);
    setSelectedAdmin({ email: adminEmail, label: adminEmail.split("@")[0] });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const { data } = await authService.login(email, password);
      localStorage.setItem("mirevion_token", data.access);
      localStorage.setItem("mirevion_refresh", data.refresh);
      localStorage.setItem("mirevion_user", JSON.stringify(data.user));
      navigate("/");
    } catch (err: any) {
      setError(err.message || "Erro ao fazer login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Marca esquerda — visível apenas em telas largas */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary flex-col justify-between items-start p-10 lg:p-16 text-primary-foreground">
        <div className="flex flex-col gap-8">
          <div>
            <div className="font-display text-h1 font-semibold tracking-tight mb-3">Mirevion</div>
            <p className="body-sm opacity-80 leading-relaxed max-w-sm">
              Plataforma de gestão para pequenas e médias empresas.
              Controle financeiro, folha de pagamento e recursos humanos em um só lugar.
            </p>
          </div>
          <div className="flex items-center gap-3 mt-12">
            <div className="w-2 h-2 rounded-full bg-primary-foreground"></div>
            <span className="body-sm opacity-70">Sessão segura · criptografada</span>
          </div>
        </div>
        <div className="mt-20">
          <div className="flex items-center gap-2 text-sm opacity-60">
            <span className="font-label">© 2026 Mirevion</span>
            <span className="opacity-50">·</span>
            <span className="font-label">Plataforma Empresarial</span>
          </div>
        </div>
      </div>

      {/* Formulário de login — centralizado */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-0">
        <div className="w-full max-w-md card-default rounded-xl border border-border shadow-sm p-8">
          <div className="flex flex-col gap-3 mb-8">
            <div className="font-display text-h2 font-semibold text-foreground tracking-tight">Bem-vindo de volta</div>
            <p className="body-sm text-muted-foreground leading-relaxed">
              Acesse sua organização com seu e-mail e senha.
            </p>
          </div>

          {error && (
            <div className="mb-6 p-3.5 rounded-md bg-red-50 text-red-700 text-sm border border-red-100">
              {error}
            </div>
          )}

          {/* Seletor de admin */}
          <div className="mb-6">
            <label className="block text-label text-foreground mb-2.5 font-medium">
              Acessando como
            </label>
            <div className="flex flex-wrap gap-2">
              {ADMIN_ACCOUNTS.map((admin) => {
                const isSelected = selectedAdmin?.email === admin.email || email === admin.email;
                return (
                  <button
                    key={admin.id}
                    onClick={() => handleSelectAdmin(admin.email)}
                    className={`flex items-center gap-2 px-3 py-2 text-sm rounded-md border transition-all duration-200 ${isSelected ? "bg-accent text-accent-foreground border-accent shadow-sm shadow-accent/20" : "bg-card text-muted-foreground border-border hover:bg-muted/50 hover:border-border/50"}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? "bg-accent-foreground" : "bg-transparent border border-current"}`} />
                    {admin.first_name} {admin.last_name}
                  </button>
                );
              })}
            </div>
            <p className="text-xs text-muted-foreground mt-2.5 leading-relaxed">
              Selecione o administrador que está acessando. Equipes de RH podem ter várias pessoas com logins independentes.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-label text-foreground mb-2 font-medium" htmlFor="login-email">
                E-mail
              </label>
              <input
                id="login-email"
                type="email"
                autoComplete="email"
                name="email"
                spellCheck={false}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setSelectedAdmin(null);
                }}
                className="w-full px-3.5 py-3 border border-border rounded-md bg-card text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all duration-200"
                placeholder="seu@empresa.com"
              />
            </div>
            <div className="relative">
              <label className="block text-label text-foreground mb-2 font-medium" htmlFor="login-password">
                Senha
              </label>
              <input
                id="login-password"
                type="password"
                autoComplete="current-password"
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3.5 py-3 border border-border rounded-md bg-card text-foreground placeholder:text-muted-foreground pr-10 focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all duration-200"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4" aria-hidden="true" /> : <Eye className="w-4 h-4" aria-hidden="true" />}
              </button>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-accent text-accent-foreground rounded-md font-medium hover:bg-accent/90 focus:ring-2 focus:ring-ring focus:ring-offset-1 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Entrando...
                </>
              ) : (
                "Entrar"
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground text-center leading-relaxed">
              Usuários de teste:<br />
              <span className="block font-medium text-foreground">admin@mirevion.com</span> /
              <span className="block font-medium text-foreground">rh@mirevion.com</span> /
              <span className="block font-medium text-foreground">financeiro@mirevion.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
