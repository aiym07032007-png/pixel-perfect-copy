import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useMemo } from "react";

const capsuleColors = ["#E53E3E", "#F6E05E", "#38A169", "#4299E1", "#DD6B20", "#9F7AEA"];

const HeroSection = () => {
  const capsules = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        color: capsuleColors[i % capsuleColors.length],
        left: `${Math.random() * 100}%`,
        width: 12 + Math.random() * 20,
        duration: 6 + Math.random() * 10,
        delay: Math.random() * 8,
      })),
    []
  );

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Falling capsules */}
      <div className="absolute inset-0 pointer-events-none">
        {capsules.map((c) => (
          <div
            key={c.id}
            className="absolute capsule-fall rounded-full opacity-60"
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

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="section-title text-5xl sm:text-6xl lg:text-7xl !mb-4 text-gradient-gold"
        >
          ЗОЛОТАЯ КАПСУЛА
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-heading text-2xl sm:text-3xl lg:text-4xl text-foreground mb-8"
        >
          АНАТОМИЯ КАЗАХСТАНСКОГО ОБМАНА
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-lg sm:text-xl text-muted-foreground mb-4 font-body"
        >
          Иллюзия исцеления: как казахстанцы тратят миллиарды на риск в красивой упаковке
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="text-base text-muted-foreground mb-12 font-body"
        >
          От витаминного дефицита до реанимации. Расследование того, как индустрия БАДов в Казахстане стала неуправляемой
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="quote-block max-w-2xl mx-auto text-left mb-16"
        >
          <p className="text-base sm:text-lg">
            «Среди тех, кто принимает по 15–16 БАДов в день, есть пациенты,
            которые через время попадают в больницу с токсическим гепатитом.
            Они считали всё это безвредным.»
          </p>
          <p className="text-sm mt-3 text-muted-foreground not-italic">— Елена Павловна, инфекционист</p>
        </motion.div>

        <motion.a
          href="#stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group cursor-pointer"
        >
          <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">Листайте вниз</span>
          <ChevronDown className="w-8 h-8 bounce-arrow" />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
