import { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, Building, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const Agendar = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    data: '',
    hora: '',
    desafio: ''
  });
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
            desafio: formData.desafio
          }
        ]);

      if (error) throw error;

      toast({
        title: "Agendamento realizado com sucesso!",
        description: "Entraremos em contato em breve para confirmar sua consulta.",
      });

      // Reset form
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        empresa: '',
        data: '',
        hora: '',
        desafio: ''
      });
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

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'
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
            {/* Left side - Form */}
            <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Calendar className="w-6 h-6 text-[#EEEC26] mr-3" />
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
                      <Calendar className="w-4 h-4 text-[#8F00FF] mr-2" />
                      Data Preferida
                    </label>
                    <input
                      type="date"
                      name="data"
                      value={formData.data}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#EEEC26] focus:outline-none transition-colors"
                    />
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

            {/* Right side - Benefits */}
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
mover página agendar para raiz
