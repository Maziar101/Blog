import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

export default function Form() {
  const [haveAcc, setHaveAcc] = useState(true);
  const handleAcc = () => {
    setHaveAcc(!haveAcc);
    console.log(haveAcc)
  };
  return <>{haveAcc ? <Login handleAcc={handleAcc}/> : <Register handleAcc={handleAcc}/>}</>;
}
