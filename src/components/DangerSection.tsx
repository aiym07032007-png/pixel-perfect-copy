import { motion } from "framer-motion";
import { useState } from "react";
import { useCountUp } from "./useCountUp";

interface FlipCardProps {
  color: string;
  bgColor: string;
  emoji: string;
  zone: string;
  tagline: string;
  items: { icon: string; title: string; desc: string }[];
  delay: number;
}

const FlipCard = ({ color, bgColor, emoji, zone, tagline, items, delay }: FlipCardProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className={`flip-card cursor-pointer ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
      style={{ minHeight: 420 }}
    >
      <div className="flip-card-inner relative w-full" style={{ minHeight: 420 }}>
        <div className="flip-card-front absolute inset-0 bg-card rounded-xl border border-border flex flex-col items-center justify-center p-6">
          <div className={`w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-4 ${bgColor}`}>
            {emoji}
          </div>
          <h3 className={`font-heading text-xl font-bold mb-2 ${color}`}>{zone}</h3>
          <p className="text-muted-foreground text-center text-sm">{tagline}</p>
          <p className="text-xs text-muted-foreground mt-4">↻ Нажмите, чтобы перевернуть</p>
        </div>
        <div className="flip-card-back absolute inset-0 bg-card rounded-xl border border-border p-5 overflow-y-auto">
          <h4 className={`font-heading text-base font-bold mb-3 ${color}`}>{emoji} {zone}</h4>
          <div className="space-y-3">
            {items.map((item, i) => (
              <div key={i} className="text-sm">
                <p className="text-foreground font-semibold">{item.icon} {item.title}</p>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4 text-center">↻ Нажмите, чтобы вернуть</p>
        </div>
      </div>
    </motion.div>
  );
};

const DangerSection = () => {
  const { count: failCount, ref } = useCountUp(31, 1500);

  return (
    <section id="danger" className="py-20 sm:py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <p className="text-destructive text-sm tracking-[0.3em] uppercase font-body font-semibold mb-4">
            ГЛАВА IV · СВЕТОФОР СМЕРТИ
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-2">
            КЛАССИФИКАЦИЯ БАДОВ ПО ОПАСНОСТИ
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          Не все БАДы одинаково опасны. Перед вами честная классификация — без рекламных обещаний.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <FlipCard
            emoji="🟢" zone="ЗЕЛЁНАЯ ЗОНА" tagline="Условно безопасные"
            color="text-success" bgColor="bg-success/20" delay={0}
            items={[
              { icon: "✅", title: "Витамин D3 (1000–2000 МЕ)", desc: "При дозах до 2000 МЕ это минимальный риск. Но главный вопрос: есть ли у вас реальный дефицит? Сдайте анализ крови — вот вам и революционная идея." },
              { icon: "✅", title: "Витамины группы B", desc: "Излишки выводятся почками — «дорогая моча» в буквальном смысле. Но помните: витамины B1 и B6 взаимно разрушают друг друга, а кальций и железо являются антагонистами." },
              { icon: "✅", title: "Витамин C", desc: "При дозе свыше 250 мг за один приём абсорбция резко падает. Организм возьмёт 250 мг, остальное — в унитаз. Мегадозы витамина C — это дорогостоящая иллюзия." },
            ]}
          />
          <FlipCard
            emoji="🟡" zone="ЖЁЛТАЯ ЗОНА" tagline="Будьте осторожны"
            color="text-warning" bgColor="bg-warning/20" delay={0.15}
            items={[
              { icon: "⚠️", title: "Жирорастворимые в мегадозах (A, D, E, K)", desc: "Аккумулируются в печени и жировой ткани. Длительный приём высоких доз витамина D → гиперкальцемия и кальциноз сосудов. На рынке банки с 125 000% суточной нормы B12. Это не опечатка." },
              { icon: "⚠️", title: "Apetamin (сироп для набора веса)", desc: "Содержит ципрогептадин 2 мг — рецептурный препарат, маскирующийся в «витаминном» сиропе. Зафиксированы случаи острого гепатита с некрозом печени. Продаётся без рецепта." },
              { icon: "⚠️", title: "Жиросжигатели на стимуляторах", desc: "Кофеин 200+ мг, синефрин, гуарана, капсаицин, L-карнитин. L-карнитин образует ТМАО в кишечнике — то самое вещество, связанное с атеросклерозом. «Натуральный» коктейль для вашего сердца." },
            ]}
          />
          <FlipCard
            emoji="🔴" zone="КРАСНАЯ ЗОНА" tagline="Реальная угроза жизни"
            color="text-destructive" bgColor="bg-destructive/20" delay={0.3}
            items={[
              { icon: "🚨", title: "«Молекула» и её клоны (сибутрамин)", desc: "30-летняя женщина из Мангистауской области хотела похудеть перед свадьбой. Купила «Молекулу» в Instagram. Сердце остановилось на 5 минут. Неделю на ИВЛ. Выжила чудом. За 9 месяцев 2025 — выявлено 406 профилей, заблокировано 9." },
              { icon: "🚨", title: "SARMs (Ligandrol, RAD-140, Ostarine)", desc: "Незарегистрированные синтетические соединения. FDA: «Связаны с повышенным риском инфаркта, инсульта и рака печени». Продаются в Instagram как спортивное питание." },
              { icon: "🚨", title: "«Детокс-чаи» с сенной", desc: "~20 случаев острой печёночной недостаточности у молодых женщин. Один — летальный. Слово «детокс» не имеет медицинского смысла. Ваша печень и почки — вот ваш детокс, и они работают бесплатно." },
            ]}
          />
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center bg-card rounded-xl p-8 border border-border max-w-3xl mx-auto"
        >
          <p className="text-muted-foreground mb-2">Статистика проверок 2024 года: из 10 491 проверенного образца</p>
          <p className="text-5xl sm:text-6xl font-bold text-destructive font-body mb-2">{failCount}%</p>
          <p className="text-foreground text-lg mb-2">не соответствует требованиям безопасности.</p>
          <p className="text-muted-foreground text-sm">
            Изъято более <strong className="text-foreground">5,5 тонны</strong> продукции. 
            Цифры скучные, но за каждой — чья-то печень.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DangerSection;
