import { Play } from "lucide-react";
import { useState, useRef } from "react";

interface VideoEmbedProps {
  label: string;
  src?: string;
  poster?: string;
}

const VideoEmbed = ({ label, src, poster }: VideoEmbedProps) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (src && videoRef.current) {
      setPlaying(true);
      videoRef.current.play();
    }
  };

  if (src && playing) {
    return (
      <div className="rounded-xl overflow-hidden border border-border bg-black">
        <video
          ref={videoRef}
          src={src}
          controls
          autoPlay
          className="w-full aspect-video"
          poster={poster}
        />
        <div className="p-3 bg-card">
          <p className="text-xs text-muted-foreground">{label}</p>
        </div>
      </div>
    );
  }

  if (src) {
    return (
      <div
        className="rounded-xl overflow-hidden border border-border bg-black cursor-pointer group relative"
        onClick={handlePlay}
      >
        <video ref={videoRef} src={src} className="w-full aspect-video object-cover" poster={poster} muted preload="metadata" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/40 transition-colors">
          <div className="w-20 h-20 rounded-full bg-destructive/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
            <Play className="w-9 h-9 text-white ml-1" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <p className="text-white text-sm font-medium">{label}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border-2 border-dashed border-border bg-card/50 overflow-hidden">
      <div className="aspect-video flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 rounded-full bg-destructive/10 border-2 border-destructive/30 flex items-center justify-center mb-4">
          <Play className="w-7 h-7 text-destructive/60 ml-0.5" />
        </div>
        <p className="text-muted-foreground text-sm font-medium">🎥 {label}</p>
        <p className="text-muted-foreground/50 text-xs mt-1">Видео будет добавлено</p>
      </div>
    </div>
  );
};

export default VideoEmbed;
