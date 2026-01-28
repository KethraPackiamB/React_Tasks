import { useState } from "react";

const TreeStages = () => {
  const [season, setSeason] = useState("summer");

  // Tree crown style based on season
  const treeStyle = {
    width: "200px",
    height: season === "winter" ? "200px" : "250px",
    backgroundColor:
      season === "summer"
        ? "#2E8B57"
        : season === "rain"
        ? "#006400"
        : "#C0C0C0",
    borderRadius:
      season === "spring"
        ? "30%"
        : season === "winter"
        ? "50%"
        : "50%",
    margin: "20px auto",
    position: "relative",
    transition: "all 0.6s ease",
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>🌳 Tree Seasons with Effects</h1>

      {/* Tree Crown */}
      <div style={treeStyle}>
        {/* 🍂 Falling Leaves */}
        {season === "autumn" &&
          Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="leaf"
              style={{
                left: `${Math.random() * 180}px`,
                animationDelay: `${i * 0.3}s`,
              }}
            ></div>
          ))}

        {/* 🌧️ Rain Effect */}
        {season === "rain" &&
          Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="rain"
              style={{
                left: `${Math.random() * 200}px`,
                animationDelay: `${i * 0.2}s`,
              }}
            ></div>
          ))}
      </div>

      {/* Tree Trunk */}
      <div
        style={{
          width: "40px",
          height: "140px",
          backgroundColor: "#8B4513",
          margin: "0 auto",
        }}
      ></div>

      <p>Current Season: <b>{season}</b></p>

      <button onClick={() => setSeason("summer")}>☀️ Summer</button>
      <button onClick={() => setSeason("rain")}>🌧️ Rain</button>
      <button onClick={() => setSeason("autumn")}>🍂 Autumn</button>
      <button onClick={() => setSeason("winter")}>❄️ Winter</button>

      {/* CSS */}
      <style>{`
        .leaf {
          width: 12px;
          height: 12px;
          background-color: orange;
          border-radius: 50%;
          position: absolute;
          top: 0;
          animation: fall 2s linear infinite;
        }

        @keyframes fall {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(250px); opacity: 0; }
        }

        .rain {
          width: 3px;
          height: 15px;
          background-color: lightblue;
          position: absolute;
          top: 0;
          animation: rainFall 1s linear infinite;
        }

        @keyframes rainFall {
          0% { transform: translateY(0); }
          100% { transform: translateY(260px); }
        }

        button {
          margin: 6px;
          padding: 6px 12px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default TreeStages;
