import PageHeader from "@/components/PageHeader";
import AnimatedLineChart from "@/components/AnimatedLineChart";
import AnimatedBarChart from "@/components/AnimatedBarChart";
import { ArrowRight, Banknote, Briefcase, Calendar, Plus, TrendingUp, User } from "lucide.react";

const cards = [
  { title: "Saldo disponível", value: "R$ 0,00", icon: Banknote, color: "text-primary", subtitle: "Disponível para uso imediato" },
  { title: "Receitas este mês", value: "R$ 0,00", icon: TrendingUp, color: "text-success", subtitle: "Entradas registradas no período" },
  { title: "Despesas pendentes", value: "R$ 0,00", icon: Calendar, color: "text-warning", subtitle: "Aguardando confirmação de pagamento" },
  { title: "Funcionários ativos", value: "0", icon: User, color: "text-foreground", subtitle: "Colaboradores com vínculo ativo" },
];

const recentItems = [
  { title: "Adicionar primeira transação", description: "Comece registrando uma receita ou despesa", action: "Nova transação", icon: Plus },
  { title: "Cadastrar primeiro funcionário", description: "Inclua colaboradores no controle de folha", action: "Novo funcionário", icon: Briefcase },
  { title: "Definir orçamento mensal", description: "Estabeleça limites para categorias de despesa", action: "Definir orçamento", icon: Briefcase },
];

export default function DashboardPage() {
  const dadosGraficoLinha = [
    { label: "Jan", value: 12000 },
    { label: "Fev", value: 19000 },
    { label: "Mar", value: 15000 },
    { label: "Abr", value: 22000 },
    { label: "Mai", value: 18000 },
    { label: "Jun", value: 25000 },
  ];

  const dadosGraficoBarras = [
    { label: "Receitas", value: 45000, color: "#15803d" },
    { label: "Despesas", value: 32000, color: "#d97706" },
    { label: "Saldo", value: 13000, color: "#1f3a5f" },
  ];

  return (
    <div className="space-y-8 animate-fade-up">
      <PageHeader
        title="Visão geral"
        description="Acompanhe os indicadores da sua organização. Dados atualizados em tempo real."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div key={card.title} className="card-default rounded-xl border border-border shadow-sm p-6 animate-slide-in-left">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg bg-${card.color.split("/")[0] === "text-success" ? "success" : card.color.split("/")[0] === "text-warning" ? "warning" : card.color.split("/")[0] === "text-primary" ? "primary" : "foreground"}-light flex items-center justify-center`}>
                  <card.icon className={`w-5 h-5 ${card.color}`} />
                </div>
                <div>
                  <div className="body-sm text-muted-foreground mb-1">{card.title}</div>
                  <div className="body-sm text-muted-foreground">{card.subtitle}</div>
                </div>
              </div>
              <div className="font-display text-xl font-semibold text-foreground animate-count-up">{card.value}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="card-default rounded-xl border border-border shadow-sm p-6 animate-slide-in-left">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-h3 font-semibold text-foreground">Faturamento mensal</h2>
            <button className="text-sm text-primary hover:text-primary/80 flex items-center gap-1">
              Ver tudo <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <AnimatedLineChart data={dadosGraficoLinha} />
        </div>

        <div className="card-default rounded-xl border border-border shadow-sm p-6 animate-slide-in-left lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-h3 font-semibold text-foreground">Distribuição por categoria</h2>
          </div>
          <AnimatedBarChart data={dadosGraficoBarras} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="card-default rounded-xl border border-border shadow-sm p-6 animate-slide-in-left lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-h3 font-semibold text-foreground">Atividade recente</h2>
            <button className="text-sm text-primary hover:text-primary/80 flex items-center gap-1">
              Ver tudo <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-4">
            {recentItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3 animate-fade-up animation-delay-100">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground text-sm">
                  <item.icon className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-foreground font-medium">{item.title}</div>
                  <div className="text-xs text-muted-foreground">{item.description}</div>
                </div>
                <button className="text-xs text-primary hover:text-primary/80">{item.action}</button>
              </div>
            ))}
            <div className="pt-4 text-center text-sm text-muted-foreground">
              Nenhuma atividade registrada ainda.
            </div>
          </div>
        </div>

        <div className="card-default rounded-xl border border-border shadow-sm p-6 animate-slide-in-left lg:col-span-1">
          <h2 className="font-display text-h3 font-semibold text-foreground mb-6">Próximos passos</h2>
          <div className="grid grid-cols-1 gap-4">
            {[
              { title: "Conectar banco", description: "Importe transações automaticamente", icon: Banknote },
              { title: "Configurar categorias", description: "Organize receitas e despesas", icon: Briefcase },
              { title: "Convidar equipe", description: "Adicione colaboradores à organização", icon: User },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted border border-transparent hover:bg-muted/50 hover:border-border transition-colors animate-fade-up animation-delay-200">
                <div className="w-10 h-10 rounded-lg bg-card flex items-center justify-center shadow-sm">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">{item.title}</div>
                  <div className="text-xs text-muted-foreground">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
