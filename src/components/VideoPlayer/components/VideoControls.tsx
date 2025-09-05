import { PauseIcon } from "../assets/PauseIcon";
import { PlayIcon } from "../assets/PlayIcon";
import { formatTime } from "../helpers/formatTime";
import { getProgressGradient } from "../helpers/getProgressGradient";
import { useVideoPlayer } from "../hooks/useVideoPlayer";

interface Props {
  videoRef: React.RefObject<HTMLVideoElement | null>;
}

export const VideoControls = ({ videoRef }: Props) => {
  const {
    isPlaying,
    duration,
    current,
    togglePlay,
    onScrub,
    commitScrub,
    setIsScrubbing,
  } = useVideoPlayer(videoRef);

  return (
    <div className="mt-6 flex w-full items-center gap-5 rounded-xl bg-black/30 p-6 backdrop-blur">
      <button
        onClick={togglePlay}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#101215] text-white transition hover:bg-white/30"
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>
      <input
        type="range"
        min={0}
        max={duration || 0}
        step={0.1}
        value={current}
        onChange={(e) => onScrub(parseFloat(e.target.value))}
        onMouseDown={() => setIsScrubbing(true)}
        onMouseUp={(e) =>
          commitScrub(parseFloat((e.target as HTMLInputElement).value))
        }
        onTouchStart={() => setIsScrubbing(true)}
        onTouchEnd={(e) =>
          commitScrub(parseFloat((e.target as HTMLInputElement).value))
        }
        className="flex-1 rounded-2xl h-[10px]"
        aria-label="Seek"
        style={{
          background: getProgressGradient(current, duration),
        }}
      />
      <div className="w-16 text-center tabular-nums font-bold text-[#C9C4C1]">
        {formatTime(current)}
      </div>
    </div>
  );
};
