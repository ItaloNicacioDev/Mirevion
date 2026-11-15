export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-h1 font-semibold text-foreground tracking-tight">
          Visão geral
        </h1>
        <p className="body-sm text-muted-foreground mt-2">
          Acompanhe os indicadores da sua organização. Dados atualizados em tempo real.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card-default rounded-lg border border-border shadow-sm p-6">
          <div className="body-sm text-muted-foreground mb-2">Saldo disponível</div>
          <div className="font-display text-xl font-semibold text-foreground">R$ 0,00</div>
        </div>
        <div className="card-default rounded-lg border border-border shadow-sm p-6">
          <div className="body-sm text-muted-foreground mb-2">Receitas este mês</div>
          <div className="font-display text-xl font-semibold text-success">R$ 0,00</div>
        </div>
        <div className="card-default rounded-lg border border-border shadow-sm p-6">
          <div className="body-sm text-muted-foreground mb-2">Despesas pendentes</div>
          <div className="font-display text-xl font-semibold text-foreground">R$ 0,00</div>
        </div>
        <div className="card-default rounded-lg border border-border shadow-sm p-6">
          <div className="body-sm text-muted-foreground mb-2">Funcionários ativos</div>
          <div className="font-display text-xl font-semibold text-foreground">0</div>
        </div>
      </div>

      <div className="card-default rounded-lg border border-border shadow-sm p-6">
        <h2 className="font-display text-h3 font-semibold text-foreground mb-4">
          Atividade recente
        </h2>
        <div className="body-sm text-muted-foreground">
          Nenhuma atividade registrada ainda. Comece adicionando suas primeiras
          transações ou cadastrando funcionários.
        </div>
      </div>
    </div>
  );
}
