
const Testimonials = () => {
  const testimonials = [{
    quote: "Achei que o processo de criação do site ia ser demorado, mas fui surpreendida. Em poucos dias a Astrax entregou uma landing que captou mais clientes do que eu consegui no mês inteiro anterior.",
    name: "Janeth Neves",
    company: "BelezaJan",
    sector: "Estética e Beleza",
    role: "Fundadora",
    image: "/lovable-uploads/a5f7271e-1bd4-44ae-80e5-d028e8681638.png"
  }, {
    quote: "No início fiquei desconfiado porque já tinha tentado anúncios antes e só perdi dinheiro. Mas com a Astrax, em 12 dias, vendemos mais do que nos dois meses anteriores.",
    name: "Carlos Fontes",
    company: "Cards Angola",
    sector: "E-commerce",
    role: "CEO",
    image: "/lovable-uploads/467c84bd-50c7-4d6e-b121-31a6d149a19f.png"
  }, {
    quote: "Demorei a entender como a automação podia ajudar meu negócio. Hoje não sei como vivia sem. A Astrax me ajudou a recuperar mais de 30% dos orçamentos esquecidos.",
    name: "Evânia Baptista",
    company: "Gilas Clean",
    sector: "Serviços de Limpeza",
    role: "Dona",
    image: "/lovable-uploads/0ae01c43-b2a0-4dae-b1b9-d85978ad6055.png"
  }, {
    quote: "Achei que o design ia ser mais do mesmo, como todo site. Mas o que entregaram foi algo que realmente passa profissionalismo e posiciona minha marca do jeito certo.",
    name: "Milton Dias",
    company: "DripLink Studio",
    sector: "Educação Criativa",
    role: "Fundador",
    image: "/lovable-uploads/56a408b2-a09c-47ff-9b28-a65f25f865da.png"
  }];
  
  return <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6 md:text-4xl">
            O quão bom seria para vocês <span className="text-[#EEEC26]">colherem este tipo de resultados?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-[#8F00FF]/50 transition-all duration-300 group hover:shadow-xl hover:shadow-[#8F00FF]/10">
              <div className="mb-6">
                <div className="text-[#EEEC26] text-4xl mb-4">"</div>
                <p className="text-gray-300 text-lg leading-relaxed italic">
                  {testimonial.quote}
                </p>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#8F00FF] to-[#EEEC26] rounded-full flex items-center justify-center mr-4 p-0.5">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-white font-semibold">
                    {testimonial.name}
                  </div>
                  <div className="text-[#8F00FF] text-sm">
                    {testimonial.role} da {testimonial.company}
                  </div>
                  <div className="text-gray-400 text-xs">
                    {testimonial.sector}
                  </div>
                </div>
              </div>
            </div>)}
        </div>

        <div className="text-center">
          <p className="text-2xl font-semibold text-white mb-4">
            Você pode ser o próximo. <span className="text-[#EEEC26]">Comece agora.</span>
          </p>
        </div>
      </div>
    </section>;
};

export default Testimonials;
