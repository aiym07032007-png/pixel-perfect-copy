import { motion } from "framer-motion";

const layers = [
  { label: "Сырьё $1.5–3", desc: "Оптовый порошок из Китая", color: "bg-success", height: 8 },
  { label: "Упаковка $4–6", desc: "Глянцевая крышка, крафтовая коробка", color: "bg-blue-500", height: 12 },
  { label: "Маркетинг $15–25", desc: "Блогеры, таргет, МЛМ", color: "bg-warning", height: 30 },
  { label: "Логистика $3–5", desc: "НДС 12%, таможня", color: "bg-muted-foreground", height: 10 },
  { label: "ИТОГО ~$25–40 → $60", desc: "", color: "bg-destructive", height: 15 },
];

const PriceSection = () => (
  <section id="price" className="py-20 sm:py-28">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-destructive text-sm tracking-[0.3em] uppercase font-body font-semibold mb-4">
          ГЛАВА V · ЭКОНОМИКА
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
          КАК ИЗ $2 ПОЛУЧАЕТСЯ $60
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col-reverse gap-1 max-w-xs mx-auto w-full">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.label}
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              style={{ height: `${layer.height * 3}px`, originY: 1 }}
              className={`${layer.color} rounded-sm flex items-center justify-center px-3`}
            >
              <span className="text-xs sm:text-sm font-semibold text-white text-center truncate">
                {layer.label}
              </span>
            </motion.div>
          ))}
        </div>

        <div>
          <div className="space-y-3 mb-8">
            {layers.map((layer, i) => (
              <motion.div
                key={layer.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex items-start gap-3"
              >
                <div className={`w-3 h-3 rounded-sm mt-1.5 flex-shrink-0 ${layer.color}`} />
                <div>
                  <p className="text-foreground font-semibold text-sm">{layer.label}</p>
                  {layer.desc && <p className="text-muted-foreground text-xs">{layer.desc}</p>}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="bg-card border border-destructive/30 rounded-lg p-6 text-center"
          >
            <p className="text-3xl sm:text-4xl font-bold text-destructive font-body mb-2">300–1000%</p>
            <p className="text-lg font-heading text-foreground">МАРЖИНАЛЬНОСТЬ</p>
            <p className="text-muted-foreground italic text-sm mt-2">
              «Добро пожаловать в бизнес по продаже надежды»
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default PriceSection;
