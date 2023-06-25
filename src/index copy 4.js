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
  return (
    <div className="wrapper">
      <textarea
        readOnly={true}
        maxLength={3}
        spellCheck={true}
        style={{ backgroundColor: "gray" }}
      />
    </div>
  );
}

root.render(<App></App>);
