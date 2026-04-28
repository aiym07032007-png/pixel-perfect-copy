import { motion } from "framer-motion";
const ElenaSection = () => (
  <section id="elena" className="py-20 sm:py-28">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-destructive text-sm tracking-[0.3em] uppercase font-body font-semibold mb-4">
          ГЛАВА VIII · ГОЛОС ИНДУСТРИИ
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          ЕЛЕНА — ВЛАДЕЛИЦА PEPTIDI.KZ
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Краткая справка о магазине peptidi.kz без дополнительных медиа-блоков
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-6 sm:p-8 space-y-4 text-sm leading-relaxed text-muted-foreground"
      >
        <p>
          <strong className="text-foreground">Ассортимент:</strong> пептиды
          (Vitual, Nanopep, Peptide Bio, Цитамины, Цитомаксы, Цитогены),
          витамины, фитокомплексы, антиэйдж-косметика.
        </p>
        <p>
          <strong className="text-foreground">Услуги:</strong> бесплатные
          консультации, доставка по Казахстану и СНГ.
        </p>
        <p>
          <strong className="text-foreground">Приложение:</strong> App Store
          (id6748224956), Google Play (kz.insales.peptidiapp).
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-8 rounded-2xl overflow-hidden border-2 border-border bg-card"
      >
        <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-border bg-muted/20">
          <div>
            <p className="text-foreground font-semibold">Сайт магазина</p>
            <p className="text-xs text-muted-foreground">Можно открыть и листать прямо внутри страницы</p>
          </div>
          <a
            href="https://www.peptidi.kz/"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-destructive hover:underline whitespace-nowrap"
          >
            Открыть сайт
          </a>
        </div>

        <iframe
          src="https://www.peptidi.kz/"
          title="peptidi.kz"
          className="w-full h-[720px]"
          frameBorder="0"
        />
      </motion.div>
    </div>
  </section>
);

export default ElenaSection;
