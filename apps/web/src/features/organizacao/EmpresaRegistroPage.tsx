import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ToastProvider";
import { Building2, ShieldCheck, Info } from "lucide-react";

export default function EmpresaRegistroPage() {
  const { toast } = useToast();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nomeFantasia: "",
    razaoSocial: "",
    cnpj: "",
    email: "",
    telefone: "",
    endereco: "",
    cidade: "",
    estado: "",
    cep: "",
    segmento: "",
  });

  const [demoMode, setDemoMode] = useState(false);
  const [registroIniciadoEm, setRegistroIniciadoEm] = useState<string | null>(null);
  const [tempoRestante, setTempoRestante] = useState(0);

  // Calcular tempo restante de 7 dias em segundos
  useEffect(() => {
    if (!registroIniciadoEm) return;

    const interval = setInterval(() => {
      const inicio = new Date(registroIniciadoEm).getTime();
      const agora = new Date().getTime();
      const seteDias = 7 * 24 * 60 * 60 * 1000;
      const restante = seteDias - (agora - inicio);

      if (restante <= 0) {
        setTempoRestante(0);
        setFormValido(true);
        clearInterval(interval);
      } else {
        setTempoRestante(Math.ceil(restante / 1000));
        setFormValido(false);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [registroIniciadoEm]);

  const formatarTempo = (segundos: number) => {
    const dias = Math.floor(segundos / 86400);
    const horas = Math.floor((segundos % 86400) / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segs = segundos % 60;

    if (dias > 0) return `${dias}d ${horas}h ${minutos}m`;
    if (horas > 0) return `${horas}h ${minutos}m ${segs}s`;
    if (minutos > 0) return `${minutos}m ${segs}s`;
    return `${segs}s`;
  };

  const validarCNPJ = (cnpj: string): boolean => {
    const numeros = cnpj.replace(/\D/g, "");
    if (numeros.length !== 14) return false;
    if (/^(\d)\1{13}$/.test(numeros)) return false;

    let tamanho = numeros.length - 2;
    let numerosBase = numeros.substring(0, tamanho);
    let digitos = numeros.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
      soma += parseInt(numerosBase.charAt(tamanho - i)) * pos--;
      if (pos < 2) pos = 9;
    }

    let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado !== parseInt(digitos.charAt(0))) return false;

    tamanho = tamanho + 1;
    numerosBase = numeros.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
      soma += parseInt(numerosBase.charAt(tamanho - i)) * pos--;
      if (pos < 2) pos = 9;
    }

    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    return resultado === parseInt(digitos.charAt(1));
  };

  const validarEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validarForm = () => {
    const {
      nomeFantasia, razaoSocial, cnpj, email, telefone, endereco, cidade, estado, cep, segmento
    } = formData;

    if (!nomeFantasia || !razaoSocial || !cnpj || !email || !telefone || !endereco || !cidade || !estado || !cep || !segmento) {
      return false;
    }

    if (!validarCNPJ(cnpj)) return false;
    if (!validarEmail(email)) return false;
    if (tempoRestante > 0) return false;

    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validarForm()) {
      toast("Preencha todos os campos corretamente e aguarde o prazo de registro.", "Erro", "error", 5000);
      return;
    }
    toast("Empresa registrada com sucesso!", "Sua empresa foi cadastrada no sistema.", "success", 5000);
    setTimeout(() => navigate("/"), 2000);
  };

  const handleDemoMode = () => {
    setDemoMode(true);
    setRegistroIniciadoEm(new Date().toISOString());
    toast("Modo demo ativado. Você poderá editar os dados após 7 dias.", "Modo Demo", "info", 5000);
  };

  const handleCancelarDemo = () => {
    setDemoMode(false);
    setRegistroIniciadoEm(null);
    setFormValido(false);
    toast("Modo demo desativado.", "Informação", "info", 3000);
  };

  const podeEditar = !demoMode || tempoRestante === 0;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="sticky top-0 z-20 bg-card border-b border-border px-6 py-4 shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-primary" />
            <span className="font-display text-lg font-semibold text-foreground">Registro Empresarial</span>
          </div>
          <button
            onClick={() => navigate("/")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Voltar
          </button>
        </div>
      </nav>

      <div className="flex-1 p-6 lg:p-12">
        <div className="max-w-3xl mx-auto">
          {/* Cabeçalho */}
          <div className="mb-8">
            <h1 className="font-display text-h1 font-semibold text-foreground tracking-tight mb-2">
              Registro da Organização
            </h1>
            <p className="body-sm text-muted-foreground">
              Preencha os dados da sua empresa para completar o cadastro na plataforma Mirevion.
            </p>
          </div>

          {/* Aviso de modo demo */}
          {demoMode && tempoRestante === 0 && (
            <div className="mb-6 p-4 rounded-lg bg-warning-light border border-warning/20 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-warning mt-0.5" />
              <div>
                <h3 className="text-sm font-medium text-warning-dark">Modo Demo Ativo</h3>
                <p className="text-xs text-muted-foreground">
                  Você está em modo de demonstração. Os dados só poderão ser alterados após {tempoRestante > 0 ? tempoRestante + " segundos" : "o prazo de 7 dias"}.
                </p>
              </div>
            </div>
          )}

          {demoMode && tempoRestante > 0 && (
            <div className="mb-6 p-4 rounded-lg bg-muted border border-border flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-foreground">Tempo restante para editar</h3>
                <p className="text-xs text-muted-foreground">Aguarde o prazo obrigatório de 7 dias</p>
              </div>
              <div className="text-xl font-mono font-bold text-primary">
                {formatarTempo(tempoRestante)}
              </div>
            </div>
          )}

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-label text-foreground mb-1 font-medium">
                  Nome Fantasia
                </label>
                <input
                  type="text"
                  value={formData.nomeFantasia}
                  onChange={(e) => setFormData({ ...formData, nomeFantasia: e.target.value })}
                  disabled={!podeEditar}
                  placeholder="Ex: Comércio Ltda"
                  className="w-full px-3.5 py-3 border border-border rounded-md bg-card text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all duration-200"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-label text-foreground mb-1 font-medium">
                  Razão Social
                </label>
                <input
                  type="text"
                  value={formData.razaoSocial}
                  onChange={(e) => setFormData({ ...formData, razaoSocial: e.target.value })}
                  disabled={!podeEditar}
                  placeholder="Ex: Comércio de Produtos Alimentícios Ltda"
                  className="w-full px-3.5 py-3 border border-border rounded-md bg-card text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all duration-200"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-label text-foreground mb-1 font-medium">
                  CNPJ
                </label>
                <input
                  type="text"
                  value={formData.cnpj}
                  onChange={(e) => setFormData({ ...formData, cnpj: e.target.value.replace(/\D/g, "").replace(/(\d{2})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{4})(\d)/, "$1-$2").substring(0, 18) })}
                  disabled={!podeEditar}
                  placeholder="00.000.000/0000-00"
                  className="w-full px-3.5 py-3 border border-border rounded-md bg-card text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all duration-200"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-label text-foreground mb-1 font-medium">
                  Segmento
                </label>
                <select
                  value={formData.segmento}
                  onChange={(e) => setFormData({ ...formData, segmento: e.target.value })}
                  disabled={!podeEditar}
                  className="w-full px-3.5 py-3 border border-border rounded-md bg-card text-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all duration-200"
                >
                  <option value="">Selecione o segmento</option>
                  <option value="comercio">Comércio</option>
                  <option value="servicos">Serviços</option>
                  <option value="industria">Indústria</option>
                  <option value="agronomio">Agronegócio</option>
                  <option value="outros">Outros</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-label text-foreground mb-1 font-medium">
                  E-mail
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  disabled={!podeEditar}
                  placeholder="empresa@exemplo.com"
                  className="w-full px-3.5 py-3 border border-border rounded-md bg-card text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all duration-200"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-label text-foreground mb-1 font-medium">
                  Telefone
                </label>
                <input
                  type="tel"
                  value={formData.telefone}
                  onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                  disabled={!podeEditar}
                  placeholder="(11) 99999-9999"
                  className="w-full px-3.5 py-3 border border-border rounded-md bg-card text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all duration-200"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-label text-foreground mb-1 font-medium">
                  Endereço
                </label>
                <input
                  type="text"
                  value={formData.endereco}
                  onChange={(e) => setFormData({ ...formData, endereco: e.target.value })}
                  disabled={!podeEditar}
                  placeholder="Rua das Flores, 123"
                  className="w-full px-3.5 py-3 border border-border rounded-md bg-card text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all duration-200"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-label text-foreground mb-1 font-medium">
                  CEP
                </label>
                <input
                  type="text"
                  value={formData.cep}
                  onChange={(e) => setFormData({ ...formData, cep: e.target.value.replace(/\D/g, "").replace(/(\d{5})(\d)/, "$1-$2").substring(0, 9) })}
                  disabled={!podeEditar}
                  placeholder="00000-000"
                  className="w-full px-3.5 py-3 border border-border rounded-md bg-card text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all duration-200"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-label text-foreground mb-1 font-medium">
                  Cidade
                </label>
                <input
                  type="text"
                  value={formData.cidade}
                  onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                  disabled={!podeEditar}
                  placeholder="São Paulo"
                  className="w-full px-3.5 py-3 border border-border rounded-md bg-card text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all duration-200"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-label text-foreground mb-1 font-medium">
                  Estado (UF)
                </label>
                <input
                  type="text"
                  value={formData.estado}
                  onChange={(e) => setFormData({ ...formData, estado: e.target.value.toUpperCase().substring(0, 2) })}
                  disabled={!podeEditar}
                  placeholder="SP"
                  maxLength="2"
                  className="w-full px-3.5 py-3 border border-border rounded-md bg-card text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all duration-200"
                />
              </div>
            </div>

            {/* Botões */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                type="submit"
                disabled={!validarForm() || !podeEditar}
                className="w-full sm:w-auto px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
              >
                {tempoRestante > 0 ? "Aguardando prazo..." : "Cadastrar Empresa"}
              </button>
              {demoMode && tempoRestante > 0 && (
                <button
                  type="button"
                  onClick={handleCancelarDemo}
                  className="w-full sm:w-auto px-6 py-3 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md font-medium transition-colors"
                >
                  Cancelar modo demo
                </button>
              )}
              {!demoMode && (
                <button
                  type="button"
                  onClick={handleDemoMode}
                  className="w-full sm:w-auto px-6 py-3 border border-border text-muted-foreground hover:bg-muted rounded-md font-medium transition-colors"
                >
                  Usar modo demo (7 dias)
                </button>
              )}
            </div>
          </form>

          {/* Informações adicionais */}
          <div className="mt-8 p-4 rounded-lg bg-muted border border-border flex items-start gap-3">
            <Info className="w-5 h-5 text-muted-foreground mt-0.5" />
            <div>
              <h3 className="text-sm font-medium text-foreground">Sobre o registro</h3>
              <p className="text-xs text-muted-foreground">
                O registro empresarial possui um prazo obrigatório de 7 dias para validação dos dados. Durante esse período, as informações ficam travadas para evitar alterações indevidas. Após o prazo, você poderá editar qualquer campo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
