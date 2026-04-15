import { motion } from "framer-motion";
import { Scale, AlertTriangle, Ban } from "lucide-react";
import { useCountUp } from "./useCountUp";

const comparisons = [
  { med: "Многолетние клинические испытания", bad: "Только санитарная экспертиза" },
  { med: "Доказанная эффективность", bad: "Эффективность не проверяется" },
  { med: "Строгий контроль состава", bad: "Контроль лишь базовой безопасности" },
  { med: "Продажа по рецепту", bad: "Продажа без рецепта через Instagram" },
  { med: "Ответственность за побочные эффекты", bad: "Практически никакой ответственности" },
];

const LegalSection = () => {
  const { count: effCount, ref: effRef } = useCountUp(1.07, 2000, 2);

  return (
    <section id="legal" className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-destructive/5 to-background opacity-30" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <p className="text-destructive text-sm tracking-[0.3em] uppercase font-body font-semibold mb-4">
            ГЛАВА VII · ЮРИСПРУДЕНЦИЯ
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-2">
            ЮРИДИЧЕСКАЯ ПРОПАСТЬ
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Почему вас никто не защищает
          </p>
        </motion.div>

        {/* Main explanation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-10"
        >
          <div className="bg-card rounded-xl p-6 sm:p-8 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-8 h-8 text-destructive" />
              <h3 className="font-heading text-xl font-bold text-foreground">
                БАДы = еда, не лекарства
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              В Казахстане БАДы регулируются как еда (<strong className="text-foreground">ТР ТС 021/2011</strong>), 
              а не как лекарства. Это означает принципиально разный уровень контроля:
            </p>

            {/* Comparison table */}
            <div className="grid grid-cols-2 gap-4 mb-2">
              <p className="text-center font-heading font-bold text-success text-xs sm:text-sm">💊 ЛЕКАРСТВА</p>
              <p className="text-center font-heading font-bold text-destructive text-xs sm:text-sm">🧪 БАДы</p>
            </div>
            {comparisons.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="grid grid-cols-2 gap-4 py-2.5 border-b border-border"
              >
                <p className="text-xs sm:text-sm text-foreground">{row.med}</p>
                <p className="text-xs sm:text-sm text-destructive/80">{row.bad}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Real example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-10"
        >
          <div className="bg-destructive/5 border border-destructive/30 rounded-xl p-6">
            <div className="flex items-start gap-3 mb-3">
              <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
              <h4 className="font-heading font-bold text-foreground">Реальный пример</h4>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              Instagram-страница продаёт «магний-водород», якобы исцеляющий 
              <strong className="text-foreground"> онкологию четвёртой стадии</strong>. 
              Запрос в Комитет медконтроля МЗ РК:
            </p>
            <div className="quote-block">
              <p className="text-sm italic">
                «Данный вопрос не входит в нашу компетенцию.»
              </p>
            </div>
            <p className="text-destructive text-sm font-semibold mt-3">
              Идеальная иллюстрация системы.
            </p>
          </div>
        </motion.div>

        {/* Contraband */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-10"
        >
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-start gap-3 mb-3">
              <Ban className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
              <h4 className="font-heading font-bold text-foreground">30% рынка — контрабанда</h4>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              По оценке ассоциации независимых аптек, <strong className="text-foreground">30% казахстанских БАДов — контрабанда</strong>. 
              Казахстан превратился в крупнейший транзитный канал для запрещённых препаратов в ЕАЭС.
            </p>
          </div>
        </motion.div>

        {/* Regulator efficiency */}
        <motion.div
          ref={effRef}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="bg-card rounded-xl p-8 border border-destructive/30">
            <p className="text-muted-foreground text-sm mb-2">Эффективность регулятора</p>
            <p className="text-5xl sm:text-7xl font-bold text-destructive font-body mb-3">{effCount}%</p>
            <p className="text-foreground text-base font-semibold mb-4">
              Регулятор работает с эффективностью дырявого сита
            </p>
            <div className="grid sm:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <div className="bg-muted/20 rounded-lg p-3">
                <p className="text-foreground font-bold text-lg">3 448</p>
                <p>проверено рекламораспро&shy;странителей</p>
              </div>
              <div className="bg-muted/20 rounded-lg p-3">
                <p className="text-foreground font-bold text-lg">838</p>
                <p>выявлены нарушения в профилях</p>
              </div>
              <div className="bg-destructive/10 rounded-lg p-3">
                <p className="text-destructive font-bold text-lg">9</p>
                <p>заблокировано страниц Instagram</p>
              </div>
            </div>
            <p className="text-muted-foreground text-xs mt-4 italic">
              Итоги 9 месяцев 2025 года. Девять из 838 — это 1,07%.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LegalSection;
