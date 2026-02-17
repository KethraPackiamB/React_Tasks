import { useState } from "react";

const TraditionalDomAccess = () => {
  const [text, setText] = useState("");
  console.log(text);

  const handleClick = () => {
    document.getElementById("myInput").value = "Hello World";
  };

  return (
    <>
      <input
        id="myInput"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleClick}>Fill Text</button>
    </>
  );
}
export default TraditionalDomAccess;
