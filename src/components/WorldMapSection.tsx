import { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface CountryData {
  id: string;
  name: string;
  flag: string;
  market: string;
  cagr: string;
  population: string;
  regulator: string;
  color: string;
  coords: [number, number];
  details?: string[];
  isAnomaly?: boolean;
}

const countries: CountryData[] = [
  {
    id: "USA", name: "США", flag: "🇺🇸",
    market: "$50+ млрд", cagr: "~7%", population: "75–79%",
    regulator: "FDA (не одобряет до продажи)",
    color: "hsl(0, 72%, 45%)", coords: [-98, 39],
    details: [
      "FDA не одобряет большинство БАДов до продажи",
      "Тысячи побочных эффектов фиксируются ежегодно",
      "23 000+ обращений в FDA ежегодно",
    ],
  },
  {
    id: "JPN", name: "Япония", flag: "🇯🇵",
    market: "$3–20 млрд", cagr: "—", population: "90%",
    regulator: "FOSHU с 1991",
    color: "hsl(0, 72%, 45%)", coords: [138, 36],
    details: [
      "90% населения принимают БАДы (luluskinstore.com)",
      "2024 — скандал Kobayashi Pharmaceutical",
      "5 погибших, 114 госпитализированных",
      "Причина: добавка с красным ферментированным рисом Benikoji Choleste Help",
    ],
  },
  {
    id: "KAZ", name: "Казахстан", flag: "🇰🇿",
    market: "152 млрд ₸ (~$330 млн)", cagr: "×5 за год", population: "62.7%",
    regulator: "КСЭК МЗ РК",
    color: "hsl(48, 90%, 60%)", coords: [67, 48], isAnomaly: true,
    details: [
      "💰 152 млрд тенге потрачено в 2024 году",
      "📈 Рост рынка: ×5 за один год",
      "👥 62,7% взрослых принимают БАДы",
      "⚠️ 31% проверенных образцов — не соответствуют стандартам",
      "🚫 30% рынка — контрабанда",
      "📱 838 нарушителей в соцсетях → заблокировано 9",
    ],
  },
  {
    id: "RUS", name: "Россия", flag: "🇷🇺",
    market: "~$3 млрд", cagr: "15–20%", population: "89%",
    regulator: "Роспотребнадзор + «Честный ЗНАК»",
    color: "hsl(45, 70%, 51%)", coords: [60, 56],
    details: ["Крупнейший рынок СНГ", "Многочисленные случаи фальсификации"],
  },
  {
    id: "GBR", name: "Великобритания", flag: "🇬🇧",
    market: "$2.5–3 млрд", cagr: "+34% после пандемии", population: "—",
    regulator: "FSA",
    color: "hsl(0, 72%, 45%)", coords: [-2, 54],
    details: [
      "С 2019 по 2024: более 130 смертей",
      "Нелегальные вещества продавались под видом БАДов",
      "Источник: BBC, март 2024",
    ],
  },
  {
    id: "DEU", name: "Германия", flag: "🇩🇪",
    market: "$5.36 млрд", cagr: "7%", population: "~73%",
    regulator: "BfR + Директива ЕС",
    color: "hsl(24, 80%, 49%)", coords: [10, 51],
    details: ["Строгий контроль в рамках директив ЕС", "Запрет на клеймы лечебных свойств"],
  },
  {
    id: "FRA", name: "Франция", flag: "🇫🇷",
    market: "$3–4 млрд", cagr: "7%", population: "~35%",
    regulator: "ANSES (строгий запрет клеймов)",
    color: "hsl(24, 80%, 49%)", coords: [2, 47],
    details: ["ANSES строго контролирует клеймы на упаковках", "Запрет на рекламу лечебных свойств"],
  },
  {
    id: "AUS", name: "Австралия", flag: "🇦🇺",
    market: "~$2 млрд", cagr: "8.3%", population: "~60%",
    regulator: "TGA — одна из строжайших ✅",
    color: "hsl(152, 56%, 39%)", coords: [134, -25],
    details: ["TGA — эталон мировой регуляции", "Обязательная регистрация всех добавок"],
  },
  {
    id: "IND", name: "Индия", flag: "🇮🇳",
    market: "~$5 млрд", cagr: "16%", population: "~25%",
    regulator: "FSSAI",
    color: "hsl(45, 70%, 51%)", coords: [78, 22],
    details: ["Быстрорастущий рынок с минимальным контролем", "Аюрведические добавки часто не проверяются"],
  },
  {
    id: "CHN", name: "Китай", flag: "🇨🇳",
    market: "$36 млрд", cagr: "3.4%", population: "40%+",
    regulator: "SAMR — обязательная регистрация",
    color: "hsl(0, 72%, 45%)", coords: [104, 35],
    details: ["Второй по величине рынок в мире", "Обязательная регистрация через SAMR"],
  },
  {
    id: "BRA", name: "Бразилия", flag: "🇧🇷",
    market: "~$3 млрд", cagr: "10%", population: "~30%",
    regulator: "ANVISA",
    color: "hsl(24, 80%, 49%)", coords: [-51, -14],
    details: ["ANVISA контролирует рынок", "Растущий спрос на «натуральные» добавки"],
  },
];

const countryIdMap: Record<string, string> = {
  "840": "USA", "156": "CHN", "276": "DEU", "250": "FRA",
  "826": "GBR", "392": "JPN", "643": "RUS", "398": "KAZ",
  "036": "AUS", "356": "IND", "076": "BRA",
};

const getCountryColor = (geoId: string) => {
  const mapped = countryIdMap[geoId];
  if (!mapped) return "hsl(var(--muted))";
  const c = countries.find((c) => c.id === mapped);
  return c?.color ?? "hsl(var(--muted))";
};

const MapTooltip = ({ country, position }: { country: CountryData; position: { x: number; y: number } }) => (
  <motion.div
    initial={{ opacity: 0, y: 5 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    className="fixed z-[100] pointer-events-none bg-card border border-border rounded-lg p-3 shadow-xl min-w-[220px]"
    style={{ left: position.x + 12, top: position.y - 10 }}
  >
    <div className="font-heading font-bold text-foreground text-sm mb-1">
      {country.flag} {country.name}
      {country.isAnomaly && <span className="text-destructive ml-2 text-xs">⚠️ АНОМАЛИЯ</span>}
    </div>
    <div className="space-y-0.5 text-xs text-muted-foreground">
      <p><span className="text-foreground">Рынок:</span> {country.market}</p>
      <p><span className="text-foreground">Потребляют:</span> {country.population}</p>
      <p><span className="text-foreground">Регулятор:</span> {country.regulator}</p>
    </div>
    <p className="text-[10px] text-destructive mt-1 italic">Нажмите для подробностей →</p>
  </motion.div>
);

const WorldMapSection = () => {
  const [hovered, setHovered] = useState<{ country: CountryData; pos: { x: number; y: number } } | null>(null);
  const [selected, setSelected] = useState<CountryData | null>(null);

  return (
    <section id="world-map" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-destructive text-sm tracking-[0.3em] uppercase font-body font-semibold mb-4">
            ГЛАВА III · ГЕОГРАФИЯ
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-2">
            РЫНОК БАДОВ: <span className="text-destructive">МИРОВАЯ КАРТА</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            Наведите на страну для краткой информации. Нажмите для подробностей.
          </p>
        </motion.div>

        {/* Desktop Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="hidden md:block bg-card/50 rounded-2xl border border-border p-4"
        >
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 130, center: [40, 35] }}
            style={{ width: "100%", height: "auto" }}
            viewBox="0 0 800 450"
          >
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const geoId = geo.id;
                  const mapped = countryIdMap[geoId];
                  const countryData = mapped ? countries.find((c) => c.id === mapped) : null;

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={getCountryColor(geoId)}
                      stroke="hsl(var(--border))"
                      strokeWidth={0.4}
                      style={{
                        default: { outline: "none", opacity: countryData ? 0.85 : 0.25 },
                        hover: { outline: "none", opacity: 1, cursor: countryData ? "pointer" : "default" },
                        pressed: { outline: "none" },
                      }}
                      onMouseMove={(e) => countryData && setHovered({ country: countryData, pos: { x: e.clientX, y: e.clientY } })}
                      onMouseLeave={() => setHovered(null)}
                      onClick={() => countryData && setSelected(countryData)}
                    />
                  );
                })
              }
            </Geographies>

            <Marker coordinates={[67, 48]}>
              <circle r={4} fill="hsl(var(--destructive))" opacity={0.6}>
                <animate attributeName="r" from="4" to="10" dur="1.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.6" to="0" dur="1.5s" repeatCount="indefinite" />
              </circle>
              <circle r={3} fill="hsl(var(--destructive))" />
              <text textAnchor="start" x={8} y={-2} className="fill-destructive text-[7px] font-bold">
                ⚠️ АНОМАЛИЯ
              </text>
            </Marker>
          </ComposableMap>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 justify-center mt-4 text-xs text-muted-foreground">
            {[
              { color: "hsl(0, 72%, 45%)", label: "Крупные / проблемные рынки" },
              { color: "hsl(24, 80%, 49%)", label: "Развитые рынки" },
              { color: "hsl(45, 70%, 51%)", label: "Быстрорастущие" },
              { color: "hsl(48, 90%, 60%)", label: "Аномалия (KZ)" },
              { color: "hsl(152, 56%, 39%)", label: "Строгая регуляция" },
            ].map((l) => (
              <div key={l.label} className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm inline-block" style={{ background: l.color }} />
                {l.label}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mobile cards */}
        <div className="md:hidden grid grid-cols-1 gap-3">
          {countries.map((c, i) => (
            <motion.button
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setSelected(c)}
              className={`text-left p-4 rounded-xl border transition-colors ${
                c.isAnomaly
                  ? "border-destructive/50 bg-destructive/5"
                  : "border-border bg-card hover:border-destructive/30"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-heading font-bold text-foreground">
                  {c.flag} {c.name}
                  {c.isAnomaly && <span className="text-destructive text-xs ml-2">⚠️</span>}
                </span>
                <span className="text-xs text-muted-foreground">{c.market}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {hovered && <MapTooltip country={hovered.country} position={hovered.pos} />}
      </AnimatePresence>

      <Sheet open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <SheetContent className="bg-background border-border overflow-y-auto">
          {selected && (
            <>
              <SheetHeader>
                <SheetTitle className="text-2xl font-heading">
                  {selected.flag} {selected.name}
                </SheetTitle>
                <SheetDescription>
                  {selected.isAnomaly ? "💊 ЗОНА АНОМАЛЬНОГО РОСТА" : "Рынок БАДов"}
                </SheetDescription>
              </SheetHeader>
              <div className="mt-6 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Рынок", value: selected.market },
                    { label: "CAGR", value: selected.cagr },
                    { label: "Потребляют", value: selected.population },
                    { label: "Регулятор", value: selected.regulator },
                  ].map((item) => (
                    <div key={item.label} className="bg-card rounded-lg p-3 border border-border">
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="text-sm font-bold text-foreground mt-1">{item.value}</p>
                    </div>
                  ))}
                </div>
                {selected.details && (
                  <div className="bg-card rounded-lg p-4 border border-destructive/30 space-y-2">
                    {selected.details.map((d, i) => (
                      <motion.p key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * i }} className="text-sm text-foreground">
                        {d}
                      </motion.p>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default WorldMapSection;
