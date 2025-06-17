import { useState } from 'react';
import { Menu, X } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between bg-transparent rounded">
          <div className="text-2xl font-bold text-white">
            Astrax<span className="text-[#EEEC26]">Lead</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-[#EEEC26] transition-colors duration-300">
              Início
            </a>
            <a href="#services" className="text-gray-300 hover:text-[#EEEC26] transition-colors duration-300">
              Serviços
            </a>
            <a href="#cases" className="text-gray-300 hover:text-[#EEEC26] transition-colors duration-300">
              Casos de Sucesso
            </a>
            <a href="#about" className="text-gray-300 hover:text-[#EEEC26] transition-colors duration-300">
              Sobre
            </a>
            <button className="bg-[#EEEC26] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#EEEC26]/90 transition-all duration-300 hover:scale-105">Agendar Conversa</button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <nav className="md:hidden mt-4 pb-4 space-y-4">
            <a href="#home" className="block text-gray-300 hover:text-[#EEEC26] transition-colors duration-300">
              Início
            </a>
            <a href="#services" className="block text-gray-300 hover:text-[#EEEC26] transition-colors duration-300">
              Serviços
            </a>
            <a href="#cases" className="block text-gray-300 hover:text-[#EEEC26] transition-colors duration-300">
              Casos de Sucesso
            </a>
            <a href="#about" className="block text-gray-300 hover:text-[#EEEC26] transition-colors duration-300">
              Sobre
            </a>
            <button className="w-full bg-[#EEEC26] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#EEEC26]/90 transition-all duration-300">
              Agendar Diagnóstico
            </button>
          </nav>}
      </div>
    </header>;
};
export default Header;