import { motion } from "framer-motion";
import { useState } from "react";
import VideoEmbed from "./VideoEmbed";
import AudioPlayer from "./AudioPlayer";
import { ChevronDown, ChevronUp } from "lucide-react";

const GulmiraSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="gulmira" className="py-20 sm:py-28 relative">
      {/* Chapter break */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-background to-background opacity-50" />
      
      <div className="section-container relative z-10">
        {/* Chapter heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-destructive text-sm tracking-[0.3em] uppercase font-body font-semibold mb-4">
            ГЛАВА IV · ЧЕЛОВЕЧЕСКАЯ ИСТОРИЯ
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            ГУЛЬМИРА МЫНБАЕВА
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            История казахстанской семьи, которая доверилась индустрии БАДов
          </p>
        </motion.div>

        {/* Hero image placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-10 rounded-2xl overflow-hidden border-2 border-dashed border-border bg-card/30"
        >
          <div className="aspect-[16/9] flex items-center justify-center p-8">
            <div className="text-center">
              <p className="text-6xl mb-4">👨‍👩‍👧</p>
              <p className="text-muted-foreground font-medium">Здесь будет фотография семьи Мынбаевых</p>
              <p className="text-muted-foreground/50 text-xs mt-1">Фото будет добавлено авторами</p>
            </div>
          </div>
        </motion.div>

        {/* Video interview */}
        <div className="max-w-3xl mx-auto mb-8">
          <VideoEmbed
            label="Интервью с семьёй Гульмиры Мынбаевой — видео будет добавлено"
          />
        </div>

        {/* Audio */}
        <div className="max-w-3xl mx-auto mb-10">
          <AudioPlayer label="Аудио свидетельство семьи Мынбаевых — будет добавлено" />
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="quote-block max-w-2xl mx-auto mb-10"
        >
          <div className="rounded-lg border-2 border-dashed border-border p-4 bg-card/30">
            <p className="text-muted-foreground/50 text-sm italic">
              💬 Цитата семьи Мынбаевых — будет добавлена авторами
            </p>
          </div>
        </motion.div>

        {/* Expandable full story */}
        <div className="max-w-2xl mx-auto text-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-destructive/10 border border-destructive/30 text-destructive hover:bg-destructive/20 transition-colors font-medium text-sm"
          >
            {expanded ? "Свернуть" : "Читать полную историю"}
            {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-6 rounded-lg border-2 border-dashed border-border p-6 bg-card/30 text-left"
            >
              <p className="text-muted-foreground/50 text-sm">
                👨‍👩‍👧 Здесь будет полная история семьи Мынбаевых.
                <br /><br />
                Текст будет добавлен авторами расследования. Планируемый объём: 3-5 абзацев
                о том, как семья столкнулась с последствиями бесконтрольного приёма БАДов.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GulmiraSection;
