export type ClubStatus = "Ativo" | "Pendente" | "Inativo" | "Rascunho";

export interface Club {
  id: string;
  nome: string;
  dominio: string;
  categoria: string;
  criadoEm: string;
  status: ClubStatus;
  descricao?: string;
  abertura?: string;
  fechamento?: string;
}

export const CATEGORIAS = [
  "Saúde & Bem-estar",
  "Alimentação",
  "Educação",
  "Beleza & Estética",
  "Pet Shop",
  "Tecnologia",
  "Lazer & Entretenimento",
] as const;

export const STATUS_OPTIONS: ClubStatus[] = ["Ativo", "Pendente", "Inativo", "Rascunho"];

export const HORARIOS = [
  "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00",
  "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00",
  "20:00", "21:00", "22:00", "23:00",
];
