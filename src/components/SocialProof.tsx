const SocialProof = () => {
  const clients = [{
    name: "TechSolutions",
    logo: "TS"
  }, {
    name: "MarketPro",
    logo: "MP"
  }, {
    name: "DigitalForce",
    logo: "DF"
  }, {
    name: "BrandStudio",
    logo: "BS"
  }, {
    name: "InnovateCorp",
    logo: "IC"
  }];
  return <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          
          
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#EEEC26] mb-2">+100%</div>
            <div className="text-gray-300">Aumento médio em leads</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#8F00FF] mb-2">2.8x</div>
            <div className="text-gray-300">ROAS médio das campanhas</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#EEEC26] mb-2">50+</div>
            <div className="text-gray-300">Projetos entregues</div>
          </div>
        </div>
      </div>
    </section>;
};
export default SocialProof;