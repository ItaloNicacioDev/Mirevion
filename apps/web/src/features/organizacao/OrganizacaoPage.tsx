import PageHeader from "@/components/PageHeader";

export default function OrganizacaoPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Organização"
        description="Dados da sua empresa, CNPJ, usuários e configurações da conta."
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card-default rounded-lg border border-border shadow-sm p-6">
          <div className="body-sm text-muted-foreground mb-2">Nome da organização</div>
          <div className="font-display text-lg font-semibold text-foreground">—</div>
        </div>

        <div className="card-default rounded-lg border border-border shadow-sm p-6">
          <div className="body-sm text-muted-foreground mb-2">CNPJ</div>
          <div className="font-display text-lg font-semibold text-foreground">—</div>
        </div>

        <div className="card-default rounded-lg border border-border shadow-sm p-6">
          <div className="body-sm text-muted-foreground mb-2">Usuários</div>
          <div className="font-display text-lg font-semibold text-foreground">0</div>
        </div>

        <div className="card-default rounded-lg border border-border shadow-sm p-6">
          <div className="body-sm text-muted-foreground mb-2">Plano</div>
          <div className="font-display text-lg font-semibold text-foreground">—</div>
        </div>
      </div>

      <div className="card-default rounded-lg border border-border shadow-sm p-6">
        <h2 className="font-display text-h3 font-semibold text-foreground mb-4">Dados da empresa</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-label text-foreground mb-1 font-medium">Nome fantasia</label>
            <input
              type="text"
              disabled
              className="w-full px-3 py-2.5 border border-border rounded-sm bg-card text-foreground placeholder:text-muted-foreground"
              placeholder="—"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-label text-foreground mb-1 font-medium">CNPJ</label>
            <input
              type="text"
              disabled
              className="w-full px-3 py-2.5 border border-border rounded-sm bg-card text-foreground placeholder:text-muted-foreground"
              placeholder="00.000.000/0000-00"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-label text-foreground mb-1 font-medium">Razão social</label>
            <input
              type="text"
              disabled
              className="w-full px-3 py-2.5 border border-border rounded-sm bg-card text-foreground placeholder:text-muted-foreground"
              placeholder="—"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-label text-foreground mb-1 font-medium">E-mail</label>
            <input
              type="email"
              disabled
              className="w-full px-3 py-2.5 border border-border rounded-sm bg-card text-foreground placeholder:text-muted-foreground"
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
