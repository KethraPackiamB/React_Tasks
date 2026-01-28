import { useState } from "react";

const UseState = () => {
  const [season, setSeason] = useState(null);

  const seasonSummary =  season === "Summer" ? "☀️ Summer: The tree is full of life with lush green leaves."
   : season === "Winter" ? "❄️ Winter: The tree is dormant and conserving energy."
   : season === "Autumn" ? "🍂 Autumn: Leaves fall as the tree prepares for rest." 
   : season === "Rain" ? "🌧️ Rainy Season: Rain nourishes the tree and boosts growth."
   : "🌳 A tree stands quietly, growing stronger through every season."

  return (
    <center>
    <div>
      
      <h1>Stages of Trees in Different Conditions 🌳</h1>
     
      <div style={{
        display : "flex",
        justifyContent : "center",
      }}>
      <div>
      <div
        style={{
          backgroundColor:
            season === "Summer"
              ? "#78C841"
              : season === "Winter"
                ? "#809D3C"
                : season === "Rain"
                  ? "#006400"
                  : season === "Autumn"
                    ? "#C56824"
                    : "#5CB338",
          width: "200px",
          height: "250px",
          borderRadius: "50%",
          margin: "10px 150px",
        }}
        
      ></div>

      <div
        style={{
          backgroundColor: "#8A3324",
          width: "30px",
          height: "150px",
          margin: "0px 135px",
        }}
      ></div>
     
      </div>
      <div style={{marginTop : "200px"}}>
        <p><b>{seasonSummary}</b></p>
        <div style={{display: "flex", gap : "10px"}}>
        <button onClick={() => setSeason("Summer")}>☀️ Summer</button>
        <button onClick={() => setSeason("Winter")}>☃️ Winter</button>
        <button onClick={() => setSeason("Autumn")}>🍂 Autumn</button>
        <button onClick={() => setSeason("Rain")}>🌧️ Rain</button>
        </div>
      </div>
     
      </div>
     
      <hr />
    </div>
    </center>
  );
};

export default UseState;
