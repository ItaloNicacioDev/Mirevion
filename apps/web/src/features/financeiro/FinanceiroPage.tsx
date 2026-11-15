import PageHeader from "@/components/PageHeader";
import { Banknote, Plus, TrendingUp, Wallet } from "lucide-react";

export default function FinanceiroPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Financeiro"
        description="Controle de receitas, despesas e saldo da sua organização."
        action={
          <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors">
            Nova transação <Plus className="w-4 h-4" />
          </button>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card-default rounded-xl border border-border shadow-sm p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center">
                <Banknote className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="body-sm text-muted-foreground mb-1">Saldo disponível</div>
                <div className="body-sm text-muted-foreground">Última atualização</div>
              </div>
            </div>
            <div className="font-display text-xl font-semibold text-foreground">R$ 0,00</div>
          </div>
        </div>

        <div className="card-default rounded-xl border border-border shadow-sm p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-success-light flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-success" />
              </div>
              <div>
                <div className="body-sm text-muted-foreground mb-1">Receitas este mês</div>
                <div className="body-sm text-muted-foreground">Entradas no período</div>
              </div>
            </div>
            <div className="font-display text-xl font-semibold text-success">R$ 0,00</div>
          </div>
        </div>

        <div className="card-default rounded-xl border border-border shadow-sm p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-warning-light flex items-center justify-center">
                <Wallet className="w-5 h-5 text-warning" />
              </div>
              <div>
                <div className="body-sm text-muted-foreground mb-1">Despesas pendentes</div>
                <div className="body-sm text-muted-foreground">Itens a pagar</div>
              </div>
            </div>
            <div className="font-display text-xl font-semibold text-warning">R$ 0,00</div>
          </div>
        </div>
      </div>

      <div className="card-default rounded-xl border border-border shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-h3 font-semibold text-foreground">Transações recentes</h2>
          <button className="inline-flex items-center gap-2 px-3 py-2 bg-accent text-accent-foreground text-sm font-medium rounded-md hover:bg-accent/90 transition-colors">
            Nova transação <Plus className="w-3 h-3" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-3 font-medium text-muted-foreground">Data</th>
                <th className="pb-3 font-medium text-muted-foreground">Descrição</th>
                <th className="pb-3 font-medium text-muted-foreground text-right">Valor</th>
                <th className="pb-3 font-medium text-muted-foreground">Tipo</th>
                <th className="pb-3 font-medium text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 text-foreground">—</td>
                <td className="py-3 text-muted-foreground">Nenhuma transação registrada</td>
                <td className="py-3 text-right text-muted-foreground">—</td>
                <td className="py-3 text-muted-foreground">—</td>
                <td className="py-3">
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground">
                    Sem dados
                  </span>
                </td>
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
