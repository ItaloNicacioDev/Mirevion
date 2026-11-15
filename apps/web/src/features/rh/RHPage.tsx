export default function RHPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-h1 font-semibold text-foreground tracking-tight">Recursos Humanos</h1>
        <p className="body-sm text-muted-foreground mt-2">
          Cadastro de funcionários, folha de pagamento e dados da equipe.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card-default rounded-lg border border-border shadow-sm p-6">
          <div className="body-sm text-muted-foreground mb-2">Funcionários ativos</div>
          <div className="font-display text-xl font-semibold text-foreground">0</div>
          <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
            <span>Admissões este mês</span>
            <span>0</span>
          </div>
        </div>

        <div className="card-default rounded-lg border border-border shadow-sm p-6">
          <div className="body-sm text-muted-foreground mb-2">Folha este mês</div>
          <div className="font-display text-xl font-semibold text-foreground">R$ 0,00</div>
          <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
            <span>Pagamentos pendentes</span>
            <span>0</span>
          </div>
        </div>

        <div className="card-default rounded-lg border border-border shadow-sm p-6">
          <div className="body-sm text-muted-foreground mb-2">Férias vencidas</div>
          <div className="font-display text-xl font-semibold text-foreground">0</div>
          <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
            <span>Colaboradores</span>
            <span>0</span>
          </div>
        </div>
      </div>

      <div className="card-default rounded-lg border border-border shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-h3 font-semibold text-foreground">Funcionários</h2>
          <button className="inline-flex items-center gap-2 px-3 py-2 bg-accent text-on-accent text-sm font-medium rounded-md hover:bg-accent/90 transition-colors">
            Novo funcionário
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-3 font-medium text-muted-foreground">Nome</th>
                <th className="pb-3 font-medium text-muted-foreground">Cargo</th>
                <th className="pb-3 font-medium text-muted-foreground">Setor</th>
                <th className="pb-3 font-medium text-muted-foreground text-right">Salário</th>
                <th className="pb-3 font-medium text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 text-foreground">—</td>
                <td className="py-3 text-muted-foreground">Nenhum funcionário cadastrado</td>
                <td className="py-3 text-muted-foreground">—</td>
                <td className="py-3 text-right text-muted-foreground">—</td>
                <td className="py-3 text-muted-foreground">—</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Cadastre seus primeiros funcionários para começar a controlar a folha de pagamento.
        </p>
      </div>
    </div>
  );
}
