
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between bg-transparent rounded">
          <div className="text-2xl font-bold text-white flex items-center">
            <img 
              src="/lovable-uploads/fdcdf8ec-9feb-4830-8411-9d0de810e92d.png" 
              alt="AstraxLead Logo" 
              className="w-8 h-8 mr-2"
            />
            Astrax<span className="text-[#EEEC26]">Lead</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <a href="/agendar" className="bg-[#EEEC26] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#EEEC26]/90 transition-all duration-300 hover:scale-105">
              Agendar Diagnóstico
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <a 
              href="/agendar" 
              className="block w-full bg-[#EEEC26] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#EEEC26]/90 transition-all duration-300 text-center"
            >
              Agendar Diagnóstico
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
