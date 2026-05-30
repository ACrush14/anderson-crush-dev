import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactModal from "@/components/ContactModal";
import ThemeProvider from "@/components/ThemeProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Anderson Crush | Developer",
  description: "Portfólio de Anderson Crush, Desenvolvedor Full Stack.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${roboto.variable} ${montserrat.variable} bg-background text-foreground transition-colors duration-300`}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
            <ContactModal />
            <WhatsAppButton />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
