import { motion } from "framer-motion";
import { useState } from "react";
import { Heart, AlertTriangle, Clock, ChevronDown, ChevronUp } from "lucide-react";

const timeline = [
  { time: "День 1", icon: "💊", text: "Купила «Молекулу» в Instagram. Хотела похудеть к свадьбе." },
  { time: "День 3", icon: "💓", text: "Учащённое сердцебиение, бессонница. «Наверное, так и должно быть»." },
  { time: "День 7", icon: "🚑", text: "Сердце остановилось. 5 минут клинической смерти." },
  { time: "7 дней", icon: "🏥", text: "Реанимация. ИВЛ. Аппарат искусственного кровообращения." },
  { time: "Сейчас", icon: "⚠️", text: "Выжила. Но жизнь уже никогда не будет прежней." },
];

const MangystauCaseSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="mangystau" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-destructive/5 via-background to-background" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-destructive text-sm tracking-[0.3em] uppercase font-body font-semibold mb-4">
            ГЛАВА I · ЦЕНА ОДНОЙ ТАБЛЕТКИ
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            5 МИНУТ <span className="text-destructive">БЕЗ СЕРДЦА</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            30-летняя женщина из Мангистауской области. Хотела похудеть к свадьбе.
            Купила БАД в Instagram. Чуть не погибла.
          </p>
        </motion.div>

        {/* Key stat */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto mb-12"
        >
          <div className="bg-destructive/10 border-2 border-destructive/30 rounded-2xl p-8 text-center">
            <Heart className="w-16 h-16 text-destructive mx-auto mb-4 animate-pulse" />
            <p className="text-5xl sm:text-6xl font-bold text-destructive font-heading mb-2">5 минут</p>
            <p className="text-foreground text-lg font-medium">клинической смерти</p>
            <p className="text-muted-foreground text-sm mt-2">
              Столько её сердце не билось после приёма «Молекулы» — БАДа с сибутрамином из Instagram
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-destructive/30" />
            {timeline.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative flex gap-4 mb-6 last:mb-0"
              >
                <div className="w-12 h-12 rounded-full bg-card border-2 border-destructive/40 flex items-center justify-center text-2xl flex-shrink-0 z-10">
                  {step.icon}
                </div>
                <div className="pt-2">
                  <p className="text-destructive text-xs font-bold uppercase tracking-wider mb-1">{step.time}</p>
                  <p className="text-foreground text-sm sm:text-base">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Shocking context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-10"
        >
          <div className="bg-card rounded-2xl border border-border p-6 sm:p-8">
            <div className="flex items-start gap-4 mb-4">
              <AlertTriangle className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-foreground font-heading font-bold text-xl mb-3">
                  «Молекула» — это не витамин. Это замаскированный яд.
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  Внутри — <strong className="text-foreground">сибутрамин</strong>, запрещённое вещество, снятое с продажи
                  в большинстве стран мира из-за смертельных побочных эффектов. Инфаркт, инсульт, остановка сердца.
                  Но в Instagram его продолжают продавать как «натуральное средство для похудения».
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Эта женщина — не единственная жертва. Она просто одна из тех, кто выжил.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              <div className="bg-destructive/5 rounded-lg p-4 text-center border border-destructive/20">
                <p className="text-2xl font-bold text-destructive">406</p>
                <p className="text-xs text-muted-foreground mt-1">профилей продают опасные БАДы</p>
              </div>
              <div className="bg-destructive/5 rounded-lg p-4 text-center border border-destructive/20">
                <p className="text-2xl font-bold text-destructive">9</p>
                <p className="text-xs text-muted-foreground mt-1">заблокировано за 9 месяцев</p>
              </div>
              <div className="bg-destructive/5 rounded-lg p-4 text-center border border-destructive/20">
                <p className="text-2xl font-bold text-destructive">2.2%</p>
                <p className="text-xs text-muted-foreground mt-1">эффективность блокировки</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA / emotional punch */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-muted-foreground text-lg max-w-xl mx-auto italic">
            Она хотела быть красивой на своей свадьбе.<br />
            Вместо этого — неделя на грани жизни и смерти.<br />
            <span className="text-destructive font-semibold">А продавец «Молекулы» до сих пор работает.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MangystauCaseSection;
