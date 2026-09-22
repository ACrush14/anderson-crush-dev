import { AnimatePresence, motion } from "framer-motion";
import { ClubDraft } from "./CriacaoScreen";
import { Button, GuideArrow } from "./ui";

function AlertIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="text-[var(--cb-primary)]">
      <circle cx="11" cy="11" r="8.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 7.5v4.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="11" cy="14.6" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function ConfirmacaoModal({
  open,
  draft,
  onCancel,
  onConfirm,
}: {
  open: boolean;
  draft: ClubDraft;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#16211f]/55 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="confirm-title"
          onClick={onCancel}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-[var(--cb-radius-lg)] border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 shadow-2xl"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--cb-tint)]">
              <AlertIcon />
            </div>
            <h2 id="confirm-title" className="text-lg font-semibold text-[var(--cb-text)]">
              Confirmar criação do clube?
            </h2>
            <p className="mt-1.5 text-sm text-[var(--cb-text-tertiary)]">
              Revise os dados abaixo antes de concluir o cadastro. Você poderá editá-los depois na listagem.
            </p>

            <dl className="mt-5 flex flex-col gap-3 rounded-[var(--cb-radius-md)] bg-[var(--cb-tint-subtle)] p-4 text-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-[var(--cb-radius-sm)] bg-[var(--cb-tint)] font-semibold text-[var(--cb-primary)]">
                  {draft.fotoUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element -- blob: preview URL, not optimizable by next/image
                    <img src={draft.fotoUrl} alt="" className="h-full w-full object-cover" />
                  ) : (
                    (draft.nome[0] || "?").toUpperCase()
                  )}
                </div>
                <div>
                  <dt className="sr-only">Nome</dt>
                  <dd className="font-medium text-[var(--cb-text)]">{draft.nome || "—"}</dd>
                  <dd className="text-xs text-[var(--cb-text-tertiary)]">{draft.categoria}</dd>
                </div>
              </div>
              <Row label="Status" value={draft.status} />
              <Row label="Horário" value={`${draft.abertura} — ${draft.fechamento}`} />
              {draft.descricao && <Row label="Descrição" value={draft.descricao} />}
            </dl>

            <div className="mt-6 flex items-center justify-end gap-3">
              <Button variant="ghost" onClick={onCancel}>
                Cancelar
              </Button>
              <GuideArrow label="Finaliza o cadastro" />
              <Button onClick={onConfirm}>Confirmar</Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <dt className="shrink-0 text-[var(--cb-text-tertiary)]">{label}</dt>
      <dd className="text-right text-[var(--cb-text)]">{value}</dd>
    </div>
  );
}
