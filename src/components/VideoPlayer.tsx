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
    </section>
  );
};
