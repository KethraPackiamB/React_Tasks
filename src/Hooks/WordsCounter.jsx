import { useRef, useState } from "react";

const WordsCounter = () => {
  const wordCountRef = useRef(0);
  const counterDisplayRef = useRef(null);
  const textAreaRef = useRef(null);
  const [status, setStatus] = useState(null);

  const handleInput = (e) => {
    const text = e.target.value.trim();

    // Split by one or more spaces
    const words =
      text === "" ? [] : text.split(/\s+/);

    wordCountRef.current = words.length;

    counterDisplayRef.current.innerText = `${wordCountRef.current} words`;

    if (wordCountRef.current > 50) {
      setStatus("⚠️ Word limit exceeded");
    } else {
      setStatus(null);
    }
  };

  return (
    <div style={{ width: "350px", margin: "40px auto" }}>
      <h2>📝 Words Counter</h2>

      <textarea
        ref={textAreaRef}
        rows="5"
        placeholder="Type something..."
        onInput={handleInput}
        style={{ width: "100%", padding: "10px" }}
      ></textarea>

      <p ref={counterDisplayRef}>0 words</p>
      <p>{status}</p>
    </div>
  );
};

export default WordsCounter;
