
import { MessageSquare } from 'lucide-react';

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/351966222032', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button 
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      >
        <MessageSquare className="w-6 h-6 group-hover:animate-pulse" />
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
      </button>
      
      <div className="absolute bottom-16 right-0 bg-gray-800 text-white p-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        <div className="text-sm font-semibold">Fale conosco agora!</div>
        <div className="text-xs text-gray-300">Resposta em minutos</div>
      </div>
    </div>
  );
};

export default WhatsAppFloat;
