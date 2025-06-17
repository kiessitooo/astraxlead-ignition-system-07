
-- Create a table to store appointment bookings
CREATE TABLE public.appointments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  telefone TEXT NOT NULL,
  empresa TEXT NOT NULL,
  data DATE NOT NULL,
  hora TIME NOT NULL,
  desafio TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS) - making it public for now since no authentication is implemented
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;

-- Create policy that allows anyone to insert appointments (public form)
CREATE POLICY "Anyone can create appointments" 
  ON public.appointments 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy that allows reading appointments (you can restrict this later)
CREATE POLICY "Anyone can read appointments" 
  ON public.appointments 
  FOR SELECT 
  USING (true);
