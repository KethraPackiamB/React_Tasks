import { useEffect, useState } from "react";

const UseEffect = () => {
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isPlaying && progress < 100) {
      intervalId = setInterval(() => {
        setProgress((prev) => prev + 1);
      }, 1000);
    }

    // Cleanup
    return () => clearInterval(intervalId);
  }, [isPlaying, progress]);

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);
  const handleRestart = () => {
    setProgress(0);
    setIsPlaying(true);
  };

  return (
    <div style={{ width: "300px", margin: "40px auto", textAlign: "center" }}>
      <h2>🎵 Music Player</h2>

      {/* Progress Bar */}
      <div
        style={{
          width: "100%",
          height: "20px",
          backgroundColor: "#ddd",
          borderRadius: "10px",
          overflow: "hidden",
          marginBottom: "10px",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "#4caf50",
            transition: "width 0.3s",
          }}
        ></div>
      </div>

      <p>{progress}%</p>

      {/* Controls */}
      <button onClick={handlePlay}>▶️ Play</button>
      <button onClick={handlePause} style={{ marginLeft: "8px" }}>
        ⏸️ Pause
      </button>
      <button onClick={handleRestart} style={{ marginLeft: "8px" }}>
        🔁 Restart
      </button>

      {progress === 100 && <p>🎉 Song Finished</p>}
    </div>
  );
};

export default UseEffect;
