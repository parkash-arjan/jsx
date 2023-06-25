// import react and reactdom libraries
//get reference to the div element with id root
//tell React to take control of the div element
//create the component
//show the component on the screen

import React from "react";
import ReactDOM from "react-dom/client";

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

function App() {
  const inputType = "number";
  const minValue = 5;
  return (
    <input
      type={inputType}
      min={minValue}
      style={{ color: "red", border: "3px solid" }}
    />
  );
}

root.render(<App></App>);
