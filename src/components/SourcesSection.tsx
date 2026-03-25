import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const sources = [
  "Factcheck.kz — Нужны ли человеку БАДы?",
  "Forbes.kz — БАДы в Казахстане: кто регулирует?",
  "24.kz — 152 млрд тенге на БАДы",
  "BAQ.kz — Смертельная «Молекула»",
  "Inbusiness.kz — Зачем казахстанцы принимают БАДы",
  "PMC — Apetamin Hepatotoxicity",
  "FDA.gov — Apetamin & SARMs Warnings",
  "NIH — Dietary Supplements overview",
  "Tengrinews.kz — «Молекула» из Мангистау",
  "YouTube — Гастроэнтеролог Вялов",
  "YouTube — Биохимик Аллиярова",
  "peptidi.kz — интервью с производителем",
  "Grand View Research, MarketsandMarkets, Mordor Intelligence",
  "Ведомости — Российский рынок БАД 2025",
];

const SourcesSection = () => (
  <section className="py-16 border-t border-border">
    <div className="section-container !py-8">
      <Accordion type="single" collapsible>
        <AccordionItem value="sources" className="border-border">
          <AccordionTrigger className="font-heading text-lg text-muted-foreground hover:text-foreground">
            ИСТОЧНИКИ
          </AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-2 pt-2">
              {sources.map((s, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary">•</span>
                  {s}
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <p className="text-center text-xs text-muted-foreground mt-8">
        © 2025 — Интерактивное расследование. Все данные основаны на открытых источниках.
      </p>
    </div>
  </section>
);

export default SourcesSection;
