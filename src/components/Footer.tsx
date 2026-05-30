import Link from 'next/link';
import { FaGithub, FaLinkedin, FaArrowUp, FaInstagram } from 'react-icons/fa';
import ParticlesBackground from './ParticlesBackground';
import RevealOnScroll from './RevealOnScroll';

const GITHUB_URL = 'https://github.com/ACrush14';
const LINKEDIN_URL = 'https://www.linkedin.com/in/andersondelimacomputacao/';
const INSTAGRAM_URL = 'https://www.instagram.com/andersoncrushdev/';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative">
      <ParticlesBackground id="particles-footer" className="py-10 border-t border-gray-900">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <div className="flex flex-col items-center gap-6 text-gray-400">
              <Link href="#home" className="flex flex-col items-center group hover:text-[#22C55E] transition-colors duration-300">
                <div className="p-3 border border-gray-600 group-hover:border-[#22C55E] group-hover:scale-110 transition-all duration-300">
                  <FaArrowUp size={20} />
                </div>
                <span className="mt-2 text-sm font-mono">Voltar ao Topo</span>
              </Link>

              <div className="flex items-center space-x-6 py-4">
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub className="w-7 h-7 hover:text-[#22C55E] transition-all hover:scale-110 duration-300" />
                </a>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin className="w-7 h-7 hover:text-[#22C55E] transition-all hover:scale-110 duration-300" />
                </a>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram className="w-7 h-7 hover:text-[#22C55E] transition-all hover:scale-110 duration-300" />
                </a>
              </div>

              <p className="text-sm text-gray-600 font-mono">
                &copy; {currentYear} Anderson Crush. Todos os direitos reservados.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </ParticlesBackground>
    </footer>
  );
}
