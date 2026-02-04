import { useRef, useState } from "react";

const CharacterCounter = () => {
  const charCountRef = useRef(0);
  const counterDisplayRef = useRef(null);
  const textAreaRef = useRef(null);
  const [status, setStatus] = useState(null);

  const handleInput = (e) => {
    const length = e.target.value.length;
    
    if (length <= 100) {
      charCountRef.current = length;
      counterDisplayRef.current.innerText = `${charCountRef.current} / 100`;
    } else {
      e.target.value = e.target.value.slice(0, 100);
    }
  };

  return (
    <div style={{ width: "350px", margin: "40px auto" }}>
      <h2>✍️ Character Counter</h2>

      <textarea
        ref={textAreaRef}
        rows="5"
        placeholder="Type something..."
        onInput={handleInput}
        style={{ width: "100%", padding: "10px" }}
      ></textarea>

      <p ref={counterDisplayRef}> / 100</p>
      <p>{status}</p>
    </div>
  );
};

export default CharacterCounter;
