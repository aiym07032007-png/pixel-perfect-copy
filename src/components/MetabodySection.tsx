import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";

const selfMedItems = [
  { icon: X, text: "Приём БАДов без анализов", color: "text-destructive" },
  { icon: X, text: "Советы блогеров вместо врача", color: "text-destructive" },
  { icon: X, text: "Обещания «вылечить всё»", color: "text-destructive" },
  { icon: X, text: "Нет контроля взаимодействий", color: "text-destructive" },
];

const evidenceItems = [
  { icon: Check, text: "Полный чекап от 30 000 ₸", color: "text-success" },
  { icon: Check, text: "Персональная стратегия здоровья", color: "text-success" },
  { icon: Check, text: "IV-терапия, акупунктура, остеопатия", color: "text-success" },
  { icon: Check, text: "95% пациентов — улучшение за месяц", color: "text-success" },
];

const MetabodySection = () => (
  <section id="metabody" className="py-20 sm:py-28">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-destructive text-sm tracking-[0.3em] uppercase font-body font-semibold mb-4">
          ГЛАВА VII · АЛЬТЕРНАТИВА
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          ДОКАЗАТЕЛЬНАЯ МЕДИЦИНА
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Что предлагает Metabody.kz — клиника интегративной медицины в Алматы и Астане
        </p>
      </motion.div>

      {/* Comparison infographic */}
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-destructive/5 border border-destructive/20 rounded-xl p-6"
        >
          <h3 className="font-heading font-bold text-destructive text-lg mb-4 text-center">
            ❌ Самолечение БАДами
          </h3>
          <div className="space-y-3">
            {selfMedItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3"
              >
                <item.icon className={`w-5 h-5 flex-shrink-0 ${item.color}`} />
                <p className="text-foreground text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-success/5 border border-success/20 rounded-xl p-6"
        >
          <h3 className="font-heading font-bold text-success text-lg mb-4 text-center">
            ✅ Доказательная медицина
          </h3>
          <div className="space-y-3">
            {evidenceItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3"
              >
                <item.icon className={`w-5 h-5 flex-shrink-0 ${item.color}`} />
                <p className="text-foreground text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Metabody info */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto bg-card border border-border rounded-xl p-6 text-center"
      >
        <p className="text-foreground font-heading font-bold text-lg mb-2">Metabody.kz</p>
        <p className="text-muted-foreground text-sm mb-3">
          ТОО «Atlas club» · БИН: 191240005394 · Алматы и Астана
        </p>
        <p className="text-muted-foreground text-sm italic font-heading">
          «Персональная стратегия здоровья на основе анализов, а не самолечение»
        </p>
        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <ArrowRight className="w-3 h-3" />
          metabody.kz/almaty_main
        </div>
      </motion.div>
    </div>
  </section>
);

export default MetabodySection;
