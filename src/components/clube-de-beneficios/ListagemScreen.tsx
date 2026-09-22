import { Club } from "./types";
import { Button, CompanyAvatar, GuideArrow, StatusBadge } from "./ui";

function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-[var(--cb-text-tertiary)]">
      <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 16l-3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function ListagemScreen({ clubs, onCreate }: { clubs: Club[]; onCreate: () => void }) {
  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-[var(--cb-text)]">Clubes de Benefícios</h1>
          <p className="mt-1 text-sm text-[var(--cb-text-tertiary)]">{clubs.length} clubes cadastrados</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-[var(--cb-radius-sm)] border border-[var(--cb-border)] bg-[var(--cb-surface)] px-3 h-10 sm:flex">
            <SearchIcon />
            <input
              placeholder="Buscar clube..."
              className="w-40 bg-transparent text-sm text-[var(--cb-text)] placeholder:text-[var(--cb-text-tertiary)] outline-none"
            />
          </div>
          <GuideArrow label="Comece por aqui" />
          <Button icon={<PlusIcon />} onClick={onCreate}>
            Criar novo clube
          </Button>
        </div>
      </div>

      <div className="overflow-hidden rounded-[var(--cb-radius-lg)] border border-[var(--cb-border)] bg-[var(--cb-surface)] shadow-[0_1px_3px_rgba(22,33,31,0.08)]">
       <div className="overflow-x-auto">
        <div className="grid min-w-[760px] grid-cols-[1fr_170px_150px_120px_40px] items-center gap-4 border-b border-[var(--cb-border)] px-6 py-3 text-[11px] font-medium tracking-wide text-[var(--cb-text-tertiary)]">
          <span>EMPRESA / CLUBE</span>
          <span>CATEGORIA</span>
          <span>DATA DE CRIAÇÃO</span>
          <span>STATUS</span>
          <span />
        </div>
        {clubs.map((club) => (
          <div
            key={club.id}
            className="grid min-w-[760px] grid-cols-[1fr_170px_150px_120px_40px] items-center gap-4 border-b border-[var(--cb-border)] px-6 py-4 text-sm last:border-b-0 hover:bg-[var(--cb-tint-subtle)]/40"
          >
            <div className="flex items-center gap-3 min-w-0">
              <CompanyAvatar name={club.nome} />
              <div className="min-w-0">
                <p className="truncate font-medium text-[var(--cb-text)]">{club.nome}</p>
                <p className="truncate text-xs text-[var(--cb-text-tertiary)]">{club.dominio}</p>
              </div>
            </div>
            <span className="truncate text-[var(--cb-text-secondary)]">{club.categoria}</span>
            <span className="text-[var(--cb-text-secondary)]">{club.criadoEm}</span>
            <StatusBadge status={club.status} />
            <button
              aria-label="Mais ações"
              className="flex h-8 w-8 items-center justify-center rounded-[var(--cb-radius-sm)] text-[var(--cb-text-tertiary)] hover:bg-[var(--cb-tint-subtle)]"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <circle cx="8" cy="3" r="1.3" />
                <circle cx="8" cy="8" r="1.3" />
                <circle cx="8" cy="13" r="1.3" />
              </svg>
            </button>
          </div>
        ))}
       </div>
      </div>
    </div>
  );
}
