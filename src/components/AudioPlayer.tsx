import { Play, Pause, Volume2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface AudioPlayerProps {
  label: string;
  src?: string;
}

const AudioPlayer = ({ label, src }: AudioPlayerProps) => {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => {
      setProgress(audio.currentTime);
      setDuration(audio.duration || 0);
    };
    const onEnd = () => setPlaying(false);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnd);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnd);
    };
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  const fmt = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  if (!src) {
    return (
      <div className="rounded-xl border-2 border-dashed border-border bg-card/50 p-5">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-destructive/10 border-2 border-destructive/30 flex items-center justify-center flex-shrink-0">
            <Volume2 className="w-5 h-5 text-destructive/60" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-muted-foreground text-sm font-medium">🎙️ {label}</p>
            <p className="text-muted-foreground/50 text-xs mt-0.5">Аудио будет добавлено</p>
            {/* Wave placeholder */}
            <div className="flex items-end gap-[2px] mt-2 h-6">
              {Array.from({ length: 40 }, (_, i) => (
                <div
                  key={i}
                  className="w-[3px] bg-muted-foreground/20 rounded-full"
                  style={{ height: `${8 + Math.sin(i * 0.5) * 12 + Math.random() * 6}px` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <audio ref={audioRef} src={src} preload="metadata" />
      <div className="flex items-center gap-4">
        <button
          onClick={toggle}
          className="w-12 h-12 rounded-full bg-destructive flex items-center justify-center flex-shrink-0 hover:bg-destructive/90 transition-colors shadow-lg"
        >
          {playing ? (
            <Pause className="w-5 h-5 text-white" />
          ) : (
            <Play className="w-5 h-5 text-white ml-0.5" />
          )}
        </button>
        <div className="flex-1 min-w-0">
          <p className="text-foreground text-sm font-medium truncate">{label}</p>
          <div className="mt-2 h-1.5 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-destructive rounded-full transition-all"
              style={{ width: duration ? `${(progress / duration) * 100}%` : "0%" }}
            />
          </div>
          <div className="flex justify-between mt-1 text-xs text-muted-foreground">
            <span>{fmt(progress)}</span>
            <span>{duration ? fmt(duration) : "--:--"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
