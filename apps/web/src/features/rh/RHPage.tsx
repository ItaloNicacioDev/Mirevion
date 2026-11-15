import PageHeader from "@/components/PageHeader";
import { Banknote, Calendar, Plus, User } from "lucide-react";

export default function RHPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Recursos Humanos"
        description="Cadastro de funcionários, folha de pagamento e dados da equipe."
        action={
          <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors">
            Novo funcionário <Plus className="w-4 h-4" />
          </button>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card-default rounded-xl border border-border shadow-sm p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center">
                <User className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="body-sm text-muted-foreground mb-1">Funcionários ativos</div>
                <div className="body-sm text-muted-foreground">Com vínculo ativo</div>
              </div>
            </div>
            <div className="font-display text-xl font-semibold text-foreground">0</div>
          </div>
        </div>

        <div className="card-default rounded-xl border border-border shadow-sm p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-success-light flex items-center justify-center">
                <Banknote className="w-5 h-5 text-success" />
              </div>
              <div>
                <div className="body-sm text-muted-foreground mb-1">Folha este mês</div>
                <div className="body-sm text-muted-foreground">Pagamentos processados</div>
              </div>
            </div>
            <div className="font-display text-xl font-semibold text-success">R$ 0,00</div>
          </div>
        </div>

        <div className="card-default rounded-xl border border-border shadow-sm p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-warning-light flex items-center justify-center">
                <Calendar className="w-5 h-5 text-warning" />
              </div>
              <div>
                <div className="body-sm text-muted-foreground mb-1">Férias vencidas</div>
                <div className="body-sm text-muted-foreground">Colaboradores</div>
              </div>
            </div>
            <div className="font-display text-xl font-semibold text-warning">0</div>
          </div>
        </div>
      </div>

      <div className="card-default rounded-xl border border-border shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-h3 font-semibold text-foreground">Funcionários</h2>
          <button className="inline-flex items-center gap-2 px-3 py-2 bg-accent text-accent-foreground text-sm font-medium rounded-md hover:bg-accent/90 transition-colors">
            Novo funcionário <Plus className="w-3 h-3" />
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
          Cadastre seus primeiros funcionários para começar a controlar a folha de pagamento.
        </p>
      </div>
    </div>
  );
}
