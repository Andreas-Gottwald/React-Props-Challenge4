import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    console.log("hahehihohu");
  }
  return (
    <Button
      text="SuperDuperButton"
      backgroundColor="red"
      color="khaki"
      onClick={handleClick}
    />
  );
}

function Button({ color, disabled, text, backgroundColor, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        height: "300px",
        width: "300px",
        backgroundColor: backgroundColor,
        color: color,
      }}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
