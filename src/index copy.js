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
  const date = new Date();
  const dateTime = date.toLocaleDateString();
  return (
    <h2>
      {dateTime} --- {date.toLocaleTimeString()}
    </h2>
  );
}

root.render(<App></App>);
