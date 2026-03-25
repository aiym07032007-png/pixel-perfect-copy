import { motion } from "framer-motion";

const comparison = [
  { med: "✅ Клинические испытания", bad: "❌ Только санитарная экспертиза" },
  { med: "✅ Доказанная эффективность", bad: "❌ Эффективность не проверяется" },
  { med: "✅ Строгий контроль состава", bad: "⚠️ Только безопасность" },
  { med: "✅ Рецепт врача", bad: "❌ Продаётся в любом Instagram" },
  { med: "✅ Ответственность за вред", bad: "❌ Практически нет ответственности" },
];

const LegalSection = () => (
  <section id="legal" className="py-20 sm:py-28">
    <div className="section-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title text-center"
      >
        <span className="text-gradient-gold">БАД vs ЛЕКАРСТВО</span>
        <br />
        <span className="text-foreground text-2xl">ПРОПАСТЬ В ЗАКОНЕ</span>
      </motion.h2>

      {/* Comparison table */}
      <div className="max-w-3xl mx-auto mb-12">
        <div className="grid grid-cols-2 gap-4 mb-2">
          <p className="text-center font-heading font-bold text-success text-lg">⚖️ ЛЕКАРСТВО</p>
          <p className="text-center font-heading font-bold text-destructive text-lg">⚖️ БАД</p>
        </div>
        {comparison.map((row, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="grid grid-cols-2 gap-4 py-3 border-b border-border"
          >
            <p className="text-sm text-foreground">{row.med}</p>
            <p className="text-sm text-muted-foreground">{row.bad}</p>
          </motion.div>
        ))}
      </div>

      {/* Real case */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto bg-destructive/10 border border-destructive/30 rounded-xl p-6 mb-10"
      >
        <h3 className="font-heading font-bold text-destructive text-lg mb-3">🚨 РЕАЛЬНЫЙ СЛУЧАЙ</h3>
        <p className="text-foreground text-sm mb-3">
          Instagram-страница продаёт «магний-водород»,
          якобы исцеляющий онкологию 4-й стадии.
        </p>
        <p className="text-muted-foreground text-sm italic">
          Запрос в Комитет медконтроля МЗ РК:
          «Данный вопрос не входит в нашу компетенцию» — Forbes.kz
        </p>
      </motion.div>

      {/* Contraband stat */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-md mx-auto text-center"
      >
        <p className="text-foreground mb-2">30% казахстанских БАД — контрабанда</p>
        <div className="h-4 bg-secondary rounded-full overflow-hidden mb-2">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "30%" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-full bg-destructive rounded-full"
          />
        </div>
        <p className="text-xs text-muted-foreground">
          Казахстан = крупнейший транзитный канал для запрещённых препаратов в ЕАЭС
        </p>
      </motion.div>
    </div>
  </section>
);

export default LegalSection;
