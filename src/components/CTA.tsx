import { MessageSquare, Phone } from 'lucide-react';
const CTA = () => {
  return <section className="py-20 bg-gradient-to-br from-[#EEEC26]/10 via-black to-[#8F00FF]/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Pronto para 
            <span className="text-[#EEEC26] block">dominar o digital?</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Pare de perder tempo e dinheiro com estratégias que não funcionam. 
            Agende um diagnóstico gratuito e descubra como podemos transformar 
            sua presença digital em uma máquina de vendas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-[#EEEC26] text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#EEEC26]/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#EEEC26]/25 flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Agendar Diagnóstico Gratuito
            </button>
            <button className="border-2 border-[#8F00FF] text-[#8F00FF] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#8F00FF] hover:text-white transition-all duration-300 flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Falar no WhatsApp
            </button>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-4">O que você recebe no diagnóstico:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-[#EEEC26] rounded-full mr-3"></div>
                <span>Análise completa da sua presença digital atual</span>
              </div>
              <div className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-[#8F00FF] rounded-full mr-3"></div>
                <span>Identificação de oportunidades perdidas</span>
              </div>
              <div className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-[#EEEC26] rounded-full mr-3"></div>
                <span>Estratégia personalizada para seu negócio</span>
              </div>
              <div className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-[#8F00FF] rounded-full mr-3"></div>
                <span>Plano de accão para os próximos 30 dias</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CTA;