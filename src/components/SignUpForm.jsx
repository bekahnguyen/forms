import React from "react";
import { useState } from "react";

const [userName, setUserName] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);

export default function SignUpForm() {
  return (
    <>
      <h2>Sign Up!</h2>
      <form>
        {" "}
        <input></input>
        <input></input>
        <button type="submit"></button>
      </form>
      ;
    </>
  );
}
