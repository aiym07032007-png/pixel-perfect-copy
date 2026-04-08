import { useState, useEffect } from "react";

const navItems = [
  { id: "hero", label: "Обложка" },
  { id: "what-is-bad", label: "Что такое БАД" },
  { id: "stats", label: "Статистика" },
  { id: "world-map", label: "Карта" },
  { id: "phenomenon", label: "Феномен" },
  { id: "price", label: "Цена" },
  { id: "danger", label: "Опасность" },
  { id: "legal", label: "Закон" },
  { id: "gulmira", label: "Гульмира" },
  { id: "elena", label: "Елена" },
  { id: "expert", label: "Эксперт" },
  { id: "metabody", label: "Альтернатива" },
  { id: "chlorophyll", label: "Хлорофилл" },
  { id: "timeline", label: "Хронология" },
  { id: "protection", label: "Защита" },
];

const StickyNav = () => {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);

      // Progress bar
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);

      const sections = navItems.map((item) => {
        const el = document.getElementById(item.id);
        if (!el) return { id: item.id, top: Infinity };
        return { id: item.id, top: Math.abs(el.getBoundingClientRect().top) };
      });
      const closest = sections.reduce((a, b) => (a.top < b.top ? a : b));
      setActiveSection(closest.id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Progress bar */}
      <div className="h-[3px] bg-muted/30">
        <div
          className="h-full bg-destructive transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <div className="bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 flex items-center gap-1 h-11 overflow-x-auto">
          <span className="text-destructive font-heading font-bold text-xs mr-3 whitespace-nowrap tracking-wide">
            ОПАСНАЯ ДОБАВКА
          </span>
          {navItems.slice(1).map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-[11px] px-2 py-1 rounded whitespace-nowrap transition-colors ${
                activeSection === item.id
                  ? "text-destructive font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default StickyNav;
