import { motion } from "framer-motion";
import { Shield, Check } from "lucide-react";

const checklist = [
  "Проверяй наличие свидетельства государственной регистрации",
  "Не покупай БАДы без консультации врача при хронических болезнях",
  "Остерегайся обещаний «вылечить» болезни — БАД не лекарство",
  "Проверяй производителя и сертификаты",
  "Сообщай о побочных эффектах в Комитет охраны здоровья МЗ РК",
  "Используй официальные аптеки и зарегистрированные магазины",
];

const ProtectionSection = () => (
  <section id="protection" className="py-20 sm:py-28">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-destructive text-sm tracking-[0.3em] uppercase font-body font-semibold mb-4">
          ГЛАВА IX · ЗАЩИТА
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          КАК ЗАЩИТИТЬ СЕБЯ
        </h2>
        <Shield className="w-12 h-12 text-success mx-auto" />
      </motion.div>

      <div className="max-w-2xl mx-auto space-y-4">
        {checklist.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-4 bg-card border border-border rounded-xl p-5 hover:border-success/30 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-4 h-4 text-success" />
            </div>
            <p className="text-foreground text-sm leading-relaxed">{item}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProtectionSection;
