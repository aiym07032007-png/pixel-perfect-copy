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
import { ChevronDown, ChevronUp } from "lucide-react";

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
  region?: string;
}

const countries: CountryData[] = [
  // --- СЕВЕРНАЯ АМЕРИКА ---
  {
    id: "USA", name: "США", flag: "🇺🇸", region: "Северная Америка",
    market: "$68.7 млрд", cagr: "8.5%", population: "57–79%",
    regulator: "FDA (DSHEA 1994)",
    color: "hsl(0, 72%, 45%)", coords: [-98, 39],
    details: [
      "Крупнейший рынок БАДов в мире — $68.7 млрд (2024)",
      "FDA НЕ одобряет БАДы до продажи — контроль только постфактум",
      "23 000+ обращений о побочных эффектах ежегодно",
      "75% американцев регулярно принимают добавки",
      "DSHEA 1994 — основной регуляторный акт",
    ],
  },
  {
    id: "CAN", name: "Канада", flag: "🇨🇦", region: "Северная Америка",
    market: "$4–19 млрд", cagr: "6.3–9.5%", population: "—",
    regulator: "Health Canada (NHP)",
    color: "hsl(24, 80%, 49%)", coords: [-100, 56],
    details: [
      "Регулирование через Natural Health Products Regulations",
      "Требуется лицензия NHP для всех добавок",
      "Более строгий контроль, чем в США",
    ],
  },
  {
    id: "MEX", name: "Мексика", flag: "🇲🇽", region: "Северная Америка",
    market: "$1.7–7.6 млрд", cagr: "5–7.4%", population: "—",
    regulator: "COFEPRIS",
    color: "hsl(45, 70%, 51%)", coords: [-102, 23],
    details: [
      "Крупнейший рынок БАДов в Латинской Америке после Бразилии",
      "Регулирование через COFEPRIS",
    ],
  },
  // --- ЕВРОПА ---
  {
    id: "DEU", name: "Германия", flag: "🇩🇪", region: "Европа",
    market: "$5.36 млрд", cagr: "~6%", population: "~40%",
    regulator: "BfArM + Директива ЕС",
    color: "hsl(24, 80%, 49%)", coords: [10, 51],
    details: [
      "14% европейского рынка БАДов",
      "Строгие требования к заявлениям о пользе",
      "Запрет на клеймы лечебных свойств",
    ],
  },
  {
    id: "FRA", name: "Франция", flag: "🇫🇷", region: "Европа",
    market: "12% рынка ЕС", cagr: "~7%", population: "—",
    regulator: "ANSES",
    color: "hsl(24, 80%, 49%)", coords: [2, 47],
    details: [
      "ANSES строго контролирует клеймы на упаковках",
      "Запрет на рекламу лечебных свойств",
      "Растёт потребление витамина D",
    ],
  },
  {
    id: "GBR", name: "Великобритания", flag: "🇬🇧", region: "Европа",
    market: "9% рынка ЕС", cagr: "~7%", population: "—",
    regulator: "MHRA + FSA",
    color: "hsl(0, 72%, 45%)", coords: [-2, 54],
    details: [
      "С 2019 по 2024: более 130 смертей от нелегальных веществ",
      "Продавались под видом БАДов через соцсети",
      "Brexit привёл к пересмотру регуляторных требований",
      "Источник: BBC, март 2024",
    ],
  },
  {
    id: "ITA", name: "Италия", flag: "🇮🇹", region: "Европа",
    market: "€1.6+ млрд", cagr: "~7%", population: "—",
    regulator: "Ministry of Health + EFSA",
    color: "hsl(24, 80%, 49%)", coords: [12, 42],
    details: [
      "Крупнейший рынок БАДов в Западной Европе (18–22% Европы)",
      "Сильная культура потребления витаминов",
    ],
  },
  {
    id: "ESP", name: "Испания", flag: "🇪🇸", region: "Европа",
    market: "—", cagr: "~7%", population: "—",
    regulator: "AESAN",
    color: "hsl(24, 80%, 49%)", coords: [-4, 40],
    details: ["Растёт рынок витаминных желейных конфет (gummies)"],
  },
  {
    id: "POL", name: "Польша", flag: "🇵🇱", region: "Европа",
    market: "$2.22 млрд", cagr: "10.9%", population: "—",
    regulator: "Chief Sanitary Inspectorate",
    color: "hsl(45, 70%, 51%)", coords: [19, 52],
    details: ["Быстрорастущий рынок", "CBD-продукты на подъёме"],
  },
  {
    id: "SWE", name: "Швеция", flag: "🇸🇪", region: "Европа",
    market: "$1.51 млрд", cagr: "~7%", population: "—",
    regulator: "Swedish Food Agency",
    color: "hsl(152, 56%, 39%)", coords: [15, 62],
    details: ["Рынок Омега-3 и рыбьего жира особенно силён"],
  },
  {
    id: "CHE", name: "Швейцария", flag: "🇨🇭", region: "Европа",
    market: "—", cagr: "5.4%", population: "—",
    regulator: "FSVO",
    color: "hsl(152, 56%, 39%)", coords: [8, 47],
    details: ["Вне ЕС, но с похожими стандартами", "Высокий уровень доверия к БАДам"],
  },
  {
    id: "BEL", name: "Бельгия", flag: "🇧🇪", region: "Европа",
    market: "$1.75 млрд", cagr: "5.2%", population: "—",
    regulator: "FASFC",
    color: "hsl(152, 56%, 39%)", coords: [4, 51],
    details: ["Стабильный рынок; фокус на качестве и безопасности"],
  },
  // --- АЗИЯ ---
  {
    id: "CHN", name: "Китай", flag: "🇨🇳", region: "Азия",
    market: "$30.6+ млрд", cagr: "9.9%", population: "—",
    regulator: "SAMR / NMPA",
    color: "hsl(0, 72%, 45%)", coords: [104, 35],
    details: [
      "Второй по величине рынок в мире — 47.5% рынка Азии",
      "Обязательная регистрация через SAMR",
      "Производит 60–70% мирового витаминного сырья",
      "Одна из самых строгих систем в Азии с 2016 года",
    ],
  },
  {
    id: "JPN", name: "Япония", flag: "🇯🇵", region: "Азия",
    market: "$13.3 млрд", cagr: "7.2–11.3%", population: "90%",
    regulator: "MHLW (FOSHU с 1991)",
    color: "hsl(0, 72%, 45%)", coords: [138, 36],
    details: [
      "90% населения принимают БАДы",
      "Уникальная категория FOSHU (Foods for Specified Health Uses)",
      "2024 — скандал Kobayashi Pharmaceutical",
      "5 погибших, 114 госпитализированных",
      "Причина: добавка с красным ферментированным рисом Benikoji Choleste Help",
    ],
  },
  {
    id: "IND", name: "Индия", flag: "🇮🇳", region: "Азия",
    market: "$5.2–22.9 млрд", cagr: "10.2–13.1%", population: "~25%",
    regulator: "FSSAI",
    color: "hsl(45, 70%, 51%)", coords: [78, 22],
    details: [
      "Быстрорастущий рынок с минимальным контролем",
      "Аюрведические добавки часто не проверяются",
      "Реформы в регулировании nutraceuticals",
    ],
  },
  {
    id: "KOR", name: "Южная Корея", flag: "🇰🇷", region: "Азия",
    market: "$1.26 млрд", cagr: "7%", population: "—",
    regulator: "MFDS",
    color: "hsl(24, 80%, 49%)", coords: [127, 36],
    details: ["Высокая доля ежедневного потребления БАДов в Азии"],
  },
  {
    id: "IDN", name: "Индонезия", flag: "🇮🇩", region: "Азия",
    market: "$2.9–3.2 млрд", cagr: "10.3%", population: "—",
    regulator: "BPOM",
    color: "hsl(45, 70%, 51%)", coords: [113, -2],
    details: ["Крупнейший рынок ASEAN", "Растущий импорт БАДов"],
  },
  {
    id: "VNM", name: "Вьетнам", flag: "🇻🇳", region: "Азия",
    market: "$325 млн", cagr: "6.6%", population: "—",
    regulator: "VFA",
    color: "hsl(45, 70%, 51%)", coords: [106, 16],
    details: ["Крупнейшая доля рынка health supplements в Юго-Восточной Азии"],
  },
  {
    id: "THA", name: "Таиланд", flag: "🇹🇭", region: "Азия",
    market: "ASEAN ~$7.5 млрд", cagr: "8–10%", population: "—",
    regulator: "Thai FDA",
    color: "hsl(45, 70%, 51%)", coords: [101, 14],
    details: ["Развитая инфраструктура производства БАДов"],
  },
  // --- СНГ ---
  {
    id: "KAZ", name: "Казахстан", flag: "🇰🇿", region: "СНГ",
    market: "152 млрд ₸ (~$330 млн)", cagr: "×5 за год", population: "62.7%",
    regulator: "КСЭК МЗ РК",
    color: "hsl(48, 90%, 60%)", coords: [67, 48], isAnomaly: true,
    details: [
      "💰 152 млрд тенге потрачено в 2024 году",
      "📈 Рост рынка: ×5 за один год — АНОМАЛИЯ",
      "👥 62,7% взрослых принимают БАДы",
      "⚠️ 31% проверенных образцов не соответствуют стандартам",
      "🚫 30% рынка — контрабанда",
      "📱 838 нарушителей в соцсетях → заблокировано 9 (1,07%!)",
      "🏭 Транзитный канал для запрещённых препаратов в ЕАЭС",
    ],
  },
  {
    id: "RUS", name: "Россия", flag: "🇷🇺", region: "СНГ",
    market: "$2.2–4.5 млрд", cagr: "5.6%", population: "~50%",
    regulator: "Роспотребнадзор + «Честный ЗНАК»",
    color: "hsl(45, 70%, 51%)", coords: [60, 56],
    details: [
      "Крупнейший рынок СНГ — 130 млрд ₽",
      "Многочисленные случаи фальсификации",
      "Федеральный закон № 150-ФЗ",
      "Система маркировки «Честный ЗНАК»",
    ],
  },
  {
    id: "UKR", name: "Украина", flag: "🇺🇦", region: "СНГ",
    market: "$1.2 млрд", cagr: "—", population: "—",
    regulator: "Ministry of Health",
    color: "hsl(45, 70%, 51%)", coords: [31, 49],
    details: ["Рынок под давлением из-за конфликта"],
  },
  {
    id: "UZB", name: "Узбекистан", flag: "🇺🇿", region: "СНГ",
    market: "24.8 трлн сум", cagr: "+19%", population: "—",
    regulator: "Минздрав",
    color: "hsl(45, 70%, 51%)", coords: [64, 41],
    details: ["Быстрорастущий рынок — +19% в 2024"],
  },
  // --- ОКЕАНИЯ ---
  {
    id: "AUS", name: "Австралия", flag: "🇦🇺", region: "Океания",
    market: "$3.6 млрд", cagr: "7.4%", population: "33.6%",
    regulator: "TGA — одна из строжайших ✅",
    color: "hsl(152, 56%, 39%)", coords: [134, -25],
    details: [
      "TGA — эталон мировой регуляции",
      "Обязательная регистрация всех добавок через ARTG",
      "8.5 млн австралийцев принимают БАДы",
    ],
  },
  {
    id: "NZL", name: "Новая Зеландия", flag: "🇳🇿", region: "Океания",
    market: "$215–453 млн", cagr: "7.4%", population: "—",
    regulator: "Medsafe",
    color: "hsl(152, 56%, 39%)", coords: [174, -41],
    details: ["Регулирование похоже на Австралию"],
  },
  // --- ЛАТИНСКАЯ АМЕРИКА ---
  {
    id: "BRA", name: "Бразилия", flag: "🇧🇷", region: "Латинская Америка",
    market: "$3.9–13.7 млрд", cagr: "10.4%", population: "—",
    regulator: "ANVISA",
    color: "hsl(24, 80%, 49%)", coords: [-51, -14],
    details: [
      "Крупнейший рынок БАДов в Латинской Америке",
      "ANVISA контролирует рынок",
    ],
  },
  {
    id: "ARG", name: "Аргентина", flag: "🇦🇷", region: "Латинская Америка",
    market: "~$8.85 млрд (регион)", cagr: "6.6%", population: "—",
    regulator: "ANMAT",
    color: "hsl(24, 80%, 49%)", coords: [-64, -34],
    details: ["Экономическая нестабильность влияет на рынок"],
  },
  // --- БЛИЖНИЙ ВОСТОК / АФРИКА ---
  {
    id: "SAU", name: "Саудовская Аравия", flag: "🇸🇦", region: "Ближний Восток",
    market: "$272 млн+", cagr: "6.75%", population: "—",
    regulator: "SFDA",
    color: "hsl(45, 70%, 51%)", coords: [45, 24],
    details: ["Vision 2030 стимулирует инвестиции в здравоохранение"],
  },
  {
    id: "ARE", name: "ОАЭ", flag: "🇦🇪", region: "Ближний Восток",
    market: "$140–618 млн", cagr: "6.5–11%", population: "—",
    regulator: "MOHAP",
    color: "hsl(45, 70%, 51%)", coords: [54, 24],
    details: ["Транзитный хаб для Ближнего Востока", "Рост wellness-туризма"],
  },
  {
    id: "ZAF", name: "ЮАР", flag: "🇿🇦", region: "Африка",
    market: "$1.06 млрд", cagr: "9.9%", population: "—",
    regulator: "SAHPRA",
    color: "hsl(45, 70%, 51%)", coords: [25, -30],
    details: ["Крупнейший рынок БАДов в Африке"],
  },
  {
    id: "EGY", name: "Египет", flag: "🇪🇬", region: "Африка",
    market: "$700 млн", cagr: "—", population: "—",
    regulator: "EDA",
    color: "hsl(45, 70%, 51%)", coords: [30, 27],
    details: ["Растущий рынок; импорт витаминов активен"],
  },
  {
    id: "NGA", name: "Нигерия", flag: "🇳🇬", region: "Африка",
    market: "MEA ~$4.1 млрд", cagr: "10.3%", population: "—",
    regulator: "NAFDAC",
    color: "hsl(45, 70%, 51%)", coords: [8, 10],
    details: ["Крупнейшая экономика Африки; растущий средний класс"],
  },
];

// ISO numeric → country id
const countryIdMap: Record<string, string> = {
  "840": "USA", "124": "CAN", "484": "MEX",
  "156": "CHN", "276": "DEU", "250": "FRA",
  "826": "GBR", "392": "JPN", "643": "RUS", "398": "KAZ",
  "036": "AUS", "356": "IND", "076": "BRA",
  "380": "ITA", "724": "ESP", "616": "POL", "752": "SWE",
  "056": "BEL", "756": "CHE",
  "410": "KOR", "360": "IDN", "704": "VNM", "764": "THA",
  "804": "UKR", "860": "UZB", "554": "NZL",
  "032": "ARG", "682": "SAU", "784": "ARE",
  "710": "ZAF", "818": "EGY", "566": "NGA",
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
    style={{ left: Math.min(position.x + 12, window.innerWidth - 260), top: position.y - 10 }}
  >
    <div className="font-heading font-bold text-foreground text-sm mb-1">
      {country.flag} {country.name}
      {country.isAnomaly && <span className="text-destructive ml-2 text-xs">⚠️ АНОМАЛИЯ</span>}
    </div>
    <div className="space-y-0.5 text-xs text-muted-foreground">
      <p><span className="text-foreground">Рынок:</span> {country.market}</p>
      <p><span className="text-foreground">CAGR:</span> {country.cagr}</p>
      {country.population !== "—" && <p><span className="text-foreground">Потребляют:</span> {country.population}</p>}
      <p><span className="text-foreground">Регулятор:</span> {country.regulator}</p>
    </div>
    <p className="text-[10px] text-destructive mt-1 italic">Нажмите для подробностей →</p>
  </motion.div>
);

/* Regional comparison bar chart */
const regions = [
  { name: "Северная Америка", value: 75, label: "~$75 млрд" },
  { name: "Азиатско-Тихоокеанский", value: 64, label: "~$64 млрд" },
  { name: "Европа", value: 49, label: "~$49 млрд" },
  { name: "Латинская Америка", value: 11, label: "~$11 млрд" },
  { name: "Ближний Восток / Африка", value: 4, label: "~$4 млрд" },
  { name: "СНГ", value: 5, label: "~$5 млрд" },
];

const RegionFilter = ({ activeRegion, setActiveRegion }: { activeRegion: string | null; setActiveRegion: (r: string | null) => void }) => {
  const regionList = ["Все", "Северная Америка", "Европа", "Азия", "СНГ", "Латинская Америка", "Ближний Восток", "Африка", "Океания"];
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-6">
      {regionList.map((r) => (
        <button
          key={r}
          onClick={() => setActiveRegion(r === "Все" ? null : r)}
          className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
            (r === "Все" && !activeRegion) || activeRegion === r
              ? "bg-destructive/20 border-destructive/50 text-destructive"
              : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
          }`}
        >
          {r}
        </button>
      ))}
    </div>
  );
};

const WorldMapSection = () => {
  const [hovered, setHovered] = useState<{ country: CountryData; pos: { x: number; y: number } } | null>(null);
  const [selected, setSelected] = useState<CountryData | null>(null);
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  const filteredCountries = activeRegion
    ? countries.filter((c) => c.region?.includes(activeRegion))
    : countries;

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
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto mb-2">
            Глобальный рынок БАДов — $165–190 млрд (2024). Прогноз на 2030 — до $280 млрд.
          </p>
          <p className="text-muted-foreground text-xs max-w-2xl mx-auto">
            Наведите на страну для краткой информации. Нажмите для подробностей. Данные из 76 источников.
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
                        default: { outline: "none", opacity: countryData ? 0.85 : 0.2 },
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

            {/* Pulsing Kazakhstan marker */}
            <Marker coordinates={[67, 48]}>
              <circle r={4} fill="hsl(var(--destructive))" opacity={0.6}>
                <animate attributeName="r" from="4" to="12" dur="1.5s" repeatCount="indefinite" />
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

        {/* Regional bar chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 max-w-3xl mx-auto"
        >
          <h3 className="font-heading text-lg font-bold text-foreground mb-4 text-center">
            📊 Объём рынка по регионам (2024)
          </h3>
          <div className="space-y-3">
            {regions.sort((a, b) => b.value - a.value).map((r) => (
              <div key={r.name} className="flex items-center gap-3">
                <span className="text-xs text-muted-foreground w-44 text-right shrink-0">{r.name}</span>
                <div className="flex-1 bg-muted/30 rounded-full h-6 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(r.value / 75) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full bg-destructive/70 rounded-full flex items-center justify-end pr-2"
                  >
                    <span className="text-[10px] text-foreground font-bold">{r.label}</span>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mobile cards with filter */}
        <div className="md:hidden mt-8">
          <RegionFilter activeRegion={activeRegion} setActiveRegion={setActiveRegion} />
          <div className="grid grid-cols-1 gap-3">
            {filteredCountries.map((c, i) => (
              <motion.button
                key={c.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                onClick={() => setSelected(c)}
                className={`text-left p-4 rounded-xl border transition-colors ${
                  c.isAnomaly
                    ? "border-destructive/50 bg-destructive/5"
                    : "border-border bg-card hover:border-destructive/30"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-heading font-bold text-foreground text-sm">
                    {c.flag} {c.name}
                    {c.isAnomaly && <span className="text-destructive text-xs ml-2">⚠️</span>}
                  </span>
                  <span className="text-xs text-muted-foreground">{c.market}</span>
                </div>
                <div className="text-[10px] text-muted-foreground mt-1">{c.regulator} · CAGR {c.cagr}</div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Country count */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          🌍 Показано {countries.length} стран · Источники: Statista, Grand View Research, MarketsandMarkets, CDC, FDA, EFSA, TGA и др.
        </p>
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
                  {selected.isAnomaly ? "💊 ЗОНА АНОМАЛЬНОГО РОСТА" : `Рынок БАДов · ${selected.region || ""}`}
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
