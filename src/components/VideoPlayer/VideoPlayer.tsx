import React, { useEffect, useRef, useState } from "react";
import Previous from "../../assets/previous.svg";
import Rewind from "../../assets/backward.svg";
import Pause from "../../assets/pause.svg";
import Play from "../../assets/play.svg";
import Forward from "../../assets/forward.svg";
import Next from "../../assets/next.svg";
// import './videoPlayer.css'

interface VideoPlayerProps {
  playlist: string[];
  currentVideo: string;
  setCurrentVideo: (url: string) => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  playlist,
  currentVideo,
  setCurrentVideo,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    setCurrentVideo(playlist[0]);
  }, []);

  const videoRef = useRef<HTMLVideoElement>(null);

  const handleRewind = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 10;
    }
  };

  const handleFastForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 10;
    }
  };

  const handlePrevious = () => {
    const currentIndex = playlist.indexOf(currentVideo);
    const prevIndex =
      currentIndex === 0 ? playlist.length - 1 : currentIndex - 1;
    setCurrentVideo(playlist[prevIndex]);
  };

  const handleNext = () => {
    const currentIndex = playlist.indexOf(currentVideo);
    const nextIndex = (currentIndex + 1) % playlist.length;
    setCurrentVideo(playlist[nextIndex]);
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      <div>
        <video
          ref={videoRef}
          src={currentVideo}
          onEnded={handleNext}
          autoPlay
          className="video"
        />

        <div>
          <button onClick={handlePrevious}>
            <img src={Previous} alt="Previous" />
          </button>
          <button onClick={handleRewind}>
            <img src={Rewind} alt="Rewind" />
          </button>
          <button onClick={handlePlayPause}>
            <img src={isPlaying ? Pause : Play} alt="Play/Pause" />
          </button>
          <button onClick={handleFastForward}>
            <img src={Forward} alt="Fast Forward" />
          </button>
          <button onClick={handleNext}>
            <img src={Next} alt="Next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
