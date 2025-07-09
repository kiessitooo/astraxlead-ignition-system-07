-- Add new columns to appointments table
ALTER TABLE public.appointments 
ADD COLUMN funcao TEXT,
ADD COLUMN meta_clientes_mes INTEGER,
ADD COLUMN forma_divulgacao TEXT,
ADD COLUMN investimento TEXT;