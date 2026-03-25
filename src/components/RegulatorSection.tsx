import { motion } from "framer-motion";
import { useCountUp } from "./useCountUp";

const proposals = [
  "Обязательная проверка эффективности для БАД с клеймами",
  "Уголовная ответственность за БАД с психоактивными веществами",
  "Ответственность платформ (Kaspi, Instagram, TikTok)",
  "Открытая база данных токсических поражений",
];

const RegulatorSection = () => {
  const { count: nineCount, ref: nineRef } = useCountUp(9, 1200);

  return (
    <section id="regulator" className="py-20 sm:py-28">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center"
        >
          <span className="text-gradient-gold">9 ИЗ 838</span>
          <br />
          <span className="text-foreground text-2xl">ЭФФЕКТИВНОСТЬ РЕГУЛЯТОРА</span>
        </motion.h2>

        {/* Funnel */}
        <div className="max-w-lg mx-auto mb-16 space-y-2" ref={nineRef}>
          {[
            { value: "3 448", label: "проверенных рекламораспространителей", width: "100%" },
            { value: "838", label: "нарушений выявлено", width: "65%" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.3, duration: 0.6 }}
              style={{ width: item.width }}
              className="bg-card border border-border rounded-lg p-4 mx-auto text-center"
            >
              <p className="text-xl font-bold text-foreground font-body">{item.value}</p>
              <p className="text-xs text-muted-foreground">{item.label}</p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
            className="bg-destructive/10 border-2 border-destructive rounded-lg p-6 mx-auto text-center max-w-[200px]"
          >
            <p className="text-6xl font-black text-destructive font-body">{nineCount}</p>
            <p className="text-xs text-muted-foreground">заблокировано</p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
            className="text-center text-muted-foreground font-heading text-lg italic mt-4"
          >
            Девять. Из 838. = <span className="text-destructive font-bold">1,07%</span>
          </motion.p>
        </div>

        {/* Proposals */}
        <div className="max-w-xl mx-auto">
          <h3 className="font-heading text-xl font-bold text-foreground mb-6">ЧТО ДОЛЖНО ИЗМЕНИТЬСЯ:</h3>
          <div className="space-y-3">
            {proposals.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex items-start gap-3"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 + 0.3, type: "spring" }}
                  className="text-success text-lg"
                >
                  ✅
                </motion.span>
                <p className="text-foreground text-sm">{p}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-muted-foreground italic text-sm mt-6 font-heading">
            «Всё это уже давно сделано в Австралии, Японии, Китае.
            Казахстан пока учится на своих ошибках.»
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegulatorSection;
