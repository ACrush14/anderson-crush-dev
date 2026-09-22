import { ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes, InputHTMLAttributes } from "react";
import { motion } from "framer-motion";
import { ClubStatus } from "./types";

/* ────────────────────────────────────────────────────────────────
   Button
   ──────────────────────────────────────────────────────────────── */
type ButtonVariant = "primary" | "secondary" | "ghost" | "destructive";
type ButtonSize = "md" | "sm";

const buttonVariantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--cb-primary)] text-[var(--cb-text-inverse)] hover:bg-[var(--cb-primary-hover)] border border-transparent",
  secondary:
    "bg-[var(--cb-tint)] text-[var(--cb-primary)] hover:bg-[var(--cb-tint-subtle)] border border-transparent",
  ghost:
    "bg-transparent text-[var(--cb-text)] hover:bg-[var(--cb-tint-subtle)] border border-[var(--cb-border)]",
  destructive:
    "bg-[var(--cb-danger-bg)] text-[var(--cb-danger-fg)] hover:brightness-95 border border-transparent",
};

const buttonSizeClasses: Record<ButtonSize, string> = {
  md: "h-10 px-4 text-sm",
  sm: "h-8 px-3 text-[13px]",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  fullWidth,
  className = "",
  ...rest
}: {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  fullWidth?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...rest}
      className={`inline-flex items-center justify-center gap-2 rounded-[var(--cb-radius-md)] font-medium transition-colors duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${buttonVariantClasses[variant]} ${buttonSizeClasses[size]} ${fullWidth ? "w-full" : ""} ${className}`}
    >
      {icon}
      {children}
    </button>
  );
}

/* ────────────────────────────────────────────────────────────────
   Status Badge
   ──────────────────────────────────────────────────────────────── */
const statusStyles: Record<ClubStatus, string> = {
  Ativo: "bg-[var(--cb-success-bg)] text-[var(--cb-success-fg)]",
  Pendente: "bg-[var(--cb-warning-bg)] text-[var(--cb-warning-fg)]",
  Inativo: "bg-[var(--cb-danger-bg)] text-[var(--cb-danger-fg)]",
  Rascunho: "bg-[var(--cb-neutral-bg)] text-[var(--cb-neutral-fg)]",
};

export function StatusBadge({ status }: { status: ClubStatus }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[status]}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}

/* ────────────────────────────────────────────────────────────────
   Company Avatar (initials)
   ──────────────────────────────────────────────────────────────── */
export function CompanyAvatar({
  name,
  size = "md",
}: {
  name: string;
  size?: "sm" | "md" | "lg";
}) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  const sizeClasses = { sm: "h-8 w-8 text-xs", md: "h-10 w-10 text-sm", lg: "h-16 w-16 text-xl" };
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-[var(--cb-radius-md)] bg-[var(--cb-tint)] font-semibold text-[var(--cb-primary)] ${sizeClasses[size]}`}
    >
      {initials || "?"}
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────
   Form fields
   ──────────────────────────────────────────────────────────────── */
function FieldShell({ label, helper, required, children }: { label: string; helper?: string; required?: boolean; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[13px] font-medium text-[var(--cb-text)]">
        {label}
        {required && <span className="text-[var(--cb-danger-fg)]"> *</span>}
      </span>
      {children}
      {helper && <span className="text-xs text-[var(--cb-text-tertiary)]">{helper}</span>}
    </label>
  );
}

const inputBase =
  "w-full rounded-[var(--cb-radius-sm)] border border-[var(--cb-border)] bg-[var(--cb-surface)] px-3 text-sm text-[var(--cb-text)] placeholder:text-[var(--cb-text-tertiary)] outline-none transition-shadow focus:border-[var(--cb-secondary)] focus:ring-2 focus:ring-[var(--cb-tint)]";

export function TextField({
  label,
  helper,
  required,
  ...rest
}: { label: string; helper?: string; required?: boolean } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <FieldShell label={label} helper={helper} required={required}>
      <input {...rest} className={`h-10 ${inputBase}`} />
    </FieldShell>
  );
}

export function TextareaField({
  label,
  helper,
  required,
  ...rest
}: { label: string; helper?: string; required?: boolean } & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <FieldShell label={label} helper={helper} required={required}>
      <textarea {...rest} rows={4} className={`resize-none py-2.5 ${inputBase}`} />
    </FieldShell>
  );
}

export function SelectField({
  label,
  helper,
  required,
  options,
  ...rest
}: {
  label: string;
  helper?: string;
  required?: boolean;
  options: { value: string; label: string }[];
} & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <FieldShell label={label} helper={helper} required={required}>
      <div className="relative">
        <select
          {...rest}
          className={`h-10 appearance-none pr-9 ${inputBase}`}
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <svg
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--cb-text-tertiary)]"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </FieldShell>
  );
}

/* ────────────────────────────────────────────────────────────────
   Flow stepper — always-visible map of the 4-step flow, connected
   by arrows, so the whole journey stays legible from any screen.
   ──────────────────────────────────────────────────────────────── */
export type FlowStep = "listagem" | "criacao" | "confirmacao" | "sucesso";

const STEPS: { key: FlowStep; label: string }[] = [
  { key: "listagem", label: "Listagem" },
  { key: "criacao", label: "Criação" },
  { key: "confirmacao", label: "Confirmação" },
  { key: "sucesso", label: "Sucesso" },
];

export function FlowStepper({ current, visited, onJump }: { current: FlowStep; visited: FlowStep[]; onJump: (step: FlowStep) => void }) {
  const currentIndex = STEPS.findIndex((s) => s.key === current);
  return (
    <nav aria-label="Fluxo de cadastro" className="flex items-center gap-2 overflow-x-auto">
      {STEPS.map((step, i) => {
        const isCurrent = step.key === current;
        const isDone = i < currentIndex || (visited.includes(step.key) && !isCurrent);
        const isClickable = isDone && !isCurrent;
        return (
          <div key={step.key} className="flex items-center gap-2">
            <button
              type="button"
              disabled={!isClickable}
              onClick={() => isClickable && onJump(step.key)}
              className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-colors ${
                isCurrent
                  ? "border-transparent bg-[var(--cb-primary)] text-white"
                  : isDone
                  ? "border-[var(--cb-secondary)] text-[var(--cb-primary)] bg-[var(--cb-tint-subtle)] cursor-pointer hover:bg-[var(--cb-tint)]"
                  : "border-[var(--cb-border)] text-[var(--cb-text-tertiary)] cursor-default"
              }`}
            >
              <span
                className={`flex h-4 w-4 items-center justify-center rounded-full text-[10px] ${
                  isCurrent ? "bg-white/20" : isDone ? "bg-[var(--cb-secondary)] text-white" : "bg-[var(--cb-border)]"
                }`}
              >
                {isDone && !isCurrent ? "✓" : i + 1}
              </span>
              {step.label}
            </button>
            {i < STEPS.length - 1 && (
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none" className="shrink-0 text-[var(--cb-border-strong)]">
                <path d="M1 5h13M9 1l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
        );
      })}
    </nav>
  );
}

/* ────────────────────────────────────────────────────────────────
   Guide arrow — a small curved, animated arrow with a caption that
   points at the button which advances the flow, so each screen's
   "next action" is visually unmistakable.
   ──────────────────────────────────────────────────────────────── */
export function GuideArrow({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`} aria-hidden="true">
      <span className="whitespace-nowrap rounded-full bg-[var(--cb-tint-subtle)] px-2.5 py-1 text-xs font-medium text-[var(--cb-primary)] border border-dashed border-[var(--cb-secondary)]">
        {label}
      </span>
      <motion.svg
        width="34"
        height="18"
        viewBox="0 0 34 18"
        fill="none"
        className="text-[var(--cb-secondary)]"
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M1 9c8-6 18-6 26 0"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeDasharray="3 4"
        />
        <path d="M22 4l6 5-6 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </motion.svg>
    </div>
  );
}
