import { motion } from "framer-motion";
import AudioPlayer from "./AudioPlayer";
import ExpertQuote from "./ExpertQuote";
import VideoEmbed from "./VideoEmbed";

const ExpertSection = () => (
  <section id="expert" className="py-20 sm:py-28 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0a0a0a]/30 to-background" />
    
    <div className="section-container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-destructive text-sm tracking-[0.3em] uppercase font-body font-semibold mb-4">
          ГЛАВА IX · МНЕНИЕ ЭКСПЕРТА
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
          ЕЛЕНА ПАВЛОВА
        </h2>
        <p className="text-muted-foreground mt-2">Инфекционист</p>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-8">
        <ExpertQuote
          author="Елена Павлова"
          role="Инфекционист"
          quote="Среди тех, кто принимает по 15–16 БАДов в день, есть пациенты, которые через время попадают в больницу с токсическим гепатитом. Они считали всё это безвредным."
        />

        <AudioPlayer label="Аудио-комментарий инфекциониста Елены Павловой о БАДах — будет добавлено" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="rounded-xl border-2 border-dashed border-border bg-card/30 p-6"
        >
          <p className="text-muted-foreground/50 text-sm mb-2">
            📝 Позиция эксперта — текст будет добавлен (3-4 абзаца)
          </p>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-4 bg-muted/30 rounded w-full" />
            ))}
            <div className="h-4 bg-muted/30 rounded w-3/4" />
          </div>
        </motion.div>

        <VideoEmbed
          label="Видео-комментарий Елены Павловой"
          src="/media/video-interview-2.mp4"
        />
      </div>
    </div>
  </section>
);

export default ExpertSection;
