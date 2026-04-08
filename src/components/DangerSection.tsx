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
      style={{ minHeight: 400 }}
    >
      <div className="flip-card-inner relative w-full" style={{ minHeight: 400 }}>
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
          className="text-center mb-12"
        >
          <p className="text-destructive text-sm tracking-[0.3em] uppercase font-body font-semibold mb-4">
            ГЛАВА VI · ХИМИЯ
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            СВЕТОФОР ОПАСНОСТИ
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <FlipCard
            emoji="🟢" zone="ЗЕЛЁНАЯ ЗОНА" tagline="Условно безопасные"
            color="text-success" bgColor="bg-success/20" delay={0}
            items={[
              { icon: "✅", title: "Витамин D3 (1000–2000 МЕ)", desc: "Риск минимален при соблюдении доз. ⚠️ Но сначала — анализ крови." },
              { icon: "✅", title: "Витамины группы B", desc: "Водорастворимые. Излишки выводятся. ⚠️ B1 и B6 взаимно разрушают друг друга." },
              { icon: "✅", title: "Витамин C", desc: "При >250 мг абсорбция падает. «Организм возьмёт 250 мг, остальное — сольёт»" },
            ]}
          />
          <FlipCard
            emoji="🟡" zone="ЖЁЛТАЯ ЗОНА" tagline="Будьте осторожны"
            color="text-warning" bgColor="bg-warning/20" delay={0.15}
            items={[
              { icon: "⚠️", title: "Жирорастворимые в мегадозах", desc: "Аккумулируются в печени. Высокие дозы D → гиперкальцемия." },
              { icon: "⚠️", title: "Apetamin", desc: "Содержит ципрогептадин — рецептурный. Кейс: острый гепатит, AST: 838, ALT: 997." },
              { icon: "⚠️", title: "Жиросжигатели", desc: "Кофеин 200+ мг + синефрин + гуарана. L-карнитин → ТМАО → атеросклероз." },
            ]}
          />
          <FlipCard
            emoji="🔴" zone="КРАСНАЯ ЗОНА" tagline="Реальная угроза жизни"
            color="text-destructive" bgColor="bg-destructive/20" delay={0.3}
            items={[
              { icon: "🚨", title: "«Молекула» (сибутрамин)", desc: "30-летняя женщина. Цель: похудеть. Результат: сердце остановилось на 5 минут." },
              { icon: "🚨", title: "SARMs (Ligandrol, RAD-140)", desc: "FDA: «повышенный риск инфаркта, инсульта и рака печени»." },
              { icon: "🚨", title: "«Детокс-чаи» с сенной", desc: "~20 случаев печёночной недостаточности у молодых женщин. Один — летальный." },
            ]}
          />
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center bg-card rounded-xl p-8 border border-border"
        >
          <p className="text-muted-foreground mb-2">Из 10 491 проверенного образца</p>
          <p className="text-5xl sm:text-6xl font-bold text-destructive font-body mb-2">{failCount}%</p>
          <p className="text-foreground text-lg">не соответствует стандартам безопасности.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default DangerSection;
