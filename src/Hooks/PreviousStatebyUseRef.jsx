import { useState, useRef, useEffect } from 'react';

const PreviousStatebyUseRef = () => {

    const [text, setText] = useState("");
    const textRef = useRef("");

    const handleChange = (e) => {
        setText(e.target.value);
    };

    useEffect(() => {
        textRef.current = text;
    },[text]);

  return (
    <div>
      <h1>Handle previous State by useRef</h1>
      <input type="text" value={text} onChange={handleChange} />
      <p>Current Text : {text}</p>
      <p>Previous Text : {textRef.current}</p>
    </div>
  )
}

export default PreviousStatebyUseRef;
