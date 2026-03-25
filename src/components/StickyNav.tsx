import { useState, useEffect } from "react";

const navItems = [
  { id: "hero", label: "Главная" },
  { id: "stats", label: "Карта рынка" },
  { id: "phenomenon", label: "Феномен" },
  { id: "price", label: "Цена" },
  { id: "danger", label: "Светофор" },
  { id: "family", label: "Семья" },
  { id: "legal", label: "Закон" },
  { id: "regulator", label: "Регулятор" },
  { id: "epilogue", label: "Эпилог" },
];

const StickyNav = () => {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 flex items-center gap-1 h-12 overflow-x-auto">
        <span className="text-gradient-gold font-heading font-bold text-sm mr-4 whitespace-nowrap">
          ЗОЛОТАЯ КАПСУЛА
        </span>
        {navItems.slice(1).map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`text-xs px-2 py-1 rounded whitespace-nowrap transition-colors ${
              activeSection === item.id
                ? "text-primary font-semibold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default StickyNav;
