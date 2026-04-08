import { motion } from "framer-motion";
import { User } from "lucide-react";

interface ExpertQuoteProps {
  author: string;
  role: string;
  quote?: string;
  avatarUrl?: string;
}

const ExpertQuote = ({ author, role, quote, avatarUrl }: ExpertQuoteProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="bg-card border border-border rounded-2xl p-8 sm:p-10 relative overflow-hidden"
  >
    <div className="absolute top-4 left-6 text-8xl text-destructive/10 font-heading leading-none select-none">
      «
    </div>
    <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start">
      <div className="flex-shrink-0">
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={author}
            className="w-20 h-20 rounded-full object-cover border-2 border-destructive/30"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-destructive/10 border-2 border-dashed border-destructive/30 flex items-center justify-center">
            <User className="w-8 h-8 text-destructive/40" />
          </div>
        )}
      </div>
      <div className="flex-1">
        {quote ? (
          <p className="text-foreground font-heading italic text-lg sm:text-xl leading-relaxed mb-4">
            «{quote}»
          </p>
        ) : (
          <div className="rounded-lg border-2 border-dashed border-border p-4 bg-card/30 mb-4">
            <p className="text-muted-foreground/50 text-sm italic">
              💬 Цитата {author} — будет добавлена
            </p>
          </div>
        )}
        <div>
          <p className="text-foreground font-bold text-sm">{author}</p>
          <p className="text-destructive text-xs">{role}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

export default ExpertQuote;
