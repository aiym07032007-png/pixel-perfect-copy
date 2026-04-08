import { motion } from "framer-motion";
import { Shield, Check } from "lucide-react";

const rules = [
  {
    num: "1",
    title: "Ни один БАД — без анализа крови",
    desc: "«Всем нужен магний» — это маркетинг, не медицина. Сдайте анализ крови. Узнайте, есть ли у вас реальный дефицит. Лабораторное обследование стоит от 5 000–25 000 тенге раз в год. Это дешевле, чем месячный запас бесполезных БАДов.",
    emoji: "🩸",
  },
  {
    num: "2",
    title: "Проверяйте регистрацию в реестре ЕАЭС",
    desc: "Если продукта нет в реестре — это контрабанда, независимо от красоты упаковки и количества подписчиков у блогера. Реестр ЕАЭС доступен онлайн. Пять минут вашего времени против года в реанимации.",
    emoji: "📋",
  },
  {
    num: "3",
    title: "«Натурально» НЕ равно «безопасно»",
    desc: "Цианид тоже натуральный. Аконит — это растение. Яд бледной поганки — органический. Слово «натуральный» в рекламе БАДов не означает ровным счётом ничего. Это маркетинговый термин без юридического содержания.",
    emoji: "☠️",
  },
];

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
          ЗАЩИТА
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          ВАША ЕДИНСТВЕННАЯ ЗАЩИТА — ЗНАНИЕ
        </h2>
        <Shield className="w-12 h-12 text-success mx-auto" />
      </motion.div>

      {/* Three main rules */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
        {rules.map((rule, i) => (
          <motion.div
            key={rule.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="bg-card border border-border rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">{rule.emoji}</span>
              </div>
              <div>
                <span className="text-destructive font-bold text-sm font-body">Правило №{rule.num}</span>
              </div>
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-3">{rule.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{rule.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Checklist */}
      <div className="max-w-2xl mx-auto">
        <h3 className="font-heading text-xl font-bold text-foreground text-center mb-6">
          ✅ Чеклист безопасности
        </h3>
        <div className="space-y-3">
          {checklist.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-4 bg-card border border-border rounded-xl p-4 hover:border-success/30 transition-colors"
            >
              <div className="w-7 h-7 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-success" />
              </div>
              <p className="text-foreground text-sm leading-relaxed">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProtectionSection;
