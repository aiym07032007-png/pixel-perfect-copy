import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp, Beaker, Droplets, Heart, Brain, Leaf, FlaskConical } from "lucide-react";
import AudioPlayer from "./AudioPlayer";
import VideoEmbed from "./VideoEmbed";

const promises = [
  { icon: <Droplets className="w-5 h-5" />, text: "Улучшение клеточного дыхания и насыщение крови кислородом" },
  { icon: <Heart className="w-5 h-5" />, text: "Детоксикация организма и поддержка печени" },
  { icon: <Beaker className="w-5 h-5" />, text: "Повышение уровня гемоглобина и борьба с анемией" },
  { icon: <Brain className="w-5 h-5" />, text: "Снижение воспаления (антиоксидантный эффект)" },
  { icon: <Leaf className="w-5 h-5" />, text: "Улучшение состояния кожи и замедление старения" },
  { icon: <FlaskConical className="w-5 h-5" />, text: "Нормализация уровня железа и ферритина" },
];

const bloodTests = [
  { name: "Общий анализ крови", desc: "гемоглобин, эритроциты, лейкоциты" },
  { name: "Ферритин", desc: "запасы железа в организме" },
  { name: "СРБ (С-реактивный белок)", desc: "маркер воспаления" },
];

const ChlorophyllSection = () => {
  const [showProtocol, setShowProtocol] = useState(false);
  const [showDiary, setShowDiary] = useState(false);

  return (
    <section id="chlorophyll" className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-background to-background opacity-40" />
      
      <div className="section-container relative z-10">
        {/* Chapter heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[hsl(152,56%,39%)] text-sm tracking-[0.3em] uppercase font-body font-semibold mb-4">
            ГЛАВА · ЭКСПЕРИМЕНТ РЕДАКЦИИ
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            ХЛОРОФИЛЛ <span className="text-[hsl(152,56%,39%)]">ПОД МИКРОСКОПОМ</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Мынбай Айым проверяет на себе: работает ли «зелёная добавка» из TikTok?
          </p>
        </motion.div>

        {/* What is chlorophyll */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-10"
        >
          <div className="bg-card rounded-2xl border border-border p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-full bg-[hsl(152,56%,39%)]/20 flex items-center justify-center text-3xl">
                🌿
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-foreground">Что такое хлорофилл?</h3>
                <p className="text-xs text-muted-foreground">Звезда соцсетей и «зелёная надежда» блогеров</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Хлорофилл — это пигмент, придающий растениям зелёный цвет. Он стал звездой TikTok и Instagram.
              Производители и блогеры обещают невероятные результаты. Но доказано ли это?
            </p>

            <h4 className="font-heading text-sm font-bold text-foreground mb-3 uppercase tracking-wider">
              Что обещают производители:
            </h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {promises.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 p-3 rounded-lg bg-[hsl(152,56%,39%)]/5 border border-[hsl(152,56%,39%)]/20"
                >
                  <span className="text-[hsl(152,56%,39%)] mt-0.5">{p.icon}</span>
                  <span className="text-sm text-foreground">{p.text}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-destructive text-sm font-semibold mt-4 text-center">
              Красиво? Безусловно. Доказано ли? Именно это мы и проверили. 🔬
            </p>
          </div>
        </motion.div>

        {/* Participant - Мынбай Айым */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-10"
        >
          <div className="bg-card rounded-2xl border-2 border-[hsl(152,56%,39%)]/30 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-full border-2 border-dashed border-[hsl(152,56%,39%)]/50 flex items-center justify-center bg-card/50">
                <span className="text-4xl">👩‍🔬</span>
              </div>
              <div className="text-center sm:text-left flex-1">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-1">Мынбай Айым</h3>
                <p className="text-[hsl(152,56%,39%)] text-sm font-semibold mb-2">Участница эксперимента</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  «Я решила проверить на себе — действительно ли хлорофилл делает то, что обещают блогеры. 
                  Без фильтров, без рекламы. Только анализы крови ДО и ПОСЛЕ — и честный дневник.»
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Protocol */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-8"
        >
          <button
            onClick={() => setShowProtocol(!showProtocol)}
            className="w-full flex items-center justify-between p-5 rounded-xl bg-card border border-border hover:border-[hsl(152,56%,39%)]/30 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">🧪</span>
              <span className="font-heading font-bold text-foreground">Протокол эксперимента</span>
            </div>
            {showProtocol ? <ChevronUp className="w-5 h-5 text-muted-foreground" /> : <ChevronDown className="w-5 h-5 text-muted-foreground" />}
          </button>

          {showProtocol && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-3 p-6 rounded-xl bg-card border border-border space-y-6"
            >
              <div>
                <h4 className="font-heading font-bold text-foreground text-sm mb-3">📋 Анализы крови ДО и ПОСЛЕ (30 дней):</h4>
                <div className="space-y-2">
                  {bloodTests.map((t, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/20">
                      <span className="text-destructive font-bold text-sm">{i + 1}.</span>
                      <div>
                        <span className="text-foreground font-semibold text-sm">{t.name}</span>
                        <span className="text-muted-foreground text-xs ml-2">— {t.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[hsl(152,56%,39%)]/5 border border-[hsl(152,56%,39%)]/20">
                <p className="text-sm text-foreground font-semibold mb-2">⚗️ Условия:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Приём хлорофилла в рекомендованной дозировке — 30 дней</li>
                  <li>• Повторный забор крови в той же лаборатории</li>
                  <li>• Никаких дополнительных добавок</li>
                  <li>• Без изменений в питании или образе жизни</li>
                  <li>• Ежедневный дневник: самочувствие, энергия, сон, настроение</li>
                </ul>
              </div>

              <div className="text-center p-4 rounded-lg border-2 border-dashed border-border">
                <p className="text-muted-foreground/60 text-sm">
                  📊 Результаты анализов будут добавлены после завершения эксперимента
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Results placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-8"
        >
          <div className="grid sm:grid-cols-3 gap-4">
            {["ДО приёма", "ПОСЛЕ (30 дней)", "РАЗНИЦА"].map((label, i) => (
              <div key={i} className={`p-5 rounded-xl border-2 border-dashed text-center ${
                i === 2 ? "border-destructive/30 bg-destructive/5" : "border-border bg-card/30"
              }`}>
                <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">{label}</p>
                <p className="text-3xl mb-2">{["🩸", "🩸", "📈"][i]}</p>
                <p className="text-muted-foreground/50 text-xs">
                  {i === 2 ? "Результаты будут опубликованы" : "Анализы будут добавлены"}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Diary */}
        <div className="max-w-3xl mx-auto mb-8">
          <button
            onClick={() => setShowDiary(!showDiary)}
            className="w-full flex items-center justify-between p-5 rounded-xl bg-card border border-border hover:border-[hsl(152,56%,39%)]/30 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">📔</span>
              <span className="font-heading font-bold text-foreground">Дневник Айым (ежедневные записи)</span>
            </div>
            {showDiary ? <ChevronUp className="w-5 h-5 text-muted-foreground" /> : <ChevronDown className="w-5 h-5 text-muted-foreground" />}
          </button>

          {showDiary && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-3 p-6 rounded-xl bg-card border border-border"
            >
              <div className="space-y-3">
                {["День 1", "День 7", "День 14", "День 21", "День 30"].map((day, i) => (
                  <div key={i} className="p-4 rounded-lg border border-border bg-muted/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-sm text-foreground">{day}</span>
                      <span className="text-xs text-muted-foreground/50">📝 будет заполнено</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-center">
                      {["Энергия", "Сон", "Кожа", "Настроение"].map((metric) => (
                        <div key={metric} className="text-xs">
                          <p className="text-muted-foreground/60">{metric}</p>
                          <p className="text-foreground mt-1">—</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-xs text-muted-foreground mt-4 italic">
                Субъективное улучшение — эффект плацебо или реальный биохимический сдвиг? На этот вопрос ответят цифры.
              </p>
            </motion.div>
          )}
        </div>

        {/* Video & Audio placeholders */}
        <div className="max-w-3xl mx-auto space-y-4 mb-8">
          <VideoEmbed label="Видео-дневник Айым: приём хлорофилла — будет добавлено" />
          <AudioPlayer label="Аудио-комментарий Айым о самочувствии — будет добавлено" />
        </div>

        {/* Key question */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="quote-block">
            <p className="text-base sm:text-lg">
              «Маркетинг БАДов живёт в субъективных ощущениях — и это важно зафиксировать честно. 
              Субъективное улучшение — эффект плацебо или реальный биохимический сдвиг? 
              На этот вопрос ответят цифры.»
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChlorophyllSection;
