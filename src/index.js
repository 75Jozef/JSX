import React from "react";
import ReactDOM from "react-dom";

var name = "Jozef Drha";
var year = new Date().getFullYear();

ReactDOM.render(
  <div>
    <h1 className="heading">Hello World!</h1>
    <p>This is the year {year}</p>

    <ul>
      <li>First</li>
      <li>Second</li>
      <li className="thirdOne">Third</li>
      <li>Fourth</li>
      <li>Fifth</li>
    </ul>
  </div>,

  document.getElementById("root")
);
