import { createContext, useContext, useState, ReactNode, useCallback } from "react";

type ToastType = "success" | "error" | "warning" | "info";

interface Toast {
  id: string;
  title: string;
  description?: string;
  type: ToastType;
  duration?: number;
}

interface ToastContextType {
  toasts: Toast[];
  toast: (title: string, description?: string, type?: ToastType, duration?: number) => void;
  dismiss: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = useCallback(
    (title: string, description?: string, type: ToastType = "info", duration = 5000) => {
      const id = Math.random().toString(36).substr(2, 9);
      const newToast: Toast = { id, title, description, type, duration };
      setToasts((prev) => [...prev, newToast]);
      if (duration > 0) {
        setTimeout(() => {
          setToasts((prev) => prev.filter((t) => t.id !== id));
        }, duration);
      }
    },
    []
  );

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, toast, dismiss }}>
      {children}
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 pointer-events-none">
        {toasts.map((t) => (
          <div
            key={t.id}
            className="pointer-events-auto w-64 p-4 rounded-lg shadow-lg border flex items-start gap-3 animate-in slide-in-from-top-2 duration-300"
            style={{ borderColor: getBorderColor(t.type) }}
          >
            <div className={getIconColor(t.type)}>
              {getIcon(t.type)}
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-foreground">{t.title}</h3>
              {t.description && <p className="text-xs text-muted-foreground mt-1">{t.description}</p>}
            </div>
            <button
              onClick={() => dismiss(t.id)}
              className="ml-2 p-1 rounded-md hover:bg-muted hover:text-foreground transition-colors text-muted-foreground"
              aria-label="Fechar notificação"
            >
              <span className="sr-only">Fechar</span>
              <span className="w-4 h-4">✕</span>
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

function getIcon(type: ToastType): React.ReactNode {
  switch (type) {
    case "success": return <span className="w-5 h-5">✓</span>;
    case "error": return <span className="w-5 h-5">✕</span>;
    case "warning": return <span className="w-5 h-5">⚠</span>;
    case "info": return <span className="w-5 h-5">ℹ</span>;
  }
}

function getIconColor(type: ToastType): string {
  switch (type) {
    case "success": return "text-success bg-success-light";
    case "error": return "text-destructive bg-destructive-light";
    case "warning": return "text-warning bg-warning-light";
    case "info": return "text-primary bg-primary-light";
  }
}

function getBorderColor(type: ToastType): string {
  switch (type) {
    case "success": return "#86efac";
    case "error": return "#f87171";
    case "warning": return "#fbbf24";
    case "info": return "#3b82f6";
  }
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}
