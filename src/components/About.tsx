import { Heart, Target, Zap } from 'lucide-react';
const About = () => {
  return <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Mais que uma agência,
                <span className="text-[#EEEC26] block">um parceiro de crescimento</span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                A AstraxLead nasceu da frustração com agências que prometem muito e entregam pouco. 
                Decidimos fazer diferente: foco total em performance, transparência absoluta e 
                resultados que você pode medir.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#EEEC26] p-2 rounded-lg mr-4 mt-1">
                    <Target className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Nossa Missão</h4>
                    <p className="text-gray-300">
                      Democratizar o acesso a estratégias digitais de alta performance, 
                      ajudando negócios de todos os tamanhos a crescerem online.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#8F00FF] p-2 rounded-lg mr-4 mt-1">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Por que fazemos</h4>
                    <p className="text-gray-300">
                      Acreditamos que todo negócio merece ter uma presença digital que realmente funciona. 
                      Sem enrolação, sem promessas vazias, só resultados.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#EEEC26] p-2 rounded-lg mr-4 mt-1">
                    <Heart className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Nosso Compromisso</h4>
                    <p className="text-gray-300">
                      Transparência total, comunicação direta e foco obsessivo nos seus resultados. 
                      Seu sucesso é literalmente o nosso sucesso.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#EEEC26]/20 to-[#8F00FF]/20 p-8 rounded-2xl border border-[#EEEC26]/30">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center p-4 bg-black px-[30px]">
                    <img src="/lovable-uploads/fdcdf8ec-9feb-4830-8411-9d0de810e92d.png" alt="AstraxLead Logo" className="w-full h-full object-scale-down" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">AstraxLead Team</h3>
                  <p className="text-gray-300 mb-6">
                    Uma equipe de especialistas apaixonados por performance digital e resultados reais.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[#EEEC26]">5+</div>
                      <div className="text-sm text-gray-400">Anos de experiência</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#8F00FF]">50+</div>
                      <div className="text-sm text-gray-400">Projetos entregues</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#EEEC26]">KZ 4M+</div>
                      <div className="text-sm text-gray-400">Em vendas geradas</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#8F00FF]">100%</div>
                      <div className="text-sm text-gray-400">Foco em resultados</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;