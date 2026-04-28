import { motion } from "framer-motion";
import VideoEmbed from "./VideoEmbed";
import { Users, AlertTriangle } from "lucide-react";

const GulmiraSection = () => {
  return (
    <section id="gulmira" className="py-20 sm:py-28 relative">
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
            ГЛАВА II · КОГДА БАДЫ ЗАБИРАЮТ СЕМЬЮ
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            СЕМЬЯ <span className="text-destructive">МЫНБАЕВЫХ</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Они верили, что БАДы — это здоровье. Они ошибались.
          </p>
        </motion.div>

        {/* Emotional intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-10"
        >
          <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <Users className="w-10 h-10 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-foreground font-heading font-bold text-xl mb-3">
                  Обычная казахстанская семья. Необычная трагедия.
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  <span className="text-destructive font-semibold">30-летняя женщина из Мангистауской области</span> хотела похудеть к свадьбе. Купила БАД в Instagram. Чуть не погибла. Теперь это история семьи Мынбаевых.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Гульмира Мынбаева доверилась индустрии, которая обещала здоровье. Красивые банки, восторженные
                  отзывы в Instagram, советы «экспертов» из TikTok. Семья начала принимать БАДы — сначала один,
                  потом два, потом по десять в день. <span className="text-destructive font-semibold">Каждая банка стоила от 30 000 тенге</span>. Она покупала по 2-3 банки одновременно.
                  За месяц семья тратила больше, чем на еду.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Но в отличие от рекламных обещаний, реальность оказалась неоднозначной. Гульмира начала давать БАДы своим дочерям — Адие Аширбековой и её младшей сестре — в период коронавируса, после 2020 года, когда девочки начали болеть. Поначалу всё шло хорошо, семья сама рекомендовала эти продукты другим и верила в их пользу. Даже сын Гульмиры, особенный ребёнок, по словам семьи, начал быстрее развиваться и умнеть.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Но после последнего курса начались побочные эффекты. Компания не реагировала и не отвечала на вопросы. Траты на БАДы были немалыми — однако семья не считает это катастрофой. Гульмира и её близкие живут обычной жизнью, как тысячи казахстанских семей. Просто теперь они знают больше.
                </p>
                <p className="text-foreground font-semibold">
                  Это не история из интернета. Это реальная казахстанская семья. И таких — тысячи.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hero image with BADs collection */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-6"
        >
          <div className="rounded-2xl overflow-hidden border-2 border-border bg-card/30">
            <img
              src="/media/photo_2026-04-28_09-27-12.jpg"
              alt="Коллекция всех БАДов семьи Мынбаевых"
              className="w-full h-auto"
            />
          </div>
          <p className="text-center text-destructive font-bold mt-4 text-lg">
            💊 Коллекция всех БАДов семьи Мынбаевых
          </p>
        </motion.div>

        {/* Video interview */}
        <div className="max-w-3xl mx-auto mb-8">
          <VideoEmbed label="Интервью с семьёй Гульмиры Мынбаевой — видео будет добавлено" />
        </div>
        {/* Stats: how many families */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-10"
        >
          <div className="bg-card rounded-2xl border border-border p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-destructive" />
              <h3 className="text-foreground font-heading font-bold text-lg">Масштаб проблемы</h3>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-destructive/5 rounded-lg border border-destructive/10">
                <p className="text-3xl font-bold text-destructive">30 000₸</p>
                <p className="text-xs text-muted-foreground mt-1">стоимость одной банки БАД</p>
              </div>
              <div className="text-center p-4 bg-destructive/5 rounded-lg border border-destructive/10">
                <p className="text-3xl font-bold text-destructive">2-3</p>
                <p className="text-xs text-muted-foreground mt-1">банки в месяц покупала семья</p>
              </div>
              <div className="text-center p-4 bg-destructive/5 rounded-lg border border-destructive/10">
                <p className="text-3xl font-bold text-destructive">100K+₸</p>
                <p className="text-xs text-muted-foreground mt-1">в месяц на поддельные БАДы</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mt-4 text-center">
              Семья Мынбаевых потеряла не только здоровье, но и деньги. Сотни тысяч тенге — на то, что разрушило их жизнь.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default GulmiraSection;
