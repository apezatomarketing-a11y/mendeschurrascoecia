-- Mendes Churrascaria e Cia - Supabase Schema
-- Execute this SQL in your Supabase SQL Editor

-- Create tables for content management

-- Services Table
CREATE TABLE IF NOT EXISTS services (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT,
  color_gradient TEXT,
  display_order INT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Testimonials Table
CREATE TABLE IF NOT EXISTS testimonials (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  event TEXT NOT NULL,
  text TEXT NOT NULL,
  rating INT CHECK (rating >= 1 AND rating <= 5),
  display_order INT DEFAULT 0,
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Contact Submissions Table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  event_date DATE,
  number_of_guests INT,
  message TEXT,
  service_type TEXT,
  budget_range TEXT,
  source TEXT DEFAULT 'website',
  status TEXT DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Regions Table
CREATE TABLE IF NOT EXISTS regions (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  description TEXT,
  cities TEXT[],
  active BOOLEAN DEFAULT TRUE,
  display_order INT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Differentials Table
CREATE TABLE IF NOT EXISTS differentials (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT,
  is_featured BOOLEAN DEFAULT FALSE,
  display_order INT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Settings Table
CREATE TABLE IF NOT EXISTS settings (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  key TEXT UNIQUE NOT NULL,
  value TEXT,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default services
INSERT INTO services (title, description, icon, color_gradient, display_order) VALUES
  ('Buffet de Churrasco Completo', 'Carnes na brasa selecionadas e acompanhamentos variados, preparados com excelência.', 'Flame', 'from-red-600 to-orange-500', 1),
  ('Bebidas Inclusas', 'Bebidas conforme o pacote escolhido para sua celebração.', 'Wine', 'from-yellow-600 to-orange-500', 2),
  ('Estrutura Completa', 'Pratos, copos, talheres e toda a estrutura necessária para seu evento.', 'UtensilsCrossed', 'from-gray-600 to-gray-500', 3),
  ('Equipe Opcional', 'Garçons e copeiras para um atendimento impecável e profissional.', 'Users', 'from-red-700 to-red-600', 4);

-- Insert default testimonials
INSERT INTO testimonials (name, event, text, rating, display_order) VALUES
  ('Carlos Silva', 'Casamento - 150 convidados', 'Excelente atendimento! A comida estava impecável e a equipe muito profissional.', 5, 1),
  ('Fernanda Costa', 'Aniversário - 80 convidados', 'Cascata de chocolate foi o destaque! Todos os convidados amaram. Recomendo!', 5, 2),
  ('Roberto Mendes', 'Confraternização Empresarial - 200 convidados', 'Profissionalismo de ponta a ponta. Voltaremos a contratar com certeza.', 5, 3);

-- Insert default regions
INSERT INTO regions (name, description, cities, display_order) VALUES
  ('Vale do Paraíba', 'Região atendida com excelência', ARRAY['São José dos Campos', 'Jacareí', 'Caçapava', 'Pindamonhangaba'], 1),
  ('Litoral Norte', 'Atendimento premium na região costeira', ARRAY['Caraguatatuba', 'Ilhabela', 'São Sebastião', 'Ubatuba'], 2);

-- Insert default differentials
INSERT INTO differentials (title, description, icon, is_featured, display_order) VALUES
  ('Atendimento Próximo e Humano', 'Tratamos cada cliente como parte da família, com dedicação total.', 'Heart', FALSE, 1),
  ('Experiência Real no Ramo', 'Fundada por militar aposentado com anos de experiência alimentícia.', 'Award', FALSE, 2),
  ('Organização e Pontualidade', 'Disciplina militar aplicada à perfeição em cada detalhe.', 'Clock', FALSE, 3),
  ('Serviço Completo', 'Você não se preocupa com nada, cuidamos de tudo.', 'CheckCircle', FALSE, 4),
  ('Cascata de Chocolate - Cortesia', 'Em festas de debutantes com mais de 150 convidados, oferecemos cascata de chocolate como cortesia especial.', 'Sparkles', TRUE, 5);

-- Insert default settings
INSERT INTO settings (key, value, description) VALUES
  ('company_name', 'Mendes Churrascaria e Cia', 'Nome da empresa'),
  ('whatsapp_number', '5512981728313', 'Número de WhatsApp para contato'),
  ('instagram_handle', '@mendes_churrascoecia_oficial', 'Handle do Instagram'),
  ('min_guests', '35', 'Número mínimo de convidados'),
  ('max_guests', '300', 'Número máximo de convidados'),
  ('deposit_percentage', '30', 'Percentual de sinal para reserva'),
  ('service_regions', 'Vale do Paraíba, Litoral Norte', 'Regiões atendidas'),
  ('company_description', 'A Mendes Churrasco & Cia nasceu da paixão pela gastronomia e pelo prazer de servir bem. Fundada por um militar aposentado com anos de experiência no ramo alimentício, a empresa une disciplina, organização e amor pela cozinha para entregar experiências únicas em cada evento.', 'Descrição da empresa');

-- Enable Row Level Security (RLS)
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE regions ENABLE ROW LEVEL SECURITY;
ALTER TABLE differentials ENABLE ROW LEVEL SECURITY;
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read on services" ON services FOR SELECT USING (true);
CREATE POLICY "Allow public read on testimonials" ON testimonials FOR SELECT USING (active = true);
CREATE POLICY "Allow public read on regions" ON regions FOR SELECT USING (active = true);
CREATE POLICY "Allow public read on differentials" ON differentials FOR SELECT USING (true);
CREATE POLICY "Allow public read on settings" ON settings FOR SELECT USING (true);

-- Allow anyone to insert contact submissions
CREATE POLICY "Allow public insert on contact_submissions" ON contact_submissions FOR INSERT WITH CHECK (true);

-- Create indexes for performance
CREATE INDEX idx_services_order ON services(display_order);
CREATE INDEX idx_testimonials_order ON testimonials(display_order);
CREATE INDEX idx_testimonials_active ON testimonials(active);
CREATE INDEX idx_regions_order ON regions(display_order);
CREATE INDEX idx_differentials_order ON differentials(display_order);
CREATE INDEX idx_contact_status ON contact_submissions(status);
CREATE INDEX idx_contact_created ON contact_submissions(created_at);

-- Storage buckets are already created: images, videos, documents
-- Set public access for images and videos buckets if needed

-- Grant permissions
GRANT SELECT ON services TO anon;
GRANT SELECT ON testimonials TO anon;
GRANT SELECT ON regions TO anon;
GRANT SELECT ON differentials TO anon;
GRANT SELECT ON settings TO anon;
GRANT INSERT ON contact_submissions TO anon;
