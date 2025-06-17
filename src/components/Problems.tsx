import { AlertTriangle, Users, Target, Calendar, Globe, Repeat, Heart, DollarSign, Star } from 'lucide-react';
const Problems = () => {
  const problems = [{
    icon: Users,
    title: "Dependência de indicações",
    description: "Seu crescimento depende de alguém lembrar de você — e isso não é estratégia."
  }, {
    icon: AlertTriangle,
    title: "Atendimento sobrecarregado",
    description: "Clientes perdidos porque ninguém consegue responder todo mundo a tempo."
  }, {
    icon: Target,
    title: "Negócio genérico",
    description: "Se parece com todo mundo, por que alguém te escolheria?"
  }, {
    icon: Calendar,
    title: "Agendamento ineficiente",
    description: "Trocar mensagens no WhatsApp não é sistema de agendamento."
  }, {
    icon: Globe,
    title: "Sem autoridade online",
    description: "Se nem o seu Instagram ou site mostram força, como querem confiar no seu serviço?"
  }, {
    icon: Repeat,
    title: "Sem remarketing",
    description: "As pessoas visitam seu perfil e somem. E você nem sabe."
  }, {
    icon: Heart,
    title: "Sem canal de fidelização",
    description: "Todo mês começa do zero porque ninguém volta."
  }, {
    icon: DollarSign,
    title: "Pouca diferenciação",
    description: "Se o seu concorrente muda o preço, o cliente vai com ele."
  }, {
    icon: Star,
    title: "Falta de credibilidade digital",
    description: "Site desatualizado, redes mal cuidadas... e você quer cobrar premium?"
  }];
  return <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Se nada mudar, o <span className="text-red-500">problema vai continuar.</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Você pode até ter um bom produto. Mas se as engrenagens do seu marketing estão falhadas, o crescimento trava. 
            Veja se reconhece algum desses sintomas:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
          {problems.map((problem, index) => {
          const IconComponent = problem.icon;
          return <div key={index} className="bg-gray-800/30 p-6 rounded-xl border border-red-900/30 hover:border-red-500/50 transition-all duration-300 group hover:bg-gray-800/50 animate-fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="flex items-start mb-4">
                  <div className="bg-red-500/20 p-3 rounded-lg mr-4 group-hover:bg-red-500/30 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-red-400 group-hover:text-red-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-100 transition-colors">
                      {problem.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {problem.description}
                </p>
                
                {/* Warning indicator */}
                <div className="mt-4 flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-2"></div>
                  <span className="text-xs text-red-400 font-medium">PROBLEMA ATIVO</span>
                </div>
              </div>;
        })}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-red-900/20 to-gray-900/20 p-8 rounded-2xl border border-red-900/30 max-w-4xl mx-auto">
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              Ignorar esses problemas custa caro. Resolver, com a AstraxLead, é mais simples do que parece.
            </p>
            <a href="/agendar" className="inline-flex items-center bg-[#EEEC26] text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#EEEC26]/90 transition-all duration-300 hover:scale-105 shadow-lg"> Quero ver como resolvem isso</a>
          </div>
        </div>
      </div>
    </section>;
};
export default Problems;