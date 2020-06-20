// Code Keypad Component Here
import React from "react";

export default function Keypad() {
  const handleChange = () => {
    console.log("Entering password...");
  };
  return (
    <div>
      <input type="password" onKeyUp={handleChange} />
    </div>
  );
}
