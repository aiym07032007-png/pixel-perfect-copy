import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { useCountUp } from "./useCountUp";

const HeroSection = () => {
  const { count: victimCount, ref: victimRef } = useCountUp(23000, 2000);
  const [videoEnded, setVideoEnded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Fallback: if video doesn't load, show content after 2s
    const fallback = setTimeout(() => {
      setVideoEnded(true);
      setShowContent(true);
    }, 8000);
    return () => clearTimeout(fallback);
  }, []);

  const handleVideoEnd = () => {
    setVideoEnded(true);
    setTimeout(() => setShowContent(true), 600);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark background always present */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-background to-background" />

      {/* Video intro overlay */}
      <AnimatePresence>
        {!videoEnded && (
          <motion.div
            className="absolute inset-0 z-30 flex items-center justify-center bg-[#d6dfe8]"
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <video
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnd}
              className="w-full h-full object-contain"
              style={{ maxHeight: "100vh" }}
            >
              <source src="/media/hero-capsules.mp4" type="video/mp4" />
            </video>
            {/* Skip button */}
            <button
              onClick={() => {
                setVideoEnded(true);
                setShowContent(true);
              }}
              className="absolute bottom-8 right-8 text-xs text-gray-500 hover:text-gray-800 transition-colors uppercase tracking-widest"
            >
              Пропустить →
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content - appears after video */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-4 max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={showContent ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-destructive text-sm tracking-[0.3em] uppercase font-body font-semibold mb-6"
        >
          ЖУРНАЛИСТСКОЕ РАССЛЕДОВАНИЕ
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={showContent ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 text-foreground leading-tight"
        >
          ОПАСНАЯ{" "}
          <span className="text-destructive">ДОБАВКА</span>
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={showContent ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-heading text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 leading-relaxed"
        >
          как нерегулируемый рынок БАДов убивает людей
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={showContent ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.1 }}
          className="text-base text-muted-foreground mb-10 font-body max-w-3xl mx-auto space-y-4"
        >
          <p>
            Вы принимаете БАДы? Если да, то эта статья может спасти вашу жизнь. 
            Если нет — возможно, она убережёт вас от роковой ошибки.
          </p>
          <p>
            Биологически активные добавки захватили мир. Они продаются в аптеках, 
            супермаркетах, Instagram-магазинах. Их рекламируют блогеры, советуют подруги, 
            иногда даже врачи.
          </p>
          <p className="text-foreground font-semibold">
            Эта статья — не просто разоблачение. Это научное расследование того, как красивая 
            упаковка и маркетинговые обещания превращают людей в жертв неконтролируемой 
            индустрии, где прибыль важнее жизни.
          </p>
        </motion.div>

        <motion.div
          ref={victimRef}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={showContent ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mb-10"
        >
          <p className="text-5xl sm:text-6xl font-bold text-destructive font-body">
            {victimCount.toLocaleString()}+
          </p>
          <p className="text-muted-foreground text-sm mt-2">
            случаев побочных эффектов от БАДов ежегодно регистрируется FDA
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={showContent ? { opacity: 1 } : {}}
          transition={{ delay: 1.7 }}
          className="quote-block max-w-2xl mx-auto text-left mb-16"
        >
          <p className="text-base sm:text-lg">
            «Ежегодно от некачественных БАДов в мире страдают миллионы людей.
            Казахстан — не исключение.»
          </p>
        </motion.div>

        <motion.a
          href="#what-is-bad"
          initial={{ opacity: 0 }}
          animate={showContent ? { opacity: 1 } : {}}
          transition={{ delay: 2 }}
          className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-destructive transition-colors group cursor-pointer"
        >
          <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">Листайте вниз</span>
          <ChevronDown className="w-8 h-8 bounce-arrow" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
