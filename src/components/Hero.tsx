import { ArrowDown } from 'lucide-react';
const Hero = () => {
  return <section id="home" className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8F00FF]/10 via-transparent to-[#EEEC26]/5"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#8F00FF]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#EEEC26]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight md:text-5xl px-0 text-center py-[20px] mx-0 my-[50px]">
            Sites e Anúncios que
            <span className="text-[#EEEC26] block animate-pulse">vendem enquanto</span>
            <span className="text-white">você vive</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">Nada de promessas vagas. Aquilo que já entregamos para dezenas de negócios pode ser seu.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-[#EEEC26] text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#EEEC26]/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#EEEC26]/25">Agendar Conversa(webconferência)</button>
            <button className="border-2 border-[#8F00FF] text-[#8F00FF] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#8F00FF] hover:text-white transition-all duration-300">
              Ver Casos de Sucesso
            </button>
          </div>

          <div className="flex justify-center items-center gap-8 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#EEEC26] rounded-full"></div>
              <span>Meta Ads Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#8F00FF] rounded-full"></div>
              <span>Google Partner</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#EEEC26] rounded-full"></div>
              <span>+50 projetos entregues</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-[#EEEC26] w-6 h-6" />
        </div>
      </div>
    </section>;
};
export default Hero;