import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useMemo } from "react";
import { useCountUp } from "./useCountUp";

const capsuleColors = ["#e63946", "#f4a261", "#2a9d8f", "#457b9d", "#e76f51", "#9b2226"];

const HeroSection = () => {
  const { count: victimCount, ref: victimRef } = useCountUp(23000, 2000);

  const capsules = useMemo(
    () =>
      Array.from({ length: 25 }, (_, i) => ({
        id: i,
        color: capsuleColors[i % capsuleColors.length],
        left: `${Math.random() * 100}%`,
        width: 10 + Math.random() * 18,
        duration: 6 + Math.random() * 10,
        delay: Math.random() * 8,
      })),
    []
  );

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-background to-background" />
      
      <div className="absolute inset-0 pointer-events-none">
        {capsules.map((c) => (
          <div
            key={c.id}
            className="absolute capsule-fall rounded-full opacity-40"
            style={{
              left: c.left,
              top: "-60px",
              width: `${c.width}px`,
              height: `${c.width * 2.2}px`,
              background: c.color,
              "--duration": `${c.duration}s`,
              "--delay": `${c.delay}s`,
              filter: "blur(1px)",
            } as React.CSSProperties}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-destructive text-sm tracking-[0.3em] uppercase font-body font-semibold mb-6"
        >
          ЖУРНАЛИСТСКОЕ РАССЛЕДОВАНИЕ
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 text-foreground leading-tight"
        >
          ОПАСНАЯ{" "}
          <span className="text-destructive">ДОБАВКА</span>
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-heading text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 leading-relaxed"
        >
          как нерегулируемый рынок БАДов убивает людей
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
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
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
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
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
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
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-destructive transition-colors group cursor-pointer"
        >
          <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">Листайте вниз</span>
          <ChevronDown className="w-8 h-8 bounce-arrow" />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
