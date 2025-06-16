import { useState, useRef } from "react";
import { PauseIcon, PlayIcon, MutedIcon } from "./ui/video-icons";

interface VideoPlayerProps {
  src: string;
  className?: string;
}

const VideoPlayer = ({ src, className = "" }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoClick = () => {
    togglePlay();
  };

  return (
    <div className={`relative h-[310px] w-full ${className}`}>
      <video
        ref={videoRef}
        src={src}
        loop
        playsInline
        autoPlay
        muted={isMuted}
        className="block h-full w-full"
        onClick={handleVideoClick}
      />

      {/* Play/Pause Button */}
      <div className="absolute bottom-4 left-2.5">
        <button
          aria-label={isPlaying ? "Pause video" : "Play video"}
          onClick={togglePlay}
          className="inline-block h-6 w-6 bg-transparent border-none transition-opacity duration-150"
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
      </div>

      {/* Mute/Unmute Button */}
      <div className="absolute bottom-4 right-2.5">
        <button
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          onClick={toggleMute}
          className="inline-block h-6 w-6 bg-transparent border-none transition-opacity duration-150"
        >
          <MutedIcon />
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
