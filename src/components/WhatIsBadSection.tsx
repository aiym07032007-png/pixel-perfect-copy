import { motion } from "framer-motion";
import { Pill, FlaskConical, HeartPulse, ShieldAlert, FileCheck } from "lucide-react";
import badsProducts from "@/assets/bads-products.jpg";
import rastoropsha from "@/assets/rastoropsha.jpg";

const badTypes = [
  {
    icon: Pill,
    title: "Нутрицевтики",
    desc: "Витамины, минералы, аминокислоты, полиненасыщенные жирные кислоты",
  },
  {
    icon: FlaskConical,
    title: "Парафармацевтики",
    desc: "Растительные экстракты, адаптогены, пробиотики, ферменты",
  },
  {
    icon: HeartPulse,
    title: "Пробиотики",
    desc: "Живые микроорганизмы для нормализации микрофлоры кишечника",
  },
];

const diffs = [
  { med: "Проходит многолетние клинические испытания", bad: "Только санитарная экспертиза" },
  { med: "Должно доказать эффективность", bad: "Эффективность не проверяется" },
  { med: "Продаётся по рецепту", bad: "Продаётся свободно, даже через Instagram" },
  { med: "Производитель несёт ответственность за вред", bad: "Практически никакой ответственности" },
];

const WhatIsBadSection = () => (
  <section id="what-is-bad" className="py-20 sm:py-28">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-6"
      >
        <p className="text-destructive text-sm tracking-[0.3em] uppercase font-body font-semibold mb-4">
          ГЛАВА III · ОПРЕДЕЛЕНИЕ
        </p>
        <h2 className="section-title">
          <span className="text-destructive">БАД — ЭТО НЕ ЛЕКАРСТВО</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto mb-12 space-y-4 text-muted-foreground text-base leading-relaxed"
      >
        <p>
          <strong className="text-foreground">Биологически активная добавка (БАД)</strong> — продукт, 
          содержащий витамины, минералы, растительные экстракты или другие активные вещества, 
          предназначенный для дополнения рациона. Ключевое слово здесь — <em>«дополнение»</em>. 
          БАДы официально классифицируются как пищевые продукты, а не лекарственные препараты.
        </p>
        <p className="text-foreground font-semibold">
          По сути, БАДы живут в серой зоне: они обещают лечебный эффект, но юридически числятся как еда. 
          Красиво придуманная лазейка для миллиардного бизнеса.
        </p>
      </motion.div>

      {/* Types */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {badTypes.map((type, i) => (
          <motion.div
            key={type.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card border border-border rounded-xl p-6 text-center"
          >
            <div className="w-14 h-14 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
              <type.icon className="w-7 h-7 text-destructive" />
            </div>
            <h3 className="font-heading font-bold text-foreground text-lg mb-2">{type.title}</h3>
            <p className="text-muted-foreground text-sm">{type.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Photo block */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden border border-border"
        >
          <img src={badsProducts} alt="Продукция БАДов Новая Эра" className="w-full h-64 object-cover" />
          <div className="p-3 bg-card">
            <p className="text-xs text-muted-foreground">Продукция «Новая Эра» — типичные БАДы на казахстанском рынке</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden border border-border"
        >
          <img src={rastoropsha} alt="Рекламный материал БАДов" className="w-full h-64 object-cover" />
          <div className="p-3 bg-card">
            <p className="text-xs text-muted-foreground">Рекламные обещания: «профилактика», «восстановление», «снижение» — без доказательств</p>
          </div>
        </motion.div>
      </div>

      {/* BAD vs Medicine - critical difference */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h3 className="font-heading font-bold text-foreground text-xl text-center mb-2">
          <ShieldAlert className="inline w-5 h-5 text-destructive mr-2" />
          Критическая разница
        </h3>
        <p className="text-center text-muted-foreground text-sm mb-6">
          Это означает принципиально разный уровень контроля:
        </p>
        <div className="grid grid-cols-2 gap-4 mb-2">
          <p className="text-center font-heading font-bold text-success text-sm sm:text-base">✅ ЛЕКАРСТВО</p>
          <p className="text-center font-heading font-bold text-destructive text-sm sm:text-base">⚠️ БАД</p>
        </div>
        {diffs.map((row, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="grid grid-cols-2 gap-4 py-3 border-b border-border"
          >
            <p className="text-sm text-foreground">{row.med}</p>
            <p className="text-sm text-destructive/80">{row.bad}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-2 mt-8 text-xs text-muted-foreground"
      >
        <FileCheck className="w-4 h-4" />
        Регулятор: Комитет охраны общественного здоровья МЗ РК + ТР ТС 021/2011
      </motion.div>
    </div>
  </section>
);

export default WhatIsBadSection;
