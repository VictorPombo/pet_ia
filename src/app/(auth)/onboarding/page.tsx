"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  PawPrint, Camera, ArrowRight, ArrowLeft, Check,
  Dog, Cat, Upload, Sparkles
} from "lucide-react";

const breeds = {
  dog: ["Golden Retriever", "Labrador", "Bulldog Francês", "Poodle", "Shih Tzu", "Yorkshire", "Pastor Alemão", "Rottweiler", "Border Collie", "Dachshund", "Husky Siberiano", "Pug", "Beagle", "Pit Bull", "SRD (Sem Raça Definida)", "Outro"],
  cat: ["Persa", "Siamês", "Maine Coon", "Ragdoll", "British Shorthair", "Bengal", "Sphynx", "Angorá", "Scottish Fold", "Abissínio", "SRD (Sem Raça Definida)", "Outro"],
};

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [petData, setPetData] = useState({
    name: "",
    species: "dog" as "dog" | "cat",
    breed: "",
    birth_date: "",
    gender: "" as "" | "male" | "female",
    weight_kg: "",
    neutered: false,
    allergies: "",
    diseases: "",
  });

  const totalSteps = 4;

  const updatePet = (field: string, value: string | boolean) => {
    setPetData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, totalSteps));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleFinish = () => {
    // TODO: Save to Supabase
    window.location.href = "/dashboard";
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden py-12">
      <div className="absolute inset-0 gradient-mesh opacity-50" />

      <div className="relative z-10 w-full max-w-lg mx-4">
        {/* Logo */}
        <div className="text-center mb-6">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="text-2xl font-bold text-text-primary tracking-tight">
              Close<span className="text-accent">Pet</span>
            </span>
          </Link>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center gap-2 mb-8 max-w-xs mx-auto">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div key={i} className="flex-1 h-1.5 rounded-full overflow-hidden bg-border">
              <motion.div
                className="h-full rounded-full bg-accent"
                initial={{ width: "0%" }}
                animate={{ width: i < step ? "100%" : "0%" }}
                transition={{ duration: 0.3 }}
              />
            </div>
          ))}
        </div>

        {/* Card */}
        <div className="bg-surface rounded-2xl border border-border p-8 shadow-xl overflow-hidden min-h-[420px] flex flex-col">
          <AnimatePresence mode="wait" custom={1}>
            {/* Step 1: Name + Species + Photo */}
            {step === 1 && (
              <motion.div
                key="step1"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                custom={1}
                transition={{ duration: 0.3 }}
                className="flex-1"
              >
                <h2 className="text-xl font-bold text-text-primary mb-1">Qual é o nome do seu pet?</h2>
                <p className="text-sm text-text-secondary mb-6">Vamos começar com o básico</p>

                {/* Photo Upload */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-surface-hover border-2 border-dashed border-border flex items-center justify-center cursor-pointer hover:border-accent transition-colors">
                      <Camera className="w-8 h-8 text-text-muted" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-accent flex items-center justify-center shadow-md">
                      <Upload className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Pet Name */}
                <div className="mb-5">
                  <label className="block text-sm font-medium text-text-primary mb-1.5">Nome</label>
                  <input
                    type="text"
                    value={petData.name}
                    onChange={(e) => updatePet("name", e.target.value)}
                    placeholder="Ex: Thor, Luna, Mel..."
                    className="w-full px-4 py-3 rounded-xl bg-surface-hover border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                  />
                </div>

                {/* Species */}
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">Espécie</label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: "dog", label: "Cachorro", Icon: Dog },
                      { value: "cat", label: "Gato", Icon: Cat },
                    ].map(({ value, label, Icon }) => (
                      <button
                        key={value}
                        onClick={() => updatePet("species", value)}
                        className={`flex items-center gap-3 p-4 rounded-xl border transition-all duration-200 ${
                          petData.species === value
                            ? "border-accent bg-accent/5 text-accent"
                            : "border-border hover:border-text-muted text-text-secondary"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="text-sm font-medium">{label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Breed, Birth, Gender, Weight */}
            {step === 2 && (
              <motion.div
                key="step2"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                custom={1}
                transition={{ duration: 0.3 }}
                className="flex-1"
              >
                <h2 className="text-xl font-bold text-text-primary mb-1">Sobre {petData.name || "seu pet"}</h2>
                <p className="text-sm text-text-secondary mb-6">Informações para personalizar o app</p>

                <div className="space-y-4">
                  {/* Breed */}
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">Raça</label>
                    <select
                      value={petData.breed}
                      onChange={(e) => updatePet("breed", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-surface-hover border border-border text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all appearance-none"
                    >
                      <option value="">Selecione a raça</option>
                      {breeds[petData.species].map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>

                  {/* Birth Date */}
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">Data de nascimento</label>
                    <input
                      type="date"
                      value={petData.birth_date}
                      onChange={(e) => updatePet("birth_date", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-surface-hover border border-border text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                    />
                  </div>

                  {/* Gender + Weight */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">Sexo</label>
                      <div className="flex gap-2">
                        {[
                          { value: "male", label: "♂ Macho" },
                          { value: "female", label: "♀ Fêmea" },
                        ].map(({ value, label }) => (
                          <button
                            key={value}
                            type="button"
                            onClick={() => updatePet("gender", value)}
                            className={`flex-1 py-2.5 rounded-xl border text-xs font-medium transition-all ${
                              petData.gender === value
                                ? "border-accent bg-accent/5 text-accent"
                                : "border-border text-text-secondary hover:border-text-muted"
                            }`}
                          >
                            {label}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">Peso (kg)</label>
                      <input
                        type="number"
                        step="0.1"
                        value={petData.weight_kg}
                        onChange={(e) => updatePet("weight_kg", e.target.value)}
                        placeholder="Ex: 12.5"
                        className="w-full px-4 py-2.5 rounded-xl bg-surface-hover border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Health info */}
            {step === 3 && (
              <motion.div
                key="step3"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                custom={1}
                transition={{ duration: 0.3 }}
                className="flex-1"
              >
                <h2 className="text-xl font-bold text-text-primary mb-1">Saúde de {petData.name || "seu pet"}</h2>
                <p className="text-sm text-text-secondary mb-6">Informações importantes (pule se não souber)</p>

                <div className="space-y-4">
                  {/* Neutered */}
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">Castrado(a)?</label>
                    <div className="flex gap-3">
                      {[
                        { value: true, label: "Sim" },
                        { value: false, label: "Não" },
                      ].map(({ value, label }) => (
                        <button
                          key={label}
                          type="button"
                          onClick={() => updatePet("neutered", value)}
                          className={`flex-1 py-3 rounded-xl border text-sm font-medium transition-all ${
                            petData.neutered === value
                              ? "border-accent bg-accent/5 text-accent"
                              : "border-border text-text-secondary hover:border-text-muted"
                          }`}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Allergies */}
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">Alergias</label>
                    <textarea
                      value={petData.allergies}
                      onChange={(e) => updatePet("allergies", e.target.value)}
                      placeholder="Descreva alergias conhecidas (opcional)"
                      rows={2}
                      className="w-full px-4 py-3 rounded-xl bg-surface-hover border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all resize-none"
                    />
                  </div>

                  {/* Diseases */}
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">Doenças</label>
                    <textarea
                      value={petData.diseases}
                      onChange={(e) => updatePet("diseases", e.target.value)}
                      placeholder="Descreva doenças crônicas ou condições (opcional)"
                      rows={2}
                      className="w-full px-4 py-3 rounded-xl bg-surface-hover border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all resize-none"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Summary */}
            {step === 4 && (
              <motion.div
                key="step4"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                custom={1}
                transition={{ duration: 0.3 }}
                className="flex-1 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-10 h-10 text-accent" />
                </div>
                <h2 className="text-xl font-bold text-text-primary mb-2">Tudo pronto! 🎉</h2>
                <p className="text-sm text-text-secondary mb-8">
                  O perfil de <strong>{petData.name}</strong> foi criado com sucesso
                </p>

                {/* Summary Card */}
                <div className="bg-surface-hover rounded-2xl p-5 text-left space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center text-white text-2xl">
                      {petData.species === "dog" ? "🐕" : "🐈"}
                    </div>
                    <div>
                      <p className="font-semibold text-text-primary">{petData.name || "Pet"}</p>
                      <p className="text-xs text-text-muted">
                        {petData.breed || "Raça não definida"} • {petData.gender === "male" ? "Macho" : petData.gender === "female" ? "Fêmea" : "N/A"}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-border">
                    <div className="text-xs">
                      <span className="text-text-muted">Peso: </span>
                      <span className="text-text-primary font-medium">{petData.weight_kg || "N/A"} kg</span>
                    </div>
                    <div className="text-xs">
                      <span className="text-text-muted">Castrado: </span>
                      <span className="text-text-primary font-medium">{petData.neutered ? "Sim" : "Não"}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
            <button
              onClick={prevStep}
              disabled={step === 1}
              className="flex items-center gap-1 text-sm text-text-secondary hover:text-text-primary transition-colors disabled:opacity-0 disabled:pointer-events-none"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </button>

            {step < totalSteps ? (
              <button
                onClick={nextStep}
                disabled={step === 1 && !petData.name}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-accent hover:bg-accent-hover text-white text-sm font-semibold transition-all shadow-md shadow-accent/20 disabled:opacity-50"
              >
                Próximo
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleFinish}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-accent hover:bg-accent-hover text-white text-sm font-semibold transition-all shadow-md shadow-accent/20"
              >
                Ir para o Dashboard
                <Check className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
