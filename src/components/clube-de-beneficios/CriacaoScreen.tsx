import { ChangeEvent, useRef } from "react";
import { CATEGORIAS, HORARIOS, STATUS_OPTIONS } from "./types";
import { Button, GuideArrow, SelectField, TextField, TextareaField } from "./ui";

export interface ClubDraft {
  nome: string;
  descricao: string;
  status: string;
  categoria: string;
  abertura: string;
  fechamento: string;
  fotoUrl: string | null;
}

export const EMPTY_DRAFT: ClubDraft = {
  nome: "",
  descricao: "",
  status: STATUS_OPTIONS[0],
  categoria: CATEGORIAS[0],
  abertura: "08:00",
  fechamento: "18:00",
  fotoUrl: null,
};

function CameraIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="text-[var(--cb-text-tertiary)]">
      <path
        d="M4 7.5c0-.83.67-1.5 1.5-1.5h1.4l.7-1.2c.27-.47.77-.8 1.32-.8h4.16c.55 0 1.05.33 1.32.8l.7 1.2h1.4c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 0 1 4 15.5v-8Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="11" cy="11.5" r="3" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function CriacaoScreen({
  draft,
  onChange,
  onCancel,
  onSubmit,
}: {
  draft: ClubDraft;
  onChange: (patch: Partial<ClubDraft>) => void;
  onCancel: () => void;
  onSubmit: () => void;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFile(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) onChange({ fotoUrl: URL.createObjectURL(file) });
  }

  const isValid = draft.nome.trim().length > 1;

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-7">
      <div>
        <h1 className="text-2xl font-semibold text-[var(--cb-text)]">Novo clube de benefícios</h1>
        <p className="mt-1 text-sm text-[var(--cb-text-tertiary)]">
          Preencha os dados abaixo para cadastrar um novo clube parceiro.
        </p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (isValid) onSubmit();
        }}
        className="flex flex-col gap-6 rounded-[var(--cb-radius-lg)] border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 shadow-[0_1px_3px_rgba(22,33,31,0.08)] sm:p-8"
      >
        {/* Foto da empresa */}
        <div className="flex flex-col gap-1.5">
          <span className="text-[13px] font-medium text-[var(--cb-text)]">Foto da empresa</span>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-[var(--cb-radius-md)] border border-dashed border-[var(--cb-border-strong)] bg-[var(--cb-tint-subtle)] transition-colors hover:border-[var(--cb-secondary)]"
            >
              {draft.fotoUrl ? (
                // eslint-disable-next-line @next/next/no-img-element -- blob: preview URL, not optimizable by next/image
                <img src={draft.fotoUrl} alt="Prévia do logo" className="h-full w-full object-cover" />
              ) : (
                <CameraIcon />
              )}
            </button>
            <div className="flex flex-col gap-2">
              <Button type="button" variant="ghost" size="sm" onClick={() => fileInputRef.current?.click()}>
                {draft.fotoUrl ? "Trocar imagem" : "Selecionar imagem"}
              </Button>
              <span className="text-xs text-[var(--cb-text-tertiary)]">PNG ou JPG, até 5MB.</span>
            </div>
            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFile} className="hidden" />
          </div>
        </div>

        <TextField
          label="Nome"
          required
          placeholder="Ex: Rede Fitness Plus"
          value={draft.nome}
          onChange={(e) => onChange({ nome: e.target.value })}
        />

        <TextareaField
          label="Descrição"
          placeholder="Conte brevemente o que este clube oferece aos beneficiários..."
          value={draft.descricao}
          onChange={(e) => onChange({ descricao: e.target.value })}
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <SelectField
            label="Categoria"
            value={draft.categoria}
            onChange={(e) => onChange({ categoria: e.target.value })}
            options={CATEGORIAS.map((c) => ({ value: c, label: c }))}
          />
          <SelectField
            label="Status"
            value={draft.status}
            onChange={(e) => onChange({ status: e.target.value })}
            options={STATUS_OPTIONS.map((s) => ({ value: s, label: s }))}
          />
        </div>

        <div>
          <span className="mb-1.5 block text-[13px] font-medium text-[var(--cb-text)]">Horário de funcionamento</span>
          <div className="grid grid-cols-2 gap-5">
            <SelectField
              label="Abertura"
              value={draft.abertura}
              onChange={(e) => onChange({ abertura: e.target.value })}
              options={HORARIOS.map((h) => ({ value: h, label: h }))}
            />
            <SelectField
              label="Fechamento"
              value={draft.fechamento}
              onChange={(e) => onChange({ fechamento: e.target.value })}
              options={HORARIOS.map((h) => ({ value: h, label: h }))}
            />
          </div>
        </div>

        <div className="mt-2 flex items-center justify-end gap-3 border-t border-[var(--cb-border)] pt-6">
          <Button type="button" variant="ghost" onClick={onCancel}>
            Cancelar
          </Button>
          <GuideArrow label="Envia para confirmação" />
          <Button type="submit" disabled={!isValid}>
            Criar clube
          </Button>
        </div>
      </form>
    </div>
  );
}
