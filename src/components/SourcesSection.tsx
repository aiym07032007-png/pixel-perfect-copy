import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const sources = [
  { text: "BBC Ukrainian — расследование о смертях, связанных с нелегальными веществами, UK", url: "bbc.com/ukrainian/features-russian-46024427" },
  { text: "RG.ru (март 2024) — скандал Kobayashi Pharmaceutical, Япония" },
  { text: "Metabody.kz — данные о клинике интегративной медицины", url: "metabody.kz" },
  { text: "Peptidi.kz (Новая Эра) — интервью с владелицей Еленой", url: "peptidi.kz" },
  { text: "Tengrinews.kz — о пептидах и регулировании в Казахстане" },
  { text: "МЗ РК — правила регистрации БАД в Казахстане" },
  { text: "Factcheck.kz — Нужны ли человеку БАДы?" },
  { text: "Forbes.kz — БАДы в Казахстане: кто регулирует?" },
  { text: "24.kz — 152 млрд тенге на БАДы" },
  { text: "BAQ.kz — Смертельная «Молекула»" },
  { text: "PMC — Apetamin Hepatotoxicity" },
  { text: "FDA.gov — Apetamin & SARMs Warnings" },
  { text: "Grand View Research, MarketsandMarkets, Mordor Intelligence" },
];

const SourcesSection = () => (
  <section id="sources" className="py-16 border-t border-border">
    <div className="section-container !py-8">
      <h2 className="font-heading font-bold text-foreground text-xl mb-6 text-center">
        АВТОРЫ И ИСТОЧНИКИ
      </h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="sources" className="border-border">
          <AccordionTrigger className="font-heading text-lg text-muted-foreground hover:text-foreground">
            📚 ИСТОЧНИКИ ({sources.length})
          </AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-2 pt-2">
              {sources.map((s, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-destructive">•</span>
                  <span>
                    {s.text}
                    {s.url && (
                      <span className="text-destructive/60 text-xs ml-1">({s.url})</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <p className="text-center text-xs text-muted-foreground mt-8">
        © 2025–2026 — Журналистское расследование «Опасная добавка». Все данные основаны на открытых источниках.
      </p>
    </div>
  </section>
);

export default SourcesSection;
