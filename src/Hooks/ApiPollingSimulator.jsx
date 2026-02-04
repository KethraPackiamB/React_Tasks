import React, { useEffect, useState } from "react";

const ApiPollingSimulator = () => {
  
  const [data, setData] = useState(null);

  
  const [pollCount, setPollCount] = useState(0);

  useEffect(() => {
   
    const fetchData = () => {
      const fakeResponse = {
        value: Math.floor(Math.random() * 100),
        time: new Date().toLocaleTimeString(),
      };

      setData(fakeResponse);
      setPollCount((prev) => prev + 1);
    };

    
    fetchData();

   
    const intervalId = setInterval(fetchData, 5000);

   
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", width: "350px" }}>
      <h2>API Polling Simulator</h2>

      {data ? (
        <>
          <p><strong>Latest Value:</strong> {data.value}</p>
          <p><strong>Last Updated:</strong> {data.time}</p>
        </>
      ) : (
        <p>Loading data...</p>
      )}

      <p><strong>Poll Count:</strong> {pollCount}</p>
      <p style={{ fontSize: "14px", color: "#555" }}>
        (Data refreshes every 5 seconds)
      </p>
    </div>
  );
};

export default ApiPollingSimulator;
