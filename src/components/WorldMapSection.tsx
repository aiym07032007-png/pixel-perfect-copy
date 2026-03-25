import { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
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
    id: "USA",
    name: "США",
    flag: "🇺🇸",
    market: "$63–70 млрд",
    cagr: "~7%",
    population: "75–79%",
    regulator: "FDA (без предмаркетинга)",
    color: "hsl(0, 72%, 56%)",
    coords: [-98, 39],
  },
  {
    id: "CHN",
    name: "Китай",
    flag: "🇨🇳",
    market: "$36 млрд",
    cagr: "3.4%",
    population: "40%+",
    regulator: "SAMR — обязательная регистрация",
    color: "hsl(0, 72%, 56%)",
    coords: [104, 35],
  },
  {
    id: "DEU",
    name: "Германия",
    flag: "🇩🇪",
    market: "$5.36 млрд",
    cagr: "7%",
    population: "~73%",
    regulator: "BfR + Директива ЕС",
    color: "hsl(24, 80%, 49%)",
    coords: [10, 51],
  },
  {
    id: "FRA",
    name: "Франция",
    flag: "🇫🇷",
    market: "$3–4 млрд",
    cagr: "7%",
    population: "~35%",
    regulator: "ANSES (строгий запрет клеймов)",
    color: "hsl(24, 80%, 49%)",
    coords: [2, 47],
  },
  {
    id: "GBR",
    name: "Великобритания",
    flag: "🇬🇧",
    market: "$2.5–3 млрд",
    cagr: "+34% после пандемии",
    population: "—",
    regulator: "FSA",
    color: "hsl(24, 80%, 49%)",
    coords: [-2, 54],
  },
  {
    id: "JPN",
    name: "Япония",
    flag: "🇯🇵",
    market: "$3–20 млрд",
    cagr: "—",
    population: "системное",
    regulator: "FOSHU с 1991 года",
    color: "hsl(24, 80%, 49%)",
    coords: [138, 36],
  },
  {
    id: "RUS",
    name: "Россия",
    flag: "🇷🇺",
    market: "~$3 млрд",
    cagr: "15–20%",
    population: "89%",
    regulator: "Роспотребнадзор + «Честный ЗНАК»",
    color: "hsl(45, 70%, 51%)",
    coords: [60, 56],
  },
  {
    id: "KAZ",
    name: "Казахстан",
    flag: "🇰🇿",
    market: "152 млрд ₸ (~$330 млн)",
    cagr: "×5 за год",
    population: "62.7%",
    regulator: "КСЭК МЗ РК",
    color: "hsl(48, 90%, 67%)",
    coords: [67, 48],
    isAnomaly: true,
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
    id: "AUS",
    name: "Австралия",
    flag: "🇦🇺",
    market: "~$2 млрд",
    cagr: "8.3%",
    population: "~60%",
    regulator: "TGA — одна из строжайших ✅",
    color: "hsl(152, 56%, 39%)",
    coords: [134, -25],
  },
];

const countryIdMap: Record<string, string> = {
  "840": "USA",
  "156": "CHN",
  "276": "DEU",
  "250": "FRA",
  "826": "GBR",
  "392": "JPN",
  "643": "RUS",
  "398": "KAZ",
  "036": "AUS",
  // Italy
  "380": "ITA_EU",
};

const getCountryColor = (geoId: string) => {
  const mapped = countryIdMap[geoId];
  if (!mapped) return "hsl(var(--muted))";
  const c = countries.find((c) => c.id === mapped);
  return c?.color ?? "hsl(var(--muted))";
};

const Tooltip = ({
  country,
  position,
}: {
  country: CountryData;
  position: { x: number; y: number };
}) => (
  <motion.div
    initial={{ opacity: 0, y: 5 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    className="fixed z-[100] pointer-events-none bg-card border border-border rounded-lg p-3 shadow-xl min-w-[220px]"
    style={{ left: position.x + 12, top: position.y - 10 }}
  >
    <div className="font-heading font-bold text-foreground text-sm mb-1">
      {country.flag} {country.name}
      {country.isAnomaly && (
        <span className="text-primary ml-2 text-xs">⚠️ АНОМАЛИЯ</span>
      )}
    </div>
    <div className="space-y-0.5 text-xs text-muted-foreground">
      <p>
        <span className="text-foreground">Рынок:</span> {country.market}
      </p>
      <p>
        <span className="text-foreground">CAGR:</span> {country.cagr}
      </p>
      <p>
        <span className="text-foreground">Потребляют:</span>{" "}
        {country.population}
      </p>
      <p>
        <span className="text-foreground">Регулятор:</span>{" "}
        {country.regulator}
      </p>
    </div>
    {country.isAnomaly && (
      <p className="text-[10px] text-primary mt-1 italic">
        Нажмите для подробностей →
      </p>
    )}
  </motion.div>
);

const WorldMapSection = () => {
  const [hovered, setHovered] = useState<{
    country: CountryData;
    pos: { x: number; y: number };
  } | null>(null);
  const [selected, setSelected] = useState<CountryData | null>(null);

  const handleMouseMove = (
    e: React.MouseEvent,
    country: CountryData
  ) => {
    setHovered({ country, pos: { x: e.clientX, y: e.clientY } });
  };

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center mb-4"
        >
          <span className="text-gradient-gold">КАРТА МИРА</span>
          <br />
          <span className="text-foreground text-xl sm:text-2xl">
            КТО ГЛОТАЕТ БОЛЬШЕ ВСЕХ
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto text-sm"
        >
          Наведите на страну, чтобы увидеть данные. Нажмите для подробностей.
        </motion.p>

        {/* Desktop Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="hidden md:block bg-card/50 rounded-2xl border border-border p-4 relative"
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
                  const countryData = mapped
                    ? countries.find((c) => c.id === mapped)
                    : null;

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={getCountryColor(geoId)}
                      stroke="hsl(var(--border))"
                      strokeWidth={0.4}
                      style={{
                        default: { outline: "none", opacity: countryData ? 0.85 : 0.3 },
                        hover: {
                          outline: "none",
                          opacity: 1,
                          fill: countryData
                            ? countryData.color
                            : "hsl(var(--muted-foreground))",
                          cursor: countryData ? "pointer" : "default",
                        },
                        pressed: { outline: "none" },
                      }}
                      onMouseMove={(e) => {
                        if (countryData) handleMouseMove(e, countryData);
                      }}
                      onMouseLeave={() => setHovered(null)}
                      onClick={() => {
                        if (countryData) setSelected(countryData);
                      }}
                    />
                  );
                })
              }
            </Geographies>

            {/* Kazakhstan pulsing marker */}
            <Marker coordinates={[67, 48]}>
              <circle r={4} fill="hsl(var(--primary))" opacity={0.6}>
                <animate
                  attributeName="r"
                  from="4"
                  to="10"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.6"
                  to="0"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle r={3} fill="hsl(var(--primary))" />
              <text
                textAnchor="start"
                x={8}
                y={-2}
                className="fill-primary text-[7px] font-bold"
              >
                ⚠️ АНОМАЛИЯ
              </text>
            </Marker>
          </ComposableMap>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 justify-center mt-4 text-xs text-muted-foreground">
            {[
              { color: "hsl(0, 72%, 56%)", label: "Крупнейшие рынки" },
              { color: "hsl(24, 80%, 49%)", label: "Развитые рынки" },
              { color: "hsl(45, 70%, 51%)", label: "Быстрорастущие" },
              { color: "hsl(48, 90%, 67%)", label: "Аномалия (KZ)" },
              { color: "hsl(152, 56%, 39%)", label: "Строгая регуляция" },
            ].map((l) => (
              <div key={l.label} className="flex items-center gap-1.5">
                <span
                  className="w-3 h-3 rounded-sm inline-block"
                  style={{ background: l.color }}
                />
                {l.label}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mobile: country cards */}
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
                  ? "border-primary/50 bg-primary/5 pulse-gold"
                  : "border-border bg-card hover:border-primary/30"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-heading font-bold text-foreground">
                  {c.flag} {c.name}
                  {c.isAnomaly && (
                    <span className="text-primary text-xs ml-2">
                      ⚠️ АНОМАЛИЯ
                    </span>
                  )}
                </span>
                <span className="text-xs text-muted-foreground">
                  {c.market}
                </span>
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                CAGR: {c.cagr} · Потребление: {c.population}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Hover tooltip */}
      <AnimatePresence>
        {hovered && (
          <Tooltip country={hovered.country} position={hovered.pos} />
        )}
      </AnimatePresence>

      {/* Click detail sheet */}
      <Sheet open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <SheetContent className="bg-background border-border overflow-y-auto">
          {selected && (
            <>
              <SheetHeader>
                <SheetTitle className="text-2xl font-heading">
                  {selected.flag} {selected.name}
                </SheetTitle>
                <SheetDescription>
                  {selected.isAnomaly
                    ? "💊 ЗОНА АНОМАЛЬНОГО РОСТА"
                    : "Рынок биологически активных добавок"}
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
                    <div
                      key={item.label}
                      className="bg-card rounded-lg p-3 border border-border"
                    >
                      <p className="text-xs text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="text-sm font-bold text-foreground mt-1">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                {selected.details && (
                  <div className="bg-card rounded-lg p-4 border border-primary/30 space-y-2 mt-4">
                    {selected.details.map((d, i) => (
                      <motion.p
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                        className="text-sm text-foreground"
                      >
                        {d}
                      </motion.p>
                    ))}
                    <p className="text-xs text-muted-foreground italic mt-3 font-heading">
                      «Наша страна — идеальная питательная среда для индустрии,
                      продающей надежду в капсуле.»
                    </p>
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
