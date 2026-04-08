import { motion } from "framer-motion";

const bars = [
  { label: "Женщины принимают БАД", value: 72.8, color: "bg-destructive" },
  { label: "По назначению врача", value: 43.1, color: "bg-success" },
  { label: "Мужчины принимают БАД", value: 50.4, color: "bg-destructive/70" },
  { label: "По совету знакомых", value: 19.8, color: "bg-warning" },
  { label: "Самостоятельно (без врача)", value: 11.8, color: "bg-destructive" },
];

const PhenomenonSection = () => (
  <section id="phenomenon" className="py-20 sm:py-28">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-destructive text-sm tracking-[0.3em] uppercase font-body font-semibold mb-4">
          СОЦИОЛОГИЯ
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
          ФЕНОМЕН «ЗОЛОТОЙ ТАБЛЕТКИ»
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4 text-muted-foreground text-base leading-relaxed"
        >
          <p>
            Современный мир диктует жёсткие правила: быть продуктивным,
            молодым и здоровым одновременно. В погоне за этим идеалом
            казахстанцы массово потянулись к яркой баночке с обещанием
            вечной молодости.
          </p>
          <p>
            Пандемия COVID-19 породила <span className="text-destructive font-semibold">«коллективный страх смерти»</span>. 
            Витамины C, D и цинк сметались с полок. Страх — самый лучший маркетолог. 
            И индустрия БАДов это прекрасно знает.
          </p>
          <p>
            По данным Первого кредитного бюро, за 2024 год расходы граждан
            РК на добавки составили <span className="text-destructive font-semibold">152 млрд тенге</span> — в пять раз больше,
            чем годом ранее. Причём <strong className="text-foreground">11,8%</strong> делают это без консультации врача, 
            основываясь на советах из Instagram.
          </p>
          <p>
            Рынок растёт быстрее любой другой отрасли потребления.
            Блогеры, «нутрициологи» без медицинского образования
            и МЛМ-структуры формируют спрос, который никакой
            регулятор не успевает контролировать.
          </p>
        </motion.div>

        <div>
          <h3 className="font-heading text-lg text-foreground mb-6">Социология потребления</h3>
          <div className="space-y-4">
            {bars.map((bar, i) => (
              <motion.div
                key={bar.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-foreground">{bar.label}</span>
                  <span className="text-destructive font-semibold">{bar.value}%</span>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${bar.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${bar.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.15, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-6 p-4 bg-destructive/10 border border-destructive/30 rounded-lg"
          >
            <p className="text-sm text-foreground">
              ⚠️ <strong>11,8%</strong> — это люди, принимающие решения без врача,
              основываясь на советах блогеров.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default PhenomenonSection;
