import type { Metadata } from "next";
import ClubeBeneficiosApp from "@/components/clube-de-beneficios/ClubeBeneficiosApp";

export const metadata: Metadata = {
  title: "Clube de Benefícios — Teste UX/UI | Anderson Crush",
  description:
    "Protótipo navegável do fluxo de gerenciamento de Clubes de Benefícios: listagem, criação, confirmação e sucesso.",
};

export default function ClubeDeBeneficiosPage() {
  return <ClubeBeneficiosApp />;
}
