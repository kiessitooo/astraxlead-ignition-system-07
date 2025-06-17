
const Footer = () => {
  const handleFacebookClick = () => {
    window.open('https://www.facebook.com/people/AstraxLead/100064132833424/', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/astraxlead/', '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/351966222032', '_blank');
  };

  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="text-3xl font-bold text-white mb-4 flex items-center">
              <img 
                src="/lovable-uploads/fdcdf8ec-9feb-4830-8411-9d0de810e92d.png" 
                alt="AstraxLead Logo" 
                className="w-8 h-8 mr-2"
              />
              Astrax<span className="text-[#EEEC26]">Lead</span>
            </div>
            <p className="text-gray-400 max-w-md mb-6">
              Transformamos sua presença digital em uma máquina de vendas através de tráfego pago estratégico e websites de alta performance.
            </p>
            <div className="flex space-x-4">
              <div 
                onClick={handleFacebookClick}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all duration-300 cursor-pointer"
              >
                <span className="font-bold">f</span>
              </div>
              <div 
                onClick={handleInstagramClick}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#E4405F] hover:text-white transition-all duration-300 cursor-pointer"
              >
                <span className="font-bold">ig</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-[#EEEC26] transition-colors duration-300">Meta Ads</a></li>
              <li><a href="#" className="hover:text-[#EEEC26] transition-colors duration-300">Desenvolvimento Web</a></li>
              <li><a href="#" className="hover:text-[#EEEC26] transition-colors duration-300">Automação de Marketing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li>geral@astraxlead.com</li>
              <li>+244 926851387
+351 966 222 032</li>
              <li className="pt-2">
                <a 
                  href="/agendar" 
                  className="bg-[#EEEC26] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#EEEC26]/90 transition-all duration-300 inline-block"
                >
                  Agendar Conversa
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2024 AstraxLead. Todos os direitos reservados.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#EEEC26] transition-colors duration-300">Política de Privacidade</a>
            <a href="#" className="hover:text-[#EEEC26] transition-colors duration-300">Termos de Uso</a>
            <a href="#" className="hover:text-[#EEEC26] transition-colors duration-300">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
