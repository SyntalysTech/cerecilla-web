'use client';

import { useRef, useEffect } from 'react';

interface VideoBackgroundProps {
  src: string;
  overlay?: boolean;
  overlayOpacity?: number;
}

export default function VideoBackground({
  src,
  overlay = true,
  overlayOpacity = 0.6
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Autoplay was prevented, that's okay
      });
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        className="absolute w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
      {overlay && (
        <div
          className="absolute inset-0 bg-slate-900"
          style={{ opacity: overlayOpacity }}
        />
      )}
    </div>
  );
}
