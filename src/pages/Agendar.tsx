import { useState } from 'react';
import { Calendar as CalendarIcon, Clock, User, Phone, Mail, Building, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { cn } from '@/lib/utils';

const Agendar = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    data: '',
    hora: '',
    desafio: '',
    funcao: '',
    meta_clientes_mes: '',
    forma_divulgacao: '',
    investimento: ''
  });
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('appointments')
        .insert([
          {
            nome: formData.nome,
            email: formData.email,
            telefone: formData.telefone,
            empresa: formData.empresa,
            data: formData.data,
            hora: formData.hora,
            desafio: formData.desafio,
            funcao: formData.funcao,
            meta_clientes_mes: parseInt(formData.meta_clientes_mes) || null,
            forma_divulgacao: formData.forma_divulgacao,
            investimento: formData.investimento
          }
        ]);

      if (error) throw error;

      toast({
        title: "Agendamento realizado com sucesso!",
        description: "Entraremos em contato em breve para confirmar sua consulta.",
      });

      setFormData({
        nome: '',
        email: '',
        telefone: '',
        empresa: '',
        data: '',
        hora: '',
        desafio: '',
        funcao: '',
        meta_clientes_mes: '',
        forma_divulgacao: '',
        investimento: ''
      });
      setSelectedDate(undefined);
    } catch (error) {
      console.error('Error saving appointment:', error);
      toast({
        title: "Erro ao agendar",
        description: "Ocorreu um erro ao salvar seu agendamento. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) {
      setFormData({
        ...formData,
        data: format(date, 'yyyy-MM-dd')
      });
    }
  };

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', 
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
    '20:00', '20:30', '21:00'
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-[#EEEC26] hover:text-[#EEEC26]/90 mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Voltar ao site
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Reserve seu <span className="text-[#EEEC26]">Diagnóstico</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              45 minutos que podem transformar seu negócio. Vamos identificar exatamente onde estão as oportunidades perdidas.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <CalendarIcon className="w-6 h-6 text-[#EEEC26] mr-3" />
                Informações da Consulta
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center">
                      <User className="w-4 h-4 text-[#8F00FF] mr-2" />
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#EEEC26] focus:outline-none transition-colors"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center">
                      <Mail className="w-4 h-4 text-[#8F00FF] mr-2" />
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#EEEC26] focus:outline-none transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center">
                      <Phone className="w-4 h-4 text-[#8F00FF] mr-2" />
                      WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#EEEC26] focus:outline-none transition-colors"
                      placeholder="+244 XXX XXX XXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center">
                      <Building className="w-4 h-4 text-[#8F00FF] mr-2" />
                      Nome da Empresa
                    </label>
                    <input
                      type="text"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#EEEC26] focus:outline-none transition-colors"
                      placeholder="Sua empresa"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center">
                      <CalendarIcon className="w-4 h-4 text-[#8F00FF] mr-2" />
                      Data Preferida
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal bg-gray-800 border-gray-700 text-white hover:bg-gray-700 hover:text-white",
                            !selectedDate && "text-gray-400"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {selectedDate ? format(selectedDate, "PPP", { locale: ptBR }) : <span>Selecione uma data</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={handleDateSelect}
                          disabled={(date) =>
                            date < new Date() || date.getDay() === 0 || date.getDay() === 6
                          }
                          initialFocus
                          className="pointer-events-auto bg-white text-black"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center">
                      <Clock className="w-4 h-4 text-[#8F00FF] mr-2" />
                      Horário
                    </label>
                    <select
                      name="hora"
                      value={formData.hora}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#EEEC26] focus:outline-none transition-colors"
                    >
                      <option value="">Selecione o horário</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Você é o dono do negócio ou o responsável por atrair clientes?
                  </label>
                  <select
                    name="funcao"
                    value={formData.funcao}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#EEEC26] focus:outline-none transition-colors"
                  >
                    <option value="">Selecione sua função</option>
                    <option value="dono">Dono do negócio</option>
                    <option value="responsavel">Responsável por atrair clientes</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Quantos novos clientes por mês você gostaria de atrair realisticamente?
                    </label>
                    <input
                      type="number"
                      name="meta_clientes_mes"
                      value={formData.meta_clientes_mes}
                      onChange={handleChange}
                      required
                      min="1"
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#EEEC26] focus:outline-none transition-colors"
                      placeholder="Ex: 20"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Quanto estaria disposto a investir para chegar a meta de novos clientes?
                    </label>
                    <select
                      name="investimento"
                      value={formData.investimento}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#EEEC26] focus:outline-none transition-colors"
                    >
                      <option value="">Selecione o valor</option>
                      <option value="ate_5000">Até R$ 5.000</option>
                      <option value="5000_10000">R$ 5.000 - R$ 10.000</option>
                      <option value="10000_20000">R$ 10.000 - R$ 20.000</option>
                      <option value="20000_50000">R$ 20.000 - R$ 50.000</option>
                      <option value="acima_50000">Acima de R$ 50.000</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Hoje qual é a principal forma de divulgação do seu negócio?
                  </label>
                  <input
                    type="text"
                    name="forma_divulgacao"
                    value={formData.forma_divulgacao}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#EEEC26] focus:outline-none transition-colors"
                    placeholder="Ex: Redes sociais, indicação, Google Ads..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Qual o principal desafio do seu negócio agora?
                  </label>
                  <textarea
                    name="desafio"
                    value={formData.desafio}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#EEEC26] focus:outline-none transition-colors"
                    placeholder="Descreva brevemente seu maior desafio..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#EEEC26] text-black py-4 rounded-lg text-lg font-semibold hover:bg-[#EEEC26]/90 transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? 'Agendando...' : 'Agendar Diagnóstico Gratuito'}
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-[#EEEC26]/10 to-[#8F00FF]/10 p-6 rounded-xl border border-[#EEEC26]/20">
                <h3 className="text-xl font-semibold text-white mb-4">O que você recebe no diagnóstico:</h3>
                <div className="space-y-3">
                  <div className="flex items-start text-gray-300">
                    <div className="w-2 h-2 bg-[#EEEC26] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Análise completa da sua presença digital atual</span>
                  </div>
                  <div className="flex items-start text-gray-300">
                    <div className="w-2 h-2 bg-[#8F00FF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Identificação de oportunidades perdidas</span>
                  </div>
                  <div className="flex items-start text-gray-300">
                    <div className="w-2 h-2 bg-[#EEEC26] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Estratégia personalizada para seu negócio</span>
                  </div>
                  <div className="flex items-start text-gray-300">
                    <div className="w-2 h-2 bg-[#8F00FF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Plano de ação para os próximos 90 dias</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-3">Como funciona:</h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <p>📅 <strong>Duração:</strong> 45 minutos via Google Meet</p>
                  <p>🎯 <strong>Foco:</strong> Identificar gargalos e oportunidades</p>
                  <p>💡 <strong>Resultado:</strong> Estratégia clara para crescer</p>
                  <p>🔒 <strong>Compromisso:</strong> Zero pressão de venda</p>
                </div>
              </div>

              <div className="text-center p-6 bg-gradient-to-r from-[#8F00FF]/20 to-[#EEEC26]/20 rounded-xl border border-[#8F00FF]/30">
                <p className="text-[#EEEC26] font-semibold">
                  "Em 45 minutos você vai ter mais clareza sobre seu negócio do que nos últimos 6 meses."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agendar;
