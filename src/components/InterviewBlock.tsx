import { motion } from "framer-motion";

interface QA {
  question: string;
  answer?: string;
}

interface InterviewBlockProps {
  questions: QA[];
  interviewee: string;
  role?: string;
}

const InterviewBlock = ({ questions, interviewee, role }: InterviewBlockProps) => (
  <div className="space-y-6">
    {questions.map((qa, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1 }}
        className="border-l-4 border-destructive pl-5"
      >
        <p className="text-foreground font-heading font-bold text-base mb-2">
          — {qa.question}
        </p>
        {qa.answer ? (
          <p className="text-muted-foreground text-sm leading-relaxed italic">
            «{qa.answer}»
          </p>
        ) : (
          <div className="rounded-lg border-2 border-dashed border-border p-3 bg-card/30">
            <p className="text-muted-foreground/50 text-xs">
              📝 Ответ {interviewee} {role ? `(${role})` : ""} — будет добавлен
            </p>
          </div>
        )}
      </motion.div>
    ))}
  </div>
);

export default InterviewBlock;
