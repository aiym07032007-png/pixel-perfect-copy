import { motion } from "framer-motion";
import { Play } from "lucide-react";

const FamilySection = () => (
  <section id="family" className="py-20 sm:py-28">
    <div className="section-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
      >
        <span className="text-gradient-gold">40 000–50 000 ТЕНГЕ В МЕСЯЦ НА БАДы</span>
        <br />
        <span className="text-foreground text-2xl">ПОРТРЕТ СЕМЬИ</span>
      </motion.h2>

      {/* Video placeholder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-card rounded-xl overflow-hidden mb-10 max-w-3xl mx-auto border border-border"
      >
        <div className="aspect-video bg-secondary flex items-center justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <div className="relative z-10 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center mx-auto mb-3">
              <Play className="w-7 h-7 text-primary ml-1" />
            </div>
            <p className="text-foreground font-heading font-bold">ВИДЕОИНТЕРВЬЮ: Семья Мынбаевых</p>
            <p className="text-muted-foreground text-sm">ежемесячный бюджет на БАДы: 40-50к ₸</p>
          </div>
        </div>
      </motion.div>

      {/* Quote */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="quote-block max-w-2xl mx-auto mb-12"
      >
        <p>
          «Я читала, что у нас у всех дефицит магния, витамина D и железа.
          Зачем ждать, пока заболеешь? Лучше принимать профилактически.
          Дети здоровы — значит, помогает.»
        </p>
        <p className="text-sm mt-3 not-italic text-muted-foreground">— Гульмира Мынбаева, мама семьи</p>
      </motion.div>

      {/* Comparison bars */}
      <div className="max-w-xl mx-auto space-y-4 mb-8">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-foreground">БАДы (ежемесячно)</span>
            <span className="text-destructive font-semibold">40 000–50 000 ₸</span>
          </div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-4 bg-destructive rounded-full"
          />
        </div>
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-foreground">Лабораторное обследование (1 раз в год)</span>
            <span className="text-success font-semibold">15 000–25 000 ₸</span>
          </div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "50%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-4 bg-success rounded-full"
          />
        </div>
      </div>
      <p className="text-center text-muted-foreground text-sm italic font-heading">
        «Математика не в пользу индустрии»
      </p>

      {/* Sidebar stat */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-10 bg-card border border-border rounded-lg p-6 max-w-md mx-auto"
      >
        <p className="text-foreground text-sm mb-2">
          В семейном «протоколе»: <span className="text-primary font-bold">8–12 наименований БАДов</span> одновременно на взрослого.
        </p>
        <p className="text-muted-foreground text-sm">
          Консультация врача? «Нутрициолог в Instagram посмотрела симптомы» 🤦‍♀️
        </p>
      </motion.div>
    </div>
  </section>
);

export default FamilySection;
