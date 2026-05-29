-- ============================================
-- CLOSEPET SEED: Training Plans & Lessons
-- ============================================

-- Nota: Esses dados serão inseridos como template
-- Quando um usuário cria um pet, cópias desses planos são geradas

-- PLAN TEMPLATES (usados como referência, não inseridos diretamente)
-- Os planos são criados dinamicamente por pet

-- ============================================
-- Template de lições por tipo de plano
-- ============================================

-- Tabela auxiliar para templates de lições
CREATE TABLE IF NOT EXISTS training_lesson_templates (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  plan_type VARCHAR(20) NOT NULL CHECK (plan_type IN ('basic', 'behavior', 'walk', 'advanced')),
  lesson_name VARCHAR(255) NOT NULL,
  description TEXT,
  duration_minutes INTEGER,
  difficulty VARCHAR(10) CHECK (difficulty IN ('easy', 'medium', 'hard')),
  sort_order INTEGER
);

-- ============================================
-- BÁSICO — Comandos fundamentais
-- ============================================
INSERT INTO training_lesson_templates (plan_type, lesson_name, description, duration_minutes, difficulty, sort_order) VALUES
('basic', 'Sentar', 'Ensine seu pet a sentar sob comando. Use petiscos como reforço positivo, posicione acima do focinho e diga "senta" com voz firme e gentil.', 10, 'easy', 1),
('basic', 'Deitar', 'A partir da posição sentado, guie o pet para deitar usando um petisco. Movimento lento em direção ao chão.', 10, 'easy', 2),
('basic', 'Ficar', 'Ensine seu pet a permanecer parado por alguns segundos. Comece com 3 segundos e aumente gradualmente.', 15, 'easy', 3),
('basic', 'Vir quando chamado', 'O recall é um dos comandos mais importantes. Pratique em ambiente controlado antes de usar ao ar livre.', 15, 'medium', 4),
('basic', 'Dar a pata', 'Um comando divertido que fortalece o vínculo. Toque suavemente na pata e recompense quando o pet levantar.', 10, 'easy', 5),
('basic', 'Largar/Soltar', 'Essencial para segurança. Ensine seu pet a soltar objetos da boca sob comando.', 15, 'medium', 6),
('basic', 'Não/Deixa', 'Comando de inibição. Ensine seu pet a se afastar de algo que não deve pegar.', 15, 'medium', 7);

-- ============================================
-- COMPORTAMENTO — Correção e hábitos
-- ============================================
INSERT INTO training_lesson_templates (plan_type, lesson_name, description, duration_minutes, difficulty, sort_order) VALUES
('behavior', 'Parar de latir excessivamente', 'Identifique o gatilho do latido e use técnicas de dessensibilização. Nunca grite com o pet, isso piora o comportamento.', 20, 'hard', 1),
('behavior', 'Ansiedade de separação', 'Treine saídas curtas e progressivas. Deixe brinquedos interativos e não faça festa ao sair ou chegar.', 25, 'hard', 2),
('behavior', 'Parar de destruir objetos', 'Redirecione a energia para brinquedos apropriados. Aumente exercícios físicos e mentais.', 20, 'medium', 3),
('behavior', 'Socialização com outros cães', 'Exposição gradual e positiva a outros cães. Comece com cães calmos e em ambiente neutro.', 30, 'hard', 4),
('behavior', 'Socialização com pessoas', 'Apresente novas pessoas gradualmente. Recompense comportamento calmo, nunca force interação.', 20, 'medium', 5),
('behavior', 'Não pular nas pessoas', 'Ignore quando pular, recompense quando tiver as 4 patas no chão. Consistência é fundamental.', 15, 'medium', 6),
('behavior', 'Aceitar manuseio', 'Dessensibilize o pet ao toque em patas, orelhas e boca. Importante para visitas ao veterinário.', 15, 'easy', 7);

-- ============================================
-- PASSEIO — Comportamento na rua
-- ============================================
INSERT INTO training_lesson_templates (plan_type, lesson_name, description, duration_minutes, difficulty, sort_order) VALUES
('walk', 'Não puxar a guia', 'Use a técnica da árvore: pare quando puxar, ande quando a guia estiver frouxa. Paciência é essencial.', 20, 'medium', 1),
('walk', 'Andar junto (heel)', 'Ensine seu pet a andar ao seu lado esquerdo. Use petiscos para manter a posição.', 20, 'medium', 2),
('walk', 'Ignorar distrações', 'Treine o foco em você mesmo com distrações ao redor. Comece com distrações leves e aumente.', 25, 'hard', 3),
('walk', 'Parar no meio-fio', 'Ensine a parar automaticamente antes de atravessar. Segurança em primeiro lugar.', 15, 'easy', 4),
('walk', 'Fazer necessidades no lugar certo', 'Estabeleça uma rotina de horários e locais. Recompense imediatamente após fazer no local correto.', 15, 'medium', 5),
('walk', 'Comportamento com outros cães na rua', 'Mantenha distância segura, redirecione atenção com comandos aprendidos. Recompense a calma.', 25, 'hard', 6);

-- ============================================
-- AVANÇADO — Truques e estímulos
-- ============================================
INSERT INTO training_lesson_templates (plan_type, lesson_name, description, duration_minutes, difficulty, sort_order) VALUES
('advanced', 'Rolar', 'A partir do deitar, guie o pet para rolar usando um petisco em movimento circular.', 15, 'medium', 1),
('advanced', 'Dar tchau/acenar', 'Extensão do dar a pata. Ensine a levantar a pata no ar e movimentar.', 15, 'medium', 2),
('advanced', 'Buscar e trazer', 'O fetch completo: ir, pegar, trazer e soltar. Combine com "largar".', 20, 'medium', 3),
('advanced', 'Finge de morto (bang)', 'Comando divertido: ao "bang", o pet deita de lado e fica parado.', 20, 'hard', 4),
('advanced', 'Circuito de agilidade', 'Monte um circuito simples em casa com cones, túneis improvisados e saltos baixos.', 30, 'hard', 5),
('advanced', 'Estímulo mental com puzzles', 'Use brinquedos puzzle, snuffle mats e jogos de farejar para exercitar a mente.', 20, 'easy', 6),
('advanced', 'Identificar brinquedos por nome', 'Ensine seu pet a buscar brinquedos específicos pelo nome. Comece com um e adicione gradualmente.', 25, 'hard', 7);
