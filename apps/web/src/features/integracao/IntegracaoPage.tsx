import PageHeader from "@/components/PageHeader";
import { useToast } from "@/components/ToastProvider";
import { Mail, Link, RefreshCw } from "lucide-react";

type Integracao = {
  id: string;
  nome: string;
  descricao: string;
  icone: React.ReactNode;
  classeFundo: string;
  classeIcone: string;
  status: "conectado" | "desconectado" | "disponivel";
  acao: string;
};

const badgePorStatus: Record<string, string> = {
  conectado: "bg-success-light text-success",
  desconectado: "bg-muted text-muted-foreground",
  disponivel: "bg-primary-light text-primary",
};

const labelPorStatus: Record<string, string> = {
  conectado: "Conectado",
  desconectado: "Desconectado",
  disponivel: "Disponível",
};

const whatsappIcon = (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="#25D366"
    aria-hidden="true"
  >
    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12l-4-4h-3v3l-4-4H8l-4 4 6 6 6-6z" />
  </svg>
);

const n8nIcon = (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="#EE442E"
    aria-hidden="true"
  >
    <circle cx="6" cy="6" r="1.5" />
    <circle cx="18" cy="6" r="1.5" />
    <circle cx="12" cy="18" r="1.5" />
    <path
      d="M7.2 7.2L9 9 M16.8 7.2L15 9 M7.2 16.8L9 15 M16.8 16.8L15 15 M9 9H15V9 M9 15H15V15"
      stroke="#EE442E"
      strokeWidth="1.6"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

const integracaoes: Integracao[] = [
  {
    id: "whatsapp",
    nome: "WhatsApp",
    descricao:
      "Notificações, lembretes e atendimento direto aos clientes pelo WhatsApp da empresa.",
    icone: whatsappIcon,
    classeFundo: "bg-[#25D366]/10",
    classeIcone: "text-[#25D366]",
    status: "conectado",
    acao: "Gerenciar",
  },
  {
    id: "email",
    nome: "E-mail (SMTP)",
    descricao:
      "Envio automático de boletos, notas fiscais, relatórios e avisos por e-mail.",
    icone: <Mail className="w-5 h-5" />,
    classeFundo: "bg-primary-light",
    classeIcone: "text-primary",
    status: "desconectado",
    acao: "Configurar",
  },
  {
    id: "n8n",
    nome: "n8n",
    descricao:
      "Automação de fluxos de trabalho, webhooks e integrações customizadas entre sistemas.",
    icone: n8nIcon,
    classeFundo: "bg-[#EE442E]/10",
    classeIcone: "text-[#EE442E]",
    status: "desconectado",
    acao: "Conectar",
  },
  {
    id: "webhooks",
    nome: "Webhooks",
    descricao:
      "Receba eventos de serviços externos e dispare ações no Mirevion via HTTP.",
    icone: <Link className="w-5 h-5" />,
    classeFundo: "bg-success-light",
    classeIcone: "text-success",
    status: "disponivel",
    acao: "Criar webhook",
  },
];

export default function IntegracaoPage() {
  const { toast } = useToast();

  const handleConectar = (integracao: Integracao) => {
    toast(
      `${integracao.nome}`,
      `Integração "${integracao.nome}" ${integracao.status === "conectado" ? "aberta em" : "solicitada para"}`,
      "success",
      3000,
    );
  };

  return (
    <div className="space-y-8">
      <PageHeader
        title="Integrações"
        description={
          <>
            Conecte o Mirevion aos serviços que sua empresa já usa —{" "}
            <strong>WhatsApp</strong>, <strong>e-mail</strong>,{" "}
            <strong>n8n</strong> e outros plugins para automatizar a operação.
          </>
        }
        action={
          <button
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-accent text-accent-foreground rounded-md font-medium hover:bg-accent/90 transition-colors shadow-sm"
          >
            Nova integração <PlusIcon className="w-4 h-4" />
          </button>
        }
      />

      <div className="space-y-6">
        <div>
          <h2 className="font-display text-h3 font-semibold text-foreground">
            Suas integrações
          </h2>
          <p className="body-sm text-muted-foreground mt-1">
            Gerencie os plugins e serviços conectados à sua organização.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {integracaoes.map((integracao) => (
            <div
              key={integracao.id}
              className="card-default rounded-xl border border-border shadow-sm p-6 hover:shadow-md transition-shadow duration-200 group"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center group-hover:opacity-90 transition-opacity duration-300 ${integracao.classeFundo}`}
                  >
                    {integracao.icone}
                  </div>
                  <div>
                    <div className="body-sm font-medium text-foreground">
                      {integracao.nome}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {integracao.descricao}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-md ${badgePorStatus[integracao.status]}`}
                  >
                    {labelPorStatus[integracao.status]}
                  </span>
                  <button
                    onClick={() => handleConectar(integracao)}
                    className="text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    {integracao.acao}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="card-default rounded-xl border border-border shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-h3 font-semibold text-foreground">
              Plugins e recursos relacionados
            </h2>
            <button
              className="inline-flex items-center gap-1 px-3 py-2 bg-muted text-muted-foreground text-sm font-medium rounded-md hover:bg-muted/50 transition-colors"
            >
              <RefreshCw className="w-3 h-3" /> Atualizar status
            </button>
          </div>
          <ul className="space-y-3">
            {[
              {
                titulo: "API REST",
                desc: "Integre o Mirevion com seus próprios sistemas pelos endpoints públicos da plataforma.",
              },
              {
                titulo: "Webhooks personalizados",
                desc: "Disparos de eventos para URLs externas sempre que algo muda na sua organização.",
              },
              {
                titulo: "Sincronização de contatos",
                desc: "Mantenha a base de clientes alinhada entre WhatsApp, e-mail e o CRM do Mirevion.",
              },
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted border border-transparent hover:bg-muted/50 hover:border-border transition-colors">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-card flex items-center justify-center shadow-sm text-sm">
                  <Link className="w-3.5 h-3.5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-foreground">
                    {item.titulo}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {item.desc}
                  </div>
                </div>
                <a
                  className="text-xs text-primary hover:text-primary/80"
                  aria-label={`Ver documentação de ${item.titulo}`}
                >
                  Ver documentação
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function PlusIcon(props: { className?: string }) {
  return (
    <svg
      className={props.className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      />
    </svg>
  );
}
