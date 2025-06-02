
import { TrendingUp, Users, DollarSign } from 'lucide-react';

const CaseStudies = () => {
  const cases = [
    {
      title: "E-commerce de Moda",
      description: "Transformamos um pequeno negócio local em uma operação nacional através de campanhas estratégicas no Meta Ads.",
      results: [
        { metric: "ROAS", value: "6.2x", icon: DollarSign },
        { metric: "Leads", value: "+340%", icon: TrendingUp },
        { metric: "Alcance", value: "2.1M", icon: Users }
      ],
      color: "from-[#EEEC26]/20 to-[#EEEC26]/5"
    },
    {
      title: "Consultoria Empresarial",
      description: "Website completo + Google Ads resultaram em um funil de vendas automatizado que gera leads constantemente.",
      results: [
        { metric: "Conversão", value: "+180%", icon: TrendingUp },
        { metric: "CTR", value: "8.4%", icon: Users },
        { metric: "CPA", value: "-65%", icon: DollarSign }
      ],
      color: "from-[#8F00FF]/20 to-[#8F00FF]/5"
    },
    {
      title: "SaaS B2B",
      description: "Estratégia multicanal que combinou LinkedIn Ads, Google Ads e um site otimizado para demonstrações do produto.",
      results: [
        { metric: "Demos", value: "+280%", icon: TrendingUp },
        { metric: "MRR", value: "R$ 180k", icon: DollarSign },
        { metric: "LTV", value: "+150%", icon: Users }
      ],
      color: "from-[#EEEC26]/10 to-[#8F00FF]/10"
    }
  ];

  return (
    <section id="cases" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Casos de <span className="text-[#EEEC26]">Sucesso</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Resultados reais de clientes reais. Cada projeto é uma prova de que nossa metodologia funciona.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {cases.map((case_, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${case_.color} p-8 rounded-2xl border border-gray-700 hover:border-[#EEEC26]/50 transition-all duration-300 group hover:scale-105`}
            >
              <h3 className="text-2xl font-bold text-white mb-4">{case_.title}</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">{case_.description}</p>
              
              <div className="space-y-4">
                {case_.results.map((result, resultIndex) => (
                  <div key={resultIndex} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <result.icon className="w-5 h-5 text-[#EEEC26] mr-3" />
                      <span className="text-gray-300">{result.metric}</span>
                    </div>
                    <span className="text-2xl font-bold text-white">{result.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <button className="text-[#8F00FF] hover:text-[#EEEC26] transition-colors duration-300 font-semibold">
                  Ver estudo completo →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-[#EEEC26] text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#EEEC26]/90 transition-all duration-300 hover:scale-105">
            Quero resultados assim para meu negócio
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
