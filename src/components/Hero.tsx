import { ArrowDown, Globe, Smartphone, Zap, Palette, Briefcase, BarChart3 } from 'lucide-react';

const Hero = () => {
  return <section id="home" className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8F00FF]/10 via-transparent to-[#EEEC26]/5"></div>
      
      {/* Digital Grid Texture */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
        backgroundImage: `
            linear-gradient(rgba(143, 0, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(143, 0, 255, 0.3) 1px, transparent 1px)
          `,
        backgroundSize: '50px 50px'
      }}></div>
      </div>

      {/* Purple ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8F00FF]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8F00FF]/15 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left side - Content */}
          <div className="text-left space-y-8 py-[45px]">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span style={{
              textShadow: '0 0 20px rgba(238, 236, 38, 0.5), 0 0 40px rgba(238, 236, 38, 0.3)'
            }} className="block mb-2 text-slate-50">
                A sua empresa vai decolar
              </span>
              <span className="text-[#EEEC26] block mb-2" style={{
              textShadow: '0 0 20px rgba(238, 236, 38, 0.5), 0 0 40px rgba(238, 236, 38, 0.3)'
            }}>
                em 30 dias ou devolvemos
              </span>
              <span className="text-[#EEEC26] block" style={{
              textShadow: '0 0 20px rgba(238, 236, 38, 0.5), 0 0 40px rgba(238, 236, 38, 0.3)'
            }}>
                o dinheiro
              </span>
            </h1>
            
            <p className="text-xl text-white leading-relaxed max-w-lg">
              Nada de promessas vagas. Aquilo que já entregamos para dezenas de negócios pode ser seu.
            </p>

            <div className="pt-4">
              <a href="/agendar" className="inline-block bg-black border-2 border-[#EEEC26] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#EEEC26] hover:text-black transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#EEEC26]/25">
                Agendar conversa
              </a>
            </div>

            <div className="flex items-center gap-8 text-gray-400 text-sm pt-8">
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

          {/* Right side - 3D Cube */}
          <div className="flex justify-center items-center">
            <div className="relative w-80 h-80 perspective-1000">
              <div className="cube-container absolute inset-0 transform-style-preserve-3d animate-spin-slow">
                {/* Front face - Website */}
                <div className="cube-face cube-front bg-gradient-to-br from-[#8F00FF]/20 to-[#EEEC26]/20 border border-[#8F00FF]/30 backdrop-blur-sm flex items-center justify-center">
                  <Globe className="text-[#EEEC26] w-16 h-16" />
                </div>
                
                {/* Back face - Meta Ads */}
                <div className="cube-face cube-back bg-gradient-to-br from-[#8F00FF]/20 to-[#EEEC26]/20 border border-[#8F00FF]/30 backdrop-blur-sm flex items-center justify-center">
                  <Smartphone className="text-[#EEEC26] w-16 h-16" />
                </div>
                
                {/* Right face - Automation */}
                <div className="cube-face cube-right bg-gradient-to-br from-[#8F00FF]/20 to-[#EEEC26]/20 border border-[#8F00FF]/30 backdrop-blur-sm flex items-center justify-center">
                  <Zap className="text-[#EEEC26] w-16 h-16" />
                </div>
                
                {/* Left face - Branding */}
                <div className="cube-face cube-left bg-gradient-to-br from-[#8F00FF]/20 to-[#EEEC26]/20 border border-[#8F00FF]/30 backdrop-blur-sm flex items-center justify-center">
                  <Palette className="text-[#EEEC26] w-16 h-16" />
                </div>
                
                {/* Top face */}
                <div className="cube-face cube-top bg-gradient-to-br from-[#8F00FF]/20 to-[#EEEC26]/20 border border-[#8F00FF]/30 backdrop-blur-sm flex items-center justify-center">
                  <Briefcase className="text-[#EEEC26] w-16 h-16" />
                </div>
                
                {/* Bottom face */}
                <div className="cube-face cube-bottom bg-gradient-to-br from-[#8F00FF]/20 to-[#EEEC26]/20 border border-[#8F00FF]/30 backdrop-blur-sm flex items-center justify-center">
                  <BarChart3 className="text-[#EEEC26] w-16 h-16" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-[#EEEC26] w-6 h-6" />
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        
        .cube-container {
          animation: rotateCube 20s infinite linear;
        }
        
        .cube-face {
          position: absolute;
          width: 200px;
          height: 200px;
          border-radius: 12px;
        }
        
        .cube-front {
          transform: rotateY(0deg) translateZ(100px);
        }
        
        .cube-back {
          transform: rotateY(180deg) translateZ(100px);
        }
        
        .cube-right {
          transform: rotateY(90deg) translateZ(100px);
        }
        
        .cube-left {
          transform: rotateY(-90deg) translateZ(100px);
        }
        
        .cube-top {
          transform: rotateX(90deg) translateZ(100px);
        }
        
        .cube-bottom {
          transform: rotateX(-90deg) translateZ(100px);
        }
        
        @keyframes rotateCube {
          0% {
            transform: rotateX(0deg) rotateY(0deg);
          }
          100% {
            transform: rotateX(360deg) rotateY(360deg);
          }
        }
      `}</style>
    </section>;
};
export default Hero;
