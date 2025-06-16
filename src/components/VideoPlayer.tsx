interface VideoPlayerProps {
  src: string;
  className?: string;
}

// Extract YouTube video ID from URL
const getYouTubeVideoId = (url: string): string => {
  const regex =
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/;
  const match = url.match(regex);
  return match ? match[1] : "";
};

const VideoPlayer = ({ src, className = "" }: VideoPlayerProps) => {
  const videoId = getYouTubeVideoId(src);

  // If it's a YouTube URL, use embed
  if (videoId) {
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=1&rel=0`;

    return (
      <div className={`relative h-[310px] w-full ${className}`}>
        <iframe
          src={embedUrl}
          className="block h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube video"
        />
      </div>
    );
  }

  // Fallback for regular video files (original implementation without controls since YouTube handles them)
  return (
    <div className={`relative h-[310px] w-full ${className}`}>
      <video
        src={src}
        loop
        playsInline
        autoPlay
        muted
        className="block h-full w-full"
      />
    </div>
  );
};

export default VideoPlayer;
