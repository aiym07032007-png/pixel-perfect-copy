import { motion } from "framer-motion";

const rules = [
  {
    num: "1",
    title: "НИ ОДИН БАД — БЕЗ АНАЛИЗА КРОВИ",
    desc: "«Всем нужен магний» — это маркетинг, не медицина.",
    direction: { x: -60 },
  },
  {
    num: "2",
    title: "ПРОВЕРЯЙТЕ РЕЕСТР ЕАЭС",
    desc: "Нет в реестре = контрабанда, независимо от красоты упаковки.",
    direction: { x: 60 },
  },
  {
    num: "3",
    title: "«НАТУРАЛЬНО» ≠ «БЕЗОПАСНО»",
    desc: "Цианид — тоже натуральный. Яд бледной поганки — органический.",
    direction: { y: 60 },
  },
];

const EpilogueSection = () => (
  <section id="epilogue" className="py-20 sm:py-28">
    <div className="section-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title text-center text-destructive"
      >
        ЭПИЛОГ
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {rules.map((rule, i) => (
          <motion.div
            key={rule.num}
            initial={{ opacity: 0, ...rule.direction }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.7, type: "spring" }}
            className="bg-card border border-border rounded-xl p-8 text-center"
          >
            <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-destructive font-bold text-xl font-body">{rule.num}</span>
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-3">{rule.title}</h3>
            <p className="text-muted-foreground text-sm">{rule.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 1 }}
        className="max-w-2xl mx-auto text-center space-y-3"
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
        <p className="text-foreground font-heading text-xl font-bold mt-6">
          Расследование продолжается.
        </p>
      </motion.div>
    </div>
  </section>
);

export default EpilogueSection;
