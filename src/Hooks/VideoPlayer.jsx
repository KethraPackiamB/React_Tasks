import { useRef, useState } from "react";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const handlePlayPause = () => {
    if (!isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  const handleMute = () => {
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  return (
    <div style={{ width: "400px", margin: "40px auto", textAlign: "center" }}>
      <h2>🎬 Video Player</h2>

      <video
        ref={videoRef}
        width="100%"
        onTimeUpdate={handleTimeUpdate}
      >
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" />
        Your browser does not support video.
      </video>

      <p>⏱️ Time: {currentTime.toFixed(1)} sec</p>

      <button onClick={handlePlayPause}>
        {isPlaying ? "⏸️ Pause" : "▶️ Play"}
      </button>

      <button onClick={handleMute} style={{ marginLeft: "10px" }}>
        {isMuted ? "🔊 Unmute" : "🔇 Mute"}
      </button>
    </div>
  );
};

export default VideoPlayer;
