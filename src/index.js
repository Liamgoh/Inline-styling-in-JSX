import React from "react";
import ReactDOM from "react-dom";

//JavaScript object (key-value pair):
const customStyle = {
  color: "red",
  //fontSize: "20px",
  border: "1px solid black",
  font: "50px Arial, sans-serif",
  fontWeight: "bold"
};

//to change property dynamically eg on some event happening:
customStyle.color = "blue";

//inline styling:
ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
