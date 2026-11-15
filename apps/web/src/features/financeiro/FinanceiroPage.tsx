export default function FinanceiroPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-h1 font-semibold text-foreground tracking-tight">Financeiro</h1>
        <p className="body-sm text-muted-foreground mt-2">
          Controle de receitas, despesas e saldo da sua organização.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card-default rounded-lg border border-border shadow-sm p-6">
          <div>
            <div className="text-sm font-medium text-muted-foreground">Saldo disponível</div>
            <div className="font-display text-xl font-semibold text-foreground">R$ 0,00</div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Última atualização</span>
            <span className="text-xs text-muted-foreground">Hoje, 10h</span>
          </div>
        </div>

        <div className="card-default rounded-lg border border-border shadow-sm p-6">
          <div>
            <div className="text-sm font-medium text-muted-foreground">Receitas este mês</div>
            <div className="font-display text-xl font-semibold text-success">R$ 0,00</div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Entradas</span>
            <span className="text-xs text-muted-foreground">0</span>
          </div>
        </div>

        <div className="card-default rounded-lg border border-border shadow-sm p-6">
          <div>
            <div className="text-sm font-medium text-muted-foreground">Despesas pendentes</div>
            <div className="font-display text-xl font-semibold text-foreground">R$ 0,00</div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Itens</span>
            <span className="text-xs text-muted-foreground">0</span>
          </div>
        </div>
      </div>

      <div className="card-default rounded-lg border border-border shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-h3 font-semibold text-foreground">Transações recentes</h2>
          <button className="bg-accent text-on-accent hover:bg-accent/90 text-sm">Nova transação</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-3 font-medium text-muted-foreground">Data</th>
                <th className="pb-3 font-medium text-muted-foreground">Descrição</th>
                <th className="pb-3 font-medium text-muted-foreground text-right">Valor</th>
                <th className="pb-3 font-medium text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 text-foreground">—</td>
                <td className="py-3 text-muted-foreground">Nenhuma transação registrada</td>
                <td className="py-3 text-right text-muted-foreground">—</td>
                <td className="py-3 text-muted-foreground">—</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Comece adicionando suas primeiras receitas ou despesas para acompanhar o fluxo de caixa.
        </p>
      </div>
    </div>
  );
}
