
const SocialProof = () => {
  const clients = [
    { name: "TechSolutions", logo: "TS" },
    { name: "MarketPro", logo: "MP" },
    { name: "DigitalForce", logo: "DF" },
    { name: "BrandStudio", logo: "BS" },
    { name: "InnovateCorp", logo: "IC" },
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-xl text-gray-400 mb-4">Empresas que confiam na AstraxLead</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clients.map((client, index) => (
              <div 
                key={index}
                className="flex items-center justify-center w-20 h-20 bg-gray-800 rounded-lg border border-gray-700 hover:border-[#EEEC26]/50 transition-all duration-300 group"
              >
                <span className="text-2xl font-bold text-gray-400 group-hover:text-[#EEEC26] transition-colors duration-300">
                  {client.logo}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#EEEC26] mb-2">+200%</div>
            <div className="text-gray-300">Aumento médio em leads</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#8F00FF] mb-2">4.8x</div>
            <div className="text-gray-300">ROAS médio das campanhas</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#EEEC26] mb-2">50+</div>
            <div className="text-gray-300">Projetos entregues</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
