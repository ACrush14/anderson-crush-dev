import Image from "next/image";
import { ReactNode } from "react";
import { CompanyAvatar } from "./ui";

const NAV_ITEMS = [
  { label: "Clubes de Benefícios", active: true },
  { label: "Categorias", active: false },
  { label: "Relatórios", active: false },
  { label: "Configurações", active: false },
];

function GridIcon({ active }: { active: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="3" y="3" width="6" height="6" rx="1.5" stroke={active ? "#2E615F" : "#78807F"} strokeWidth="1.5" />
      <rect x="11" y="3" width="6" height="6" rx="1.5" stroke={active ? "#2E615F" : "#78807F"} strokeWidth="1.5" />
      <rect x="3" y="11" width="6" height="6" rx="1.5" stroke={active ? "#2E615F" : "#78807F"} strokeWidth="1.5" />
      <rect x="11" y="11" width="6" height="6" rx="1.5" stroke={active ? "#2E615F" : "#78807F"} strokeWidth="1.5" />
    </svg>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-[720px] w-full overflow-hidden rounded-[var(--cb-radius-lg)] border border-[var(--cb-border)] bg-[var(--cb-bg)] shadow-[0_12px_32px_-8px_rgba(22,33,31,0.16)]">
      {/* Sidebar */}
      <aside className="hidden w-60 shrink-0 flex-col border-r border-[var(--cb-border)] bg-[var(--cb-surface)] p-4 md:flex">
        <div className="mb-5 flex items-center gap-2 px-2">
          <Image src="/clube-de-beneficios/oryon-mark.png" alt="Oryon System" width={28} height={28} className="rounded-md" />
          <span className="text-[15px] font-semibold text-[var(--cb-text)]">Clube de Benefícios</span>
        </div>
        <p className="mb-2 px-2 text-[11px] font-medium tracking-[0.12em] text-[var(--cb-text-tertiary)]">PRINCIPAL</p>
        <nav className="flex flex-col gap-0.5">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-2.5 rounded-[var(--cb-radius-sm)] px-3 py-2.5 text-sm font-medium ${
                item.active ? "bg-[var(--cb-tint)] text-[var(--cb-primary)]" : "text-[var(--cb-text-secondary)]"
              }`}
            >
              <GridIcon active={item.active} />
              {item.label}
            </div>
          ))}
        </nav>
        <div className="mt-auto flex items-center gap-2.5 border-t border-[var(--cb-border)] px-2 pt-4">
          <CompanyAvatar name="Anderson Crush" size="sm" />
          <div className="leading-tight">
            <p className="text-[13px] font-medium text-[var(--cb-text)]">Anderson Crush</p>
            <p className="text-xs text-[var(--cb-text-tertiary)]">Administrador</p>
          </div>
        </div>
      </aside>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6 md:p-10">{children}</div>
    </div>
  );
}
