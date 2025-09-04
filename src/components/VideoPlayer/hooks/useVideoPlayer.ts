import { useEffect, useState, type RefObject } from "react";

export const useVideoPlayer = (
  videoRef: RefObject<HTMLVideoElement | null>
) => {
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

  return {
    isPlaying,
    duration,
    current,
    togglePlay,
    onScrub,
    commitScrub,
    setIsScrubbing,
  };
};
