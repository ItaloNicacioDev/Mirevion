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
    <div className="min-h-screen bg-background">
      <div className="flex flex-col lg:flex-row h-full">
        {/* Marca / contexto esquerdo */}
        <div className="hidden lg:flex lg:w-1/3 bg-primary flex-col justify-center items-start p-12 text-on-primary">
          <div className="font-display text-h1 font-semibold tracking-tight mb-6">
            Mirevion
          </div>
          <p className="body-md opacity-90 max-w-xs leading-relaxed">
            Plataforma de gestão para pequenas e médias empresas. Controle
            financeiro, folha de pagamento e recursos humanos em um só lugar.
          </p>
        </div>

        {/* Formulário de login */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-md card-default rounded-lg border border-border shadow-sm p-8">
            <div className="font-display text-h2 font-semibold text-foreground mb-2">
              Bem-vindo de volta
            </div>
            <p className="body-sm text-muted-foreground mb-8">
              Acesse sua organização com seu e-mail e senha.
            </p>

            {error && (
              <div className="mb-6 p-3 rounded-md bg-red-50 text-red-700 text-sm border border-red-100">
                {error}
              </div>
            )}

            {/* Seletor de admin (equipes de RH podem ter várias pessoas) */}
            <div className="mb-6">
              <label className="block text-label text-foreground mb-2 font-medium">
                Acessando como
              </label>
              <div className="flex flex-wrap gap-2">
                {ADMIN_ACCOUNTS.map((admin) => {
                  const isSelected = selectedAdmin?.email === admin.email || email === admin.email;
                  return (
                    <button
                      key={admin.id}
                      onClick={() => handleSelectAdmin(admin.email)}
                      className={`px-3 py-2 text-sm rounded-md border transition-colors ${
                        isSelected
                          ? "bg-accent text-on-accent border-accent"
                          : "bg-muted text-muted-foreground hover:bg-muted/80 border-border"
                      }`}
                    >
                      {admin.first_name} {admin.last_name}
                    </button>
                  );
                })}
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Selecione o administrador que está acessando. Equipes de RH podem
                ter várias pessoas com logins independentes.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
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
                  className="w-full px-3 py-2.5 border border-border rounded-sm bg-card text-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-colors"
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
                  className="w-full px-3 py-2.5 border border-border rounded-sm bg-card text-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-colors pr-10"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                  className="absolute right-2 top-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" aria-hidden="true" /> : <Eye className="w-4 h-4" aria-hidden="true" />}
                </button>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-accent text-on-accent rounded-md font-medium hover:bg-accent/90 transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
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

            <div className="mt-6 text-xs text-muted-foreground text-center">
              Usuários de teste: admin@mirevion.com / rh@mirevion.com / financeiro@mirevion.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
