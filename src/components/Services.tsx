
import { Target, Globe, Zap, TrendingUp, Bot } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            O que <span className="text-[#EEEC26]">fazemos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Três pilares fundamentais para transformar sua presença digital em uma máquina de vendas
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Tráfego Pago */}
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-[#EEEC26]/50 transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="bg-[#EEEC26] p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white">Tráfego Pago</h3>
            </div>
            
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Estratégias precisas no Meta Ads e Google Ads que transformam investimento em leads qualificados e vendas reais.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-[#8F00FF] rounded-full mr-3"></div>
                <span>Estratégia baseada em dados e comportamento</span>
              </div>
              <div className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-[#8F00FF] rounded-full mr-3"></div>
                <span>Otimização contínua para máximo ROAS</span>
              </div>
              <div className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-[#8F00FF] rounded-full mr-3"></div>
                <span>Relatórios transparentes e acompanhamento em tempo real</span>
              </div>
            </div>

            <a href="/agendar" className="w-full bg-[#EEEC26] text-black py-3 rounded-lg font-semibold hover:bg-[#EEEC26]/90 transition-all duration-300 hover:scale-105 block text-center">
              Quero mais tráfego qualificado
            </a>
          </div>

          {/* Websites */}
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-[#8F00FF]/50 transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="bg-[#8F00FF] p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Websites de Alta Performance</h3>
            </div>
            
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Sites que carregam rápido, convertem visitantes em clientes e crescem junto com seu negócio.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-[#EEEC26] rounded-full mr-3"></div>
                <span>Design focado em conversão e experiência do usuário</span>
              </div>
              <div className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-[#EEEC26] rounded-full mr-3"></div>
                <span>100% responsivo e otimizado para todos os dispositivos</span>
              </div>
              <div className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-[#EEEC26] rounded-full mr-3"></div>
                <span>SEO integrado e pronto para escalar</span>
              </div>
            </div>

            <a href="/agendar" className="w-full bg-[#8F00FF] text-white py-3 rounded-lg font-semibold hover:bg-[#8F00FF]/90 transition-all duration-300 hover:scale-105 block text-center">
              Quero um site que vende
            </a>
          </div>

          {/* Automação de Marketing */}
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-[#EEEC26]/50 transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-[#EEEC26] to-[#8F00FF] p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                <Bot className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white">Automação de Marketing</h3>
            </div>
            
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Sistemas inteligentes que trabalham 24/7 para nutrir leads, recuperar vendas perdidas e fidelizar clientes.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-[#8F00FF] rounded-full mr-3"></div>
                <span>Follow-up automático de leads qualificados</span>
              </div>
              <div className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-[#8F00FF] rounded-full mr-3"></div>
                <span>Recuperação de carrinho abandonado</span>
              </div>
              <div className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-[#8F00FF] rounded-full mr-3"></div>
                <span>Sequências de email personalizadas</span>
              </div>
            </div>

            <a href="/agendar" className="w-full bg-gradient-to-r from-[#EEEC26] to-[#8F00FF] text-black py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 block text-center">
              Quero automatizar meu marketing
            </a>
          </div>
        </div>

        {/* Diferencial */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-[#EEEC26]/10 to-[#8F00FF]/10 p-8 rounded-2xl border border-[#EEEC26]/20 max-w-4xl mx-auto">
            <Zap className="w-12 h-12 text-[#EEEC26] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Por que escolher a AstraxLead?</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Não somos mais uma agência genérica. Somos especialistas em performance digital que entregam resultados mensuráveis. 
              Cada estratégia é personalizada, cada campanha é otimizada, cada site é construído para converter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
