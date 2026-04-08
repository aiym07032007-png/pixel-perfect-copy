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
          className="text-center mb-6"
        >
          <p className="text-destructive text-sm tracking-[0.3em] uppercase font-body font-semibold mb-4">
            ГЛАВА II · ЦИФРЫ
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-2">
            ПЛАНЕТА БАДОВ — ПУГАЮЩАЯ СТАТИСТИКА
          </h2>
        </motion.div>

        {/* Global context */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-12 space-y-4 text-muted-foreground text-base leading-relaxed text-center"
        >
          <p>
            Глобальный рынок БАДов оценивается в <span className="text-destructive font-bold">$193–196 миллиардов</span> (2024–2025). 
            К 2030 году прогнозируется рост до $280–340 миллиардов. Это больше, чем автомобильная промышленность многих стран. 
            Индустрия растёт быстрее, чем медицинская наука успевает её регулировать.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          <StatCard value={193} suffix=" млрд $" label="глобальный рынок БАДов" delay={0} />
          <StatCard value={75} suffix="%" label="американцев принимают БАДы" delay={0.15} />
          <StatCard value={152} suffix=" млрд ₸" label="потрачено в Казахстане в 2024" delay={0.3} />
          <StatCard value={62.7} suffix="%" label="казахстанцев принимают БАДы" delay={0.45} decimals={1} />
        </div>

        {/* USA block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-8"
        >
          <div className="bg-card rounded-xl p-6 border border-border">
            <h3 className="font-heading text-lg font-bold text-foreground mb-3">
              🇺🇸 США: 75% населения принимают БАДы
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              В США объём рынка БАДов достиг <strong className="text-foreground">$63–70 миллиардов</strong>. 
              75% американцев регулярно принимают добавки. При этом FDA НЕ проверяет БАДы до выхода на рынок. 
              Производитель сам решает, безопасен ли продукт. Регулятор вмешивается только когда люди уже пострадали.
            </p>
            <div className="quote-block">
              <p className="text-sm">
                Представьте: пожарных вызывают только после того, как дом сгорел. 
                Именно так работает контроль за БАДами в крупнейшей экономике мира.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Kazakhstan block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-card rounded-xl p-6 sm:p-8 border border-destructive/30 max-w-3xl mx-auto"
        >
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-destructive mb-4">
            🇰🇿 КАЗАХСТАН — БУМ НА ФОНЕ ПАНДЕМИИ
          </h3>
          <div className="space-y-3 text-muted-foreground text-sm leading-relaxed mb-4">
            <p>
              В Казахстане за 2024 год граждане потратили на БАДы <strong className="text-foreground">152 миллиарда тенге</strong>. 
              Это в пять раз больше, чем годом ранее. 62,7% казахстанцев принимают витамины и добавки, 
              причём <span className="text-destructive font-semibold">11,8%</span> делают это без консультации врача, 
              основываясь на советах из Instagram.
            </p>
            <p className="text-foreground font-semibold">
              Пандемия COVID-19 породила «коллективный страх смерти». Витамины C, D и цинк сметались с полок. 
              Страх — самый лучший маркетолог. И индустрия БАДов это прекрасно знает.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
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
