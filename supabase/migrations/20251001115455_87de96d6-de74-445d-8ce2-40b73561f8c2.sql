-- Create appointments table
CREATE TABLE public.appointments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  telefone TEXT NOT NULL,
  empresa TEXT NOT NULL,
  funcao TEXT,
  desafio TEXT,
  meta_clientes_mes INTEGER,
  forma_divulgacao TEXT,
  investimento TEXT,
  data TEXT NOT NULL,
  hora TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert appointments (public booking)
CREATE POLICY "Anyone can create appointments"
ON public.appointments
FOR INSERT
WITH CHECK (true);

-- Only authenticated users can view appointments (admin access)
CREATE POLICY "Authenticated users can view appointments"
ON public.appointments
FOR SELECT
USING (auth.role() = 'authenticated');