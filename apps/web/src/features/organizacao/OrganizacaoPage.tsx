import PageHeader from "@/components/PageHeader";
import { Building2, Users } from "lucide-react";

export default function OrganizacaoPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Organização"
        description="Dados da sua empresa, CNPJ, usuários e configurações da conta."
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card-default rounded-xl border border-border shadow-sm p-6 hover:shadow-md transition-shadow duration-200 group">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <Building2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="body-sm text-muted-foreground mb-1">Nome da organização</div>
                <div className="font-display text-lg font-semibold text-foreground">—</div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-default rounded-xl border border-border shadow-sm p-6 hover:shadow-md transition-shadow duration-200 group">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors duration-300">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="body-sm text-muted-foreground mb-1">Usuários</div>
                <div className="font-display text-lg font-semibold text-foreground">0</div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-default rounded-xl border border-border shadow-sm p-6 hover:shadow-md transition-shadow duration-200 group">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors duration-300">
                <Building2 className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <div className="body-sm text-muted-foreground mb-1">CNPJ</div>
                <div className="font-display text-lg font-semibold text-foreground">—</div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-default rounded-xl border border-border shadow-sm p-6 hover:shadow-md transition-shadow duration-200 group">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors duration-300">
                <Building2 className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <div className="body-sm text-muted-foreground mb-1">Plano</div>
                <div className="font-display text-lg font-semibold text-foreground">—</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card-default rounded-xl border border-border shadow-sm p-6">
        <h2 className="font-display text-h3 font-semibold text-foreground mb-6">Dados da empresa</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-label text-foreground mb-1 font-medium">Nome fantasia</label>
            <input
              type="text"
              disabled
              className="w-full px-3.5 py-3 border border-border rounded-md bg-card text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all duration-200"
              placeholder="—"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-label text-foreground mb-1 font-medium">CNPJ</label>
            <input
              type="text"
              disabled
              className="w-full px-3.5 py-3 border border-border rounded-md bg-card text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all duration-200"
              placeholder="00.000.000/0000-00"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-label text-foreground mb-1 font-medium">Razão social</label>
            <input
              type="text"
              disabled
              className="w-full px-3.5 py-3 border border-border rounded-md bg-card text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all duration-200"
              placeholder="—"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-label text-foreground mb-1 font-medium">E-mail</label>
            <input
              type="email"
              disabled
              className="w-full px-3.5 py-3 border border-border rounded-md bg-card text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all duration-200"
              placeholder="—"
            />
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Os dados da organização ainda não foram preenchidos. Entre em contato com o suporte para completar o cadastro.
        </p>
      </div>
    </div>
  );
}
