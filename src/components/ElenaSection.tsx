import { motion } from "framer-motion";
import VideoEmbed from "./VideoEmbed";
import InterviewBlock from "./InterviewBlock";
import eraLogo from "@/assets/era-logo.jpg";
import badsProducts from "@/assets/bads-products.jpg";

const questions = [
  { question: "Как вы пришли в бизнес с БАДами и пептидами?" },
  { question: "Как отличить качественный БАД от подделки?" },
  { question: "Как правильно выбирать БАДы без вреда для здоровья?" },
  { question: "Какие риски несёт бесконтрольный приём БАДов?" },
  { question: "Какова ответственность продавцов перед покупателями?" },
];

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
          Интервью с владелицей интернет-магазина «Новая Эра» (peptidi.kz),
          Алматы, ул. Аносова 42
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-10 mb-12">
        {/* Left: info + photo */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <img
              src={eraLogo}
              alt="Логотип Новая Эра"
              className="w-16 h-16 rounded-lg object-contain bg-white p-1 border border-border"
            />
            <div>
              <p className="font-heading font-bold text-foreground">«Новая Эра»</p>
              <p className="text-muted-foreground text-sm">peptidi.kz · Алматы</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden border border-border mb-6"
          >
            <img src={badsProducts} alt="Продукция Новая Эра" className="w-full h-48 object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-lg p-4 text-sm text-muted-foreground space-y-2"
          >
            <p><strong className="text-foreground">Ассортимент:</strong> пептиды (Vitual, Nanopep, Peptide Bio, Цитамины, Цитомаксы, Цитогены), витамины, фитокомплексы, антиэйдж-косметика</p>
            <p><strong className="text-foreground">Услуги:</strong> бесплатные консультации, доставка по Казахстану и СНГ</p>
            <p><strong className="text-foreground">Приложение:</strong> App Store (id6748224956), Google Play (kz.insales.peptidiapp)</p>
          </motion.div>
        </div>

        {/* Right: video + interview */}
        <div>
          <div className="mb-8">
            <VideoEmbed
              label="Видео-интервью с Еленой (peptidi.kz) — будет добавлено"
              src="/media/video-interview-1.mp4"
            />
          </div>
        </div>
      </div>

      {/* Q&A */}
      <div className="max-w-3xl mx-auto">
        <h3 className="font-heading font-bold text-foreground text-xl mb-6">
          Вопросы к Елене:
        </h3>
        <InterviewBlock
          questions={questions}
          interviewee="Елены"
          role="владелица peptidi.kz"
        />
      </div>
    </div>
  </section>
);

export default ElenaSection;
