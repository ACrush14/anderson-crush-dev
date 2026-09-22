"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { AppShell } from "./AppShell";
import { ListagemScreen } from "./ListagemScreen";
import { CriacaoScreen, ClubDraft, EMPTY_DRAFT } from "./CriacaoScreen";
import { ConfirmacaoModal } from "./ConfirmacaoModal";
import { SucessoScreen } from "./SucessoScreen";
import { FlowStep, FlowStepper } from "./ui";
import { Club } from "./types";
import { INITIAL_CLUBS } from "./data";
import "./theme.css";

function uid() {
  return Math.random().toString(36).slice(2, 9);
}

export default function ClubeBeneficiosApp() {
  const [step, setStep] = useState<FlowStep>("listagem");
  const [visited, setVisited] = useState<FlowStep[]>(["listagem"]);
  const [clubs, setClubs] = useState<Club[]>(INITIAL_CLUBS);
  const [draft, setDraft] = useState<ClubDraft>(EMPTY_DRAFT);
  const [showNotes, setShowNotes] = useState(false);

  function goTo(next: FlowStep) {
    setStep(next);
    setVisited((v) => (v.includes(next) ? v : [...v, next]));
  }

  function handleCreateNew() {
    setDraft(EMPTY_DRAFT);
    goTo("criacao");
  }

  function handleSubmitForm() {
    goTo("confirmacao");
  }

  function handleConfirm() {
    const newClub: Club = {
      id: uid(),
      nome: draft.nome,
      dominio: draft.nome.toLowerCase().replace(/[^a-z0-9]+/g, "") + ".com.br",
      categoria: draft.categoria,
      criadoEm: new Date().toLocaleDateString("pt-BR"),
      status: draft.status as Club["status"],
    };
    setClubs((prev) => [newClub, ...prev]);
    goTo("sucesso");
  }

  function handleBackToList() {
    setStep("listagem");
    setVisited(["listagem"]);
  }

  function handleJump(target: FlowStep) {
    if (target === "listagem") return handleBackToList();
    goTo(target);
  }

  return (
    <div className="cb-scope min-h-screen w-full px-4 py-8 sm:px-8 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        {/* Header */}
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/clube-de-beneficios/oryon-horizontal.png" alt="Oryon System" width={140} height={38} className="h-9 w-auto" />
            <div className="h-6 w-px bg-[var(--cb-border-strong)]" />
            <span className="text-sm font-medium text-[var(--cb-text-secondary)]">Teste UX/UI — Clube de Benefícios</span>
          </div>
          <button
            onClick={() => setShowNotes((s) => !s)}
            className="rounded-full border border-[var(--cb-border)] bg-[var(--cb-surface)] px-3.5 py-1.5 text-xs font-medium text-[var(--cb-text-secondary)] transition-colors hover:border-[var(--cb-secondary)] hover:text-[var(--cb-primary)]"
          >
            {showNotes ? "Ocultar justificativas" : "Ver justificativas de design"}
          </button>
        </header>

        <AnimatePresence initial={false}>
          {showNotes && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 gap-4 rounded-[var(--cb-radius-lg)] border border-[var(--cb-border)] bg-[var(--cb-surface)] p-5 text-sm text-[var(--cb-text-secondary)] sm:grid-cols-2 lg:grid-cols-4">
                <Note
                  title="Hierarquia"
                  body="A tabela prioriza empresa/clube (coluna larga) e usa avatar + nome + subtítulo para escaneabilidade rápida, com status como badge colorido — reconhecível sem ler texto."
                />
                <Note
                  title="Fluxo guiado"
                  body="O stepper no topo e as setas junto a cada botão principal deixam explícito onde o usuário está e qual ação avança o fluxo, reduzindo hesitação."
                />
                <Note
                  title="Feedback & estados"
                  body="Confirmação evita cadastros acidentais; Sucesso reforça o que foi criado (nome do clube) antes de devolver o controle à listagem."
                />
                <Note
                  title="Consistência"
                  body="Botões, badges, campos e avatares reutilizam os mesmos tokens de cor (#2E615F / #4AACA8), raio e espaçamento em todas as telas."
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Flow map */}
        <div className="rounded-[var(--cb-radius-lg)] border border-[var(--cb-border)] bg-[var(--cb-surface)] px-5 py-4">
          <FlowStepper current={step === "confirmacao" ? "criacao" : step} visited={visited} onJump={handleJump} />
        </div>

        {/* Screens */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <AppShell>
              {step === "listagem" && <ListagemScreen clubs={clubs} onCreate={handleCreateNew} />}
              {(step === "criacao" || step === "confirmacao") && (
                <CriacaoScreen
                  draft={draft}
                  onChange={(patch) => setDraft((d) => ({ ...d, ...patch }))}
                  onCancel={handleBackToList}
                  onSubmit={handleSubmitForm}
                />
              )}
              {step === "sucesso" && <SucessoScreen draft={draft} onBackToList={handleBackToList} />}
            </AppShell>
          </motion.div>
        </AnimatePresence>
      </div>

      <ConfirmacaoModal
        open={step === "confirmacao"}
        draft={draft}
        onCancel={() => goTo("criacao")}
        onConfirm={handleConfirm}
      />
    </div>
  );
}

function Note({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <p className="mb-1 text-[13px] font-semibold text-[var(--cb-primary)]">{title}</p>
      <p className="text-[13px] leading-relaxed text-[var(--cb-text-tertiary)]">{body}</p>
    </div>
  );
}
