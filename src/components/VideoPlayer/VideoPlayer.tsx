import { useRef } from "react";
import { VideoControls } from "./components/VideoControls";

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
          className="h-227 w-full object-cover bg-black-40"
          poster="/fallback.webp"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-black/40" />
      <div className="mx-auto flex h-227 max-w-[1337px] flex-col justify-end pb-40">
        <button className="border border-brand-gray text-white bg-[#D9D9D919] h-11 px-5 rounded-xl text-center text-xs w-fit">
          LOREM IPSUM
        </button>
        <div className="max-w-3xl my-10 text-[45px] leading-[57px] tracking-tighter">
          <h1 className="text-gradient font-semibold mb-2">
            Lorem Ipsum Dolor Sit amet
          </h1>
          <h2 className="text-lighter-gray font-semibold">
            Donec cursus ligula diam, nec congue augue ultrices nec.
          </h2>
        </div>
        <VideoControls videoRef={videoRef} />
      </div>
    </section>
  );
};
