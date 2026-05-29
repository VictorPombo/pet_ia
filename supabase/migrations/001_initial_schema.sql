-- ============================================
-- CLOSEPET DATABASE SCHEMA
-- Migration: 001_initial_schema
-- Todas as 14 tabelas com relações completas
-- ============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- 1. USERS
-- ============================================
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  avatar_url TEXT,
  plan VARCHAR(20) DEFAULT 'free' CHECK (plan IN ('free', 'premium', 'family')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_users_email ON users(email);

-- ============================================
-- 2. PETS
-- ============================================
CREATE TABLE pets (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  species VARCHAR(10) DEFAULT 'dog' CHECK (species IN ('dog', 'cat')),
  breed VARCHAR(255),
  birth_date DATE,
  gender VARCHAR(10) CHECK (gender IN ('male', 'female')),
  neutered BOOLEAN DEFAULT FALSE,
  weight_kg DECIMAL(5,2),
  activity_level VARCHAR(20) CHECK (activity_level IN ('low', 'medium', 'high', 'very_high')),
  blood_type VARCHAR(50),
  photo_url TEXT,
  allergies TEXT,
  diseases TEXT,
  medications TEXT,
  food_brand VARCHAR(255),
  food_amount_grams INTEGER,
  food_type VARCHAR(255),
  vet_name VARCHAR(255),
  vet_phone VARCHAR(50),
  health_plan VARCHAR(255),
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_pets_user_id ON pets(user_id);

-- ============================================
-- 3. HEALTH RECORDS
-- ============================================
CREATE TABLE health_records (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  pet_id UUID NOT NULL REFERENCES pets(id) ON DELETE CASCADE,
  record_date DATE NOT NULL,
  weight_kg DECIMAL(5,2),
  water_ml INTEGER,
  food_grams INTEGER,
  stool_quality VARCHAR(20) CHECK (stool_quality IN ('normal', 'soft', 'hard', 'liquid', 'blood')),
  sleep_hours DECIMAL(4,1),
  activity_minutes INTEGER,
  symptoms TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_health_records_pet_id ON health_records(pet_id);
CREATE INDEX idx_health_records_date ON health_records(record_date DESC);

-- ============================================
-- 4. VACCINATIONS
-- ============================================
CREATE TABLE vaccinations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  pet_id UUID NOT NULL REFERENCES pets(id) ON DELETE CASCADE,
  vaccine_name VARCHAR(255) NOT NULL,
  applied_date DATE NOT NULL,
  next_dose_date DATE,
  vet_name VARCHAR(255),
  batch_number VARCHAR(100),
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_vaccinations_pet_id ON vaccinations(pet_id);
CREATE INDEX idx_vaccinations_next_dose ON vaccinations(next_dose_date);

-- ============================================
-- 5. EXPENSES
-- ============================================
CREATE TABLE expenses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  pet_id UUID NOT NULL REFERENCES pets(id) ON DELETE CASCADE,
  category VARCHAR(20) NOT NULL CHECK (category IN ('food', 'vet', 'medication', 'grooming', 'accessories', 'other')),
  description VARCHAR(500) NOT NULL,
  amount_cents INTEGER NOT NULL,
  expense_date DATE NOT NULL,
  recurring BOOLEAN DEFAULT FALSE,
  recurring_months INTEGER,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_expenses_pet_id ON expenses(pet_id);
CREATE INDEX idx_expenses_date ON expenses(expense_date DESC);
CREATE INDEX idx_expenses_category ON expenses(category);

-- ============================================
-- 6. ROUTINES
-- ============================================
CREATE TABLE routines (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  pet_id UUID NOT NULL REFERENCES pets(id) ON DELETE CASCADE,
  time TIME NOT NULL,
  activity VARCHAR(255) NOT NULL,
  category VARCHAR(20) NOT NULL CHECK (category IN ('walk', 'food', 'rest', 'play', 'training', 'grooming', 'medication')),
  duration_minutes INTEGER,
  days_of_week VARCHAR(100),
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_routines_pet_id ON routines(pet_id);

-- ============================================
-- 7. ALERTS
-- ============================================
CREATE TABLE alerts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  pet_id UUID NOT NULL REFERENCES pets(id) ON DELETE CASCADE,
  alert_type VARCHAR(30) NOT NULL CHECK (alert_type IN ('vaccine', 'medication', 'food_running_out', 'grooming', 'vet_appointment', 'flea_tick', 'routine')),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  due_date DATE,
  due_time TIME,
  completed BOOLEAN DEFAULT FALSE,
  priority VARCHAR(10) DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
  source_table VARCHAR(100),
  source_id UUID,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_alerts_pet_id ON alerts(pet_id);
CREATE INDEX idx_alerts_due_date ON alerts(due_date);
CREATE INDEX idx_alerts_completed ON alerts(completed);

-- ============================================
-- 8. TIMELINE EVENTS
-- ============================================
CREATE TABLE timeline_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  pet_id UUID NOT NULL REFERENCES pets(id) ON DELETE CASCADE,
  event_type VARCHAR(30) NOT NULL CHECK (event_type IN ('photo', 'birthday', 'weight_change', 'vaccine', 'milestone', 'vet_visit', 'achievement')),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  event_date DATE NOT NULL,
  photo_url TEXT,
  data_json JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_timeline_pet_id ON timeline_events(pet_id);
CREATE INDEX idx_timeline_date ON timeline_events(event_date DESC);

-- ============================================
-- 9. AI CONVERSATIONS
-- ============================================
CREATE TABLE ai_conversations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  pet_id UUID NOT NULL REFERENCES pets(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  context VARCHAR(30) DEFAULT 'general' CHECK (context IN ('general', 'health', 'training', 'behavior', 'nutrition', 'emergency')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_ai_conversations_user ON ai_conversations(user_id);
CREATE INDEX idx_ai_conversations_pet ON ai_conversations(pet_id);

-- ============================================
-- 10. AI MESSAGES
-- ============================================
CREATE TABLE ai_messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  conversation_id UUID NOT NULL REFERENCES ai_conversations(id) ON DELETE CASCADE,
  role VARCHAR(10) NOT NULL CHECK (role IN ('user', 'assistant')),
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_ai_messages_conversation ON ai_messages(conversation_id);

-- ============================================
-- 11. TRAINING PLANS
-- ============================================
CREATE TABLE training_plans (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  pet_id UUID NOT NULL REFERENCES pets(id) ON DELETE CASCADE,
  plan_type VARCHAR(20) NOT NULL CHECK (plan_type IN ('basic', 'behavior', 'walk', 'advanced')),
  started_at DATE,
  completed_at DATE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_training_plans_pet ON training_plans(pet_id);

-- ============================================
-- 12. TRAINING LESSONS
-- ============================================
CREATE TABLE training_lessons (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  plan_id UUID NOT NULL REFERENCES training_plans(id) ON DELETE CASCADE,
  lesson_name VARCHAR(255) NOT NULL,
  description TEXT,
  duration_minutes INTEGER,
  difficulty VARCHAR(10) CHECK (difficulty IN ('easy', 'medium', 'hard')),
  sort_order INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_training_lessons_plan ON training_lessons(plan_id);

-- ============================================
-- 13. TRAINING PROGRESS
-- ============================================
CREATE TABLE training_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  pet_id UUID NOT NULL REFERENCES pets(id) ON DELETE CASCADE,
  lesson_id UUID NOT NULL REFERENCES training_lessons(id) ON DELETE CASCADE,
  status VARCHAR(20) DEFAULT 'not_started' CHECK (status IN ('not_started', 'in_progress', 'completed')),
  completed_at TIMESTAMPTZ,
  practice_count INTEGER DEFAULT 0,
  time_spent_minutes INTEGER DEFAULT 0,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_training_progress_pet ON training_progress(pet_id);
CREATE INDEX idx_training_progress_lesson ON training_progress(lesson_id);

-- ============================================
-- 14. BEHAVIORAL PROFILE
-- ============================================
CREATE TABLE behavioral_profile (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  pet_id UUID NOT NULL UNIQUE REFERENCES pets(id) ON DELETE CASCADE,
  energy_level INTEGER DEFAULT 50 CHECK (energy_level BETWEEN 0 AND 100),
  obedience_level INTEGER DEFAULT 50 CHECK (obedience_level BETWEEN 0 AND 100),
  sociability_level INTEGER DEFAULT 50 CHECK (sociability_level BETWEEN 0 AND 100),
  anxiety_level INTEGER DEFAULT 30 CHECK (anxiety_level BETWEEN 0 AND 100),
  focus_level INTEGER DEFAULT 50 CHECK (focus_level BETWEEN 0 AND 100),
  aggression_level INTEGER DEFAULT 10 CHECK (aggression_level BETWEEN 0 AND 100),
  traits JSONB DEFAULT '[]'::jsonb,
  ai_analysis TEXT,
  suggested_routine JSONB,
  last_evaluated_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_behavioral_profile_pet ON behavioral_profile(pet_id);

-- ============================================
-- 15. DOCUMENTS
-- ============================================
CREATE TABLE documents (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  pet_id UUID NOT NULL REFERENCES pets(id) ON DELETE CASCADE,
  doc_type VARCHAR(20) NOT NULL CHECK (doc_type IN ('exam', 'prescription', 'certificate', 'photo', 'other')),
  title VARCHAR(255) NOT NULL,
  file_url TEXT NOT NULL,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_documents_pet_id ON documents(pet_id);

-- ============================================
-- TRIGGERS: Auto-update updated_at
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_users_updated_at BEFORE UPDATE ON users FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER trg_pets_updated_at BEFORE UPDATE ON pets FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER trg_ai_conversations_updated_at BEFORE UPDATE ON ai_conversations FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER trg_training_progress_updated_at BEFORE UPDATE ON training_progress FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER trg_behavioral_profile_updated_at BEFORE UPDATE ON behavioral_profile FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE pets ENABLE ROW LEVEL SECURITY;
ALTER TABLE health_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE vaccinations ENABLE ROW LEVEL SECURITY;
ALTER TABLE expenses ENABLE ROW LEVEL SECURITY;
ALTER TABLE routines ENABLE ROW LEVEL SECURITY;
ALTER TABLE alerts ENABLE ROW LEVEL SECURITY;
ALTER TABLE timeline_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE training_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE training_lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE training_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE behavioral_profile ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;

-- Users can only access their own data
CREATE POLICY users_self ON users FOR ALL USING (id = auth.uid());

-- Pets belong to user
CREATE POLICY pets_owner ON pets FOR ALL USING (user_id = auth.uid());

-- Pet-related tables: user owns the pet
CREATE POLICY health_records_owner ON health_records FOR ALL USING (pet_id IN (SELECT id FROM pets WHERE user_id = auth.uid()));
CREATE POLICY vaccinations_owner ON vaccinations FOR ALL USING (pet_id IN (SELECT id FROM pets WHERE user_id = auth.uid()));
CREATE POLICY expenses_owner ON expenses FOR ALL USING (pet_id IN (SELECT id FROM pets WHERE user_id = auth.uid()));
CREATE POLICY routines_owner ON routines FOR ALL USING (pet_id IN (SELECT id FROM pets WHERE user_id = auth.uid()));
CREATE POLICY alerts_owner ON alerts FOR ALL USING (pet_id IN (SELECT id FROM pets WHERE user_id = auth.uid()));
CREATE POLICY timeline_events_owner ON timeline_events FOR ALL USING (pet_id IN (SELECT id FROM pets WHERE user_id = auth.uid()));
CREATE POLICY ai_conversations_owner ON ai_conversations FOR ALL USING (user_id = auth.uid());
CREATE POLICY ai_messages_owner ON ai_messages FOR ALL USING (conversation_id IN (SELECT id FROM ai_conversations WHERE user_id = auth.uid()));
CREATE POLICY training_plans_owner ON training_plans FOR ALL USING (pet_id IN (SELECT id FROM pets WHERE user_id = auth.uid()));
CREATE POLICY training_lessons_owner ON training_lessons FOR ALL USING (plan_id IN (SELECT id FROM training_plans WHERE pet_id IN (SELECT id FROM pets WHERE user_id = auth.uid())));
CREATE POLICY training_progress_owner ON training_progress FOR ALL USING (pet_id IN (SELECT id FROM pets WHERE user_id = auth.uid()));
CREATE POLICY behavioral_profile_owner ON behavioral_profile FOR ALL USING (pet_id IN (SELECT id FROM pets WHERE user_id = auth.uid()));
CREATE POLICY documents_owner ON documents FOR ALL USING (pet_id IN (SELECT id FROM pets WHERE user_id = auth.uid()));
