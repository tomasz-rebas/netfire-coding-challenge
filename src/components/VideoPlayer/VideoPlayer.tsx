import { useEffect, useRef, useState } from "react";
import { formatTime } from "./helpers/formatTime";
import { PauseIcon } from "./assets/PauseIcon";
import { PlayIcon } from "./assets/PlayIcon";

interface Props {
  src: string;
}

export const VideoPlayer = ({ src }: Props) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isScrubbing, setIsScrubbing] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onLoaded = () => setDuration(v.duration || 0);
    const onTime = () => {
      if (!isScrubbing) setCurrent(v.currentTime || 0);
    };
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    v.addEventListener("loadedmetadata", onLoaded);
    v.addEventListener("timeupdate", onTime);
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);

    const tryPlay = async () => {
      try {
        await v.play();
      } catch {
        setIsPlaying(false);
      }
    };
    tryPlay();

    return () => {
      v.removeEventListener("loadedmetadata", onLoaded);
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
    };
  }, [isScrubbing]);

  const togglePlay = async () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      await v.play();
    } else {
      v.pause();
    }
  };

  const onScrub = (value: number) => {
    setCurrent(value);
  };

  const commitScrub = (value: number) => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = value;
    setIsScrubbing(false);
  };

  return (
    <section className="relative isolate">
      <div className="absolute inset-0 -z-10">
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          preload="metadata"
          className="h-[900px] w-full object-cover bg-black-40"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-black/40" />
      <div className="mx-auto flex h-[900px] max-w-7xl flex-col justify-end pb-40">
        <div className="max-w-4xl mb-10 text-[45px] leading-[57px]">
          <h1 className="text-gradient font-semibold tracking-tight mb-2">
            Lorem Ipsum Dolor Sit amet
          </h1>
          <h2 className="text-lighter-gray font-semibold">
            Donec cursus ligula diam, nec congue augue ultrices nec.
          </h2>
        </div>
        <div className="mt-6 flex w-full items-center gap-5 rounded-xl bg-black/30 p-6 backdrop-blur">
          <button
            onClick={togglePlay}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#101215] text-white transition hover:bg-white/30"
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
            className="flex-1 rounded-2xl h-3"
            aria-label="Seek"
            style={{
              background: `linear-gradient(to right, #CAE871 ${
                (current / duration) * 100
              }%, #252525 ${(current / duration) * 100}%)`,
            }}
          />
          <div className="w-16 text-center tabular-nums font-bold text-[#C9C4C1]">
            {formatTime(current)}
          </div>
        </div>
      </div>
    </section>
  );
};
