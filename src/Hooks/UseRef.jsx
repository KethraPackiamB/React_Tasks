import { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [email, setEmail] = useState("");

  // Auto focus email on mount
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  // Move focus to password when email is entered
//   useEffect(() => {
//     if (email.length > 0) {
//       passwordRef.current.focus();
//     }
//   }, [email]);

  return (
    <div style={{ width: "300px", margin: "40px auto" }}>
      <h2>🔐 Login</h2>

      <input
        ref={emailRef}
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
      />

      <input
        ref={passwordRef}
        type="password"
        placeholder="Password"
        style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
      />

      <button style={{ width: "100%" }}>Login</button>
    </div>
  );
};

export default UseRef;
