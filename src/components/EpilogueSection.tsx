import { motion } from "framer-motion";

const EpilogueSection = () => (
  <section id="epilogue" className="py-20 sm:py-28 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-destructive/5 to-[#0a0a0a] opacity-30" />
    
    <div className="section-container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="section-title text-destructive">ЭПИЛОГ</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto space-y-6 text-muted-foreground text-base leading-relaxed mb-12"
      >
        <p>
          Индустрия БАДов построена на <strong className="text-foreground">страхе, невежестве и жадности</strong>. 
          Страхе потребителей перед болезнью. Невежестве регуляторов. Жадности производителей.
        </p>
        <p>
          Система не защитит вас. Врачи перегружены. Регуляторы бессильны. 
          Instagram заблокирует 1% нарушителей и будет считать это победой.
        </p>
        <p className="text-foreground font-semibold text-lg">
          Но у вас есть оружие — информация.
        </p>
      </motion.div>

      {/* Final stats */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center space-y-3 mb-12"
      >
        <p className="text-muted-foreground text-base leading-relaxed">
          Казахстан. 2025–2026.
          <br />
          Рынок вырос в <span className="text-destructive font-bold">×5</span> за год.
          <br />
          <span className="text-destructive font-bold">31%</span> образцов не соответствуют стандартам.
          <br />
          Заблокировано <span className="text-destructive font-bold">9</span> аккаунтов из 838 нарушителей.
        </p>
      </motion.div>

      {/* Final message */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="max-w-2xl mx-auto"
      >
        <div className="quote-block text-center">
          <p className="text-lg sm:text-xl">
            БАДы не сделают вас здоровее. Но они могут сделать вас беднее.{" "}
            <span className="text-destructive font-bold">Или убить.</span>
          </p>
          <p className="text-foreground font-semibold mt-4">
            Выбор за вами. Теперь вы знаете правду.
          </p>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-12 text-center"
      >
        <div className="bg-card border border-destructive/30 rounded-xl p-6 max-w-xl mx-auto">
          <p className="text-foreground font-heading font-bold text-lg mb-2">
            📩 Свяжитесь с нами
          </p>
          <p className="text-muted-foreground text-sm">
            Если вы пострадали от БАДов или знаете тех, кто пострадал — свяжитесь с нами. 
            Ваша история может спасти других.
          </p>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="text-center font-heading text-xl font-bold text-foreground mt-8"
      >
        Расследование продолжается.
      </motion.p>
    </div>
  </section>
);

export default EpilogueSection;
