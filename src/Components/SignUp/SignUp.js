import React, { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };
  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    console.log(`${email}, ${password}`);
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <label style={{ display: "flex", flexDirection: "column" }}>
        <span>Email</span>
        <input type="email" name="email" onChange={updateEmail} value={email} />
      </label>
      <label style={{ display: "flex", flexDirection: "column" }}>
        <span>Password</span>
        <input
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
        />
      </label>
      <button type="submit" onClick={handleSubmit}>
        Sign Up!
      </button>
    </form>
  );
}
