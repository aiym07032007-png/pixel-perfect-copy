import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface TimelineEvent {
  year: string;
  flag: string;
  country: string;
  title: string;
  details: string;
  source?: string;
}

const events: TimelineEvent[] = [
  {
    year: "2018",
    flag: "🇺🇸",
    country: "США",
    title: "FDA предупреждает о сотнях загрязнённых добавок",
    details: "FDA выявляет сотни добавок, содержащих незаявленные фармацевтические ингредиенты — сибутрамин, стероиды, силденафил. Многие продавались как «натуральные» средства для похудения и улучшения потенции.",
    source: "FDA.gov",
  },
  {
    year: "2019",
    flag: "🇬🇧",
    country: "Великобритания",
    title: "Начало отсчёта смертей от нелегальных веществ",
    details: "Начинается рост случаев смерти от нелегально продаваемых через интернет веществ, замаскированных под БАДы. К 2024 году число жертв превысит 130 человек.",
    source: "BBC, 2024",
  },
  {
    year: "2024",
    flag: "🇯🇵",
    country: "Япония",
    title: "Скандал Kobayashi Pharmaceutical: 5 погибших",
    details: "Kobayashi Pharmaceutical отзывает добавку Benikoji Choleste Help на основе красного ферментированного риса. 5 человек погибли, 114 госпитализированы. Причина — нарушение технологического процесса производства, приведшее к образованию токсичного побочного продукта.",
    source: "RG.ru, март 2024",
  },
  {
    year: "2024",
    flag: "🇬🇧",
    country: "Великобритания",
    title: "BBC: более 130 смертей от «добавок»",
    details: "BBC публикует расследование о продаже опасных веществ через интернет, позиционируемых как пищевые добавки. Связь с более чем 130 смертями за 5 лет. Вещества продавались через социальные сети и специализированные сайты.",
    source: "bbc.com/ukrainian/features-russian-46024427",
  },
  {
    year: "—",
    flag: "🇰🇿",
    country: "Казахстан",
    title: "История Гульмиры Мынбаевой",
    details: "Подробности истории будут добавлены авторами расследования. Случай, ставший отправной точкой для данного журналистского материала.",
  },
];

const TimelineCard = ({ event, index }: { event: TimelineEvent; index: number }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="relative pl-8 pb-10 border-l-2 border-border last:pb-0"
    >
      {/* Dot */}
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-destructive border-2 border-background" />
      
      <div className="bg-card border border-border rounded-xl p-5 hover:border-destructive/30 transition-colors">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">{event.flag}</span>
          <div>
            <span className="text-destructive font-bold font-body text-sm">{event.year}</span>
            <span className="text-muted-foreground text-sm ml-2">· {event.country}</span>
          </div>
        </div>
        <h4 className="font-heading font-bold text-foreground text-base mb-2">{event.title}</h4>
        
        <button
          onClick={() => setExpanded(!expanded)}
          className="inline-flex items-center gap-1.5 text-destructive text-xs hover:underline"
        >
          {expanded ? "Свернуть" : "Подробнее"}
          {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
        </button>

        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-3"
          >
            <p className="text-muted-foreground text-sm leading-relaxed">{event.details}</p>
            {event.source && (
              <p className="text-xs text-muted-foreground/60 mt-2 italic">Источник: {event.source}</p>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const TimelineSection = () => (
  <section id="timeline" className="py-20 sm:py-28">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-destructive text-sm tracking-[0.3em] uppercase font-body font-semibold mb-4">
          ГЛАВА VIII · ХРОНОЛОГИЯ
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
          МИРОВЫЕ СКАНДАЛЫ
        </h2>
      </motion.div>

      <div className="max-w-2xl mx-auto">
        {events.map((event, i) => (
          <TimelineCard key={i} event={event} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default TimelineSection;
