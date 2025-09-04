import { useRef } from "react";

interface Props {
  src: string;
}

export const VideoPlayer = ({ src }: Props) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

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
          <h2 className="text-[#ECECEC] font-semibold">
            Donec cursus ligula diam, nec congue augue ultrices nec.
          </h2>
        </div>
      </div>
      <div className="mt-6 flex w-full items-center gap-5 rounded-xl bg-black/30 p-6 backdrop-blur">
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#101215] text-white transition hover:bg-white/30">
          P
        </button>
        <input
          type="range"
          min={0}
          step={0.1}
          className="flex-1 rounded-2xl h-3"
          aria-label="Seek"
        />
        <div className="w-16 text-center tabular-nums font-bold text-[#C9C4C1]">
          01:34
        </div>
      </div>
    </section>
  );
};
