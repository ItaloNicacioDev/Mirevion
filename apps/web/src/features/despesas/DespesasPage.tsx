import PageHeader from "@/components/PageHeader";
import { useToast } from "@/components/ToastProvider";
import { AlertTriangle, Plus, TrendingUp, Wallet } from "lucide-react";

export default function DespesasPage() {
  const { toast } = useToast();

  const handleNovaDespesa = () => {
    toast("Despesa adicionada", "Nova despesa registrada com sucesso.", "success", 4000);
  };

  return (
    <div className="space-y-8">
      <PageHeader
        title="Despesas"
        description="Registro, classificação e aprovação de despesas da organização."
        action={
          <button
            onClick={handleNovaDespesa}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors shadow-sm"
          >
            Nova despesa <Plus className="w-4 h-4" />
          </button>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card-default rounded-xl border border-border shadow-sm p-6 hover:shadow-md transition-shadow duration-200 group">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <Wallet className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="body-sm text-muted-foreground mb-1">Despesas este mês</div>
                <div className="text-xs text-muted-foreground">Itens lançados</div>
              </div>
            </div>
            <div className="font-display text-xl font-semibold text-foreground">R$ 0,00</div>
          </div>
        </div>

        <div className="card-default rounded-xl border border-border shadow-sm p-6 hover:shadow-md transition-shadow duration-200 group">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-warning-light flex items-center justify-center group-hover:bg-warning group-hover:text-warning-foreground transition-colors duration-300">
                <AlertTriangle className="w-5 h-5 text-warning" />
              </div>
              <div>
                <div className="body-sm text-muted-foreground mb-1">Pendentes de aprovação</div>
                <div className="text-xs text-muted-foreground">Aguardando liberação</div>
              </div>
            </div>
            <div className="font-display text-xl font-semibold text-warning">R$ 0,00</div>
          </div>
        </div>

        <div className="card-default rounded-xl border border-border shadow-sm p-6 hover:shadow-md transition-shadow duration-200 group">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-success-light flex items-center justify-center group-hover:bg-success group-hover:text-success-foreground transition-colors duration-300">
                <TrendingUp className="w-5 h-5 text-success" />
              </div>
              <div>
                <div className="body-sm text-muted-foreground mb-1">Pagas este mês</div>
                <div className="text-xs text-muted-foreground">Baixadas</div>
              </div>
            </div>
            <div className="font-display text-xl font-semibold text-success">R$ 0,00</div>
          </div>
        </div>
      </div>

      <div className="card-default rounded-xl border border-border shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-h3 font-semibold text-foreground">Despesas recentes</h2>
          <button
            onClick={handleNovaDespesa}
            className="inline-flex items-center gap-2 px-3 py-2 bg-accent text-accent-foreground text-sm font-medium rounded-md hover:bg-accent/90 transition-colors"
          >
            Nova despesa <Plus className="w-3 h-3" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-3 font-medium text-muted-foreground">Data</th>
                <th className="pb-3 font-medium text-muted-foreground">Descrição</th>
                <th className="pb-3 font-medium text-muted-foreground">Categoria</th>
                <th className="pb-3 font-medium text-muted-foreground text-right">Valor</th>
                <th className="pb-3 font-medium text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 text-foreground">—</td>
                <td className="py-3 text-muted-foreground">Nenhuma despesa registrada</td>
                <td className="py-3 text-muted-foreground">—</td>
                <td className="py-3 text-right text-muted-foreground">—</td>
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
          Lançe suas primeiras despesas para começar a acompanhar os gastos da organização.
        </p>
      </div>
    </div>
  );
}
