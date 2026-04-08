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
  { med: "Проходит клинические испытания", bad: "Только санитарная экспертиза" },
  { med: "Доказанная эффективность", bad: "Эффективность не доказывается" },
  { med: "Продаётся по рецепту", bad: "Продаётся без рецепта" },
  { med: "Лечит болезни", bad: "НЕ является лекарством" },
];

const WhatIsBadSection = () => (
  <section id="what-is-bad" className="py-20 sm:py-28">
    <div className="section-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title text-center"
      >
        <span className="text-destructive">ЧТО ТАКОЕ БАДы</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-base leading-relaxed"
      >
        <strong className="text-foreground">БАД</strong> (Биологически активная добавка) — это концентрат
        натуральных или идентичных натуральным биологически активных веществ,
        предназначенный для непосредственного приёма или введения в состав
        пищевых продуктов. В Казахстане БАДы регулируются Комитетом охраны
        общественного здоровья МЗ РК и Техническим регламентом Таможенного союза.
      </motion.p>

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

      {/* BAD vs Medicine */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h3 className="font-heading font-bold text-foreground text-xl text-center mb-6">
          <ShieldAlert className="inline w-5 h-5 text-destructive mr-2" />
          Чем БАД отличается от лекарства
        </h3>
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
