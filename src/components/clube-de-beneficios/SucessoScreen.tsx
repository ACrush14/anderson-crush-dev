import { motion } from "framer-motion";
import { ClubDraft } from "./CriacaoScreen";
import { Button, GuideArrow } from "./ui";

function CheckIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <motion.path
        d="M8 15.5l4.5 4.5L22 10"
        stroke="#2E615F"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
      />
    </svg>
  );
}

export function SucessoScreen({ draft, onBackToList }: { draft: ClubDraft; onBackToList: () => void }) {
  return (
    <div className="flex h-full min-h-[520px] flex-col items-center justify-center gap-6 text-center">
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--cb-tint)]"
      >
        <CheckIcon />
      </motion.div>

      <div className="max-w-sm">
        <h1 className="text-2xl font-semibold text-[var(--cb-text)]">Clube criado com sucesso!</h1>
        <p className="mt-2 text-sm text-[var(--cb-text-tertiary)]">
          <strong className="text-[var(--cb-text-secondary)]">{draft.nome}</strong> já está cadastrado e disponível na
          listagem de clubes de benefícios.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <GuideArrow label="Fecha o ciclo" />
        <Button onClick={onBackToList}>Voltar para a listagem</Button>
      </div>
    </div>
  );
}
