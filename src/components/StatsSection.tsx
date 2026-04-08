import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useCountUp } from "./useCountUp";

const StatCard = ({
  value, suffix, label, delay, decimals = 0,
}: {
  value: number; suffix: string; label: string; delay: number; decimals?: number;
}) => {
  const { count, ref } = useCountUp(value, 1500, decimals);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.6 }}
      className="bg-card rounded-lg p-6 border-t-4 border-destructive text-center"
    >
      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-destructive font-body mb-2">
        {count}{suffix}
      </div>
      <p className="text-sm sm:text-base text-muted-foreground">{label}</p>
    </motion.div>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  useInView(ref, { once: true });

  return (
    <section id="stats" className="py-20 sm:py-28" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-destructive text-sm tracking-[0.3em] uppercase font-body font-semibold mb-4">
            ГЛАВА II · ЦИФРЫ
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            ГЛОБАЛЬНЫЙ АППЕТИТ
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          <StatCard value={152} suffix=" млрд ₸" label="потрачено на БАДы в 2024" delay={0} />
          <StatCard value={5} suffix="×" label="рост рынка за год" delay={0.15} />
          <StatCard value={62.7} suffix="%" label="казахстанцев принимают БАДы" delay={0.3} decimals={1} />
          <StatCard value={31} suffix="%" label="образцов не прошли проверку" delay={0.45} />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-card rounded-xl p-6 sm:p-8 border border-destructive/30 max-w-3xl mx-auto"
        >
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-destructive mb-4">
            🇰🇿 КАЗАХСТАН — ПУЛЬСИРУЮЩАЯ АНОМАЛИЯ
          </h3>
          <div className="grid sm:grid-cols-2 gap-3 text-sm sm:text-base">
            {[
              "💰 152 млрд тенге потрачено в 2024 году",
              "📈 Рост рынка: ×5 за один год",
              "👥 62,7% взрослых принимают БАДы",
              "⚠️ 31% проверенных образцов — брак",
              "🚫 30% рынка — контрабанда",
              "📱 838 нарушителей → заблокировано 9",
            ].map((item, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="text-foreground"
              >
                {item}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
