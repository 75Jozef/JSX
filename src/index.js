import React from "react";
import ReactDOM from "react-dom";

var name = "Jozef Drha";
var year = new Date().getFullYear();
const img = "https://picsum.photos/200"; //náhodné fotky dáva táto služba

ReactDOM.render(
  <div>
    <h1 className="heading">Hello World!</h1>
    <p>This is the year {year}</p>

    <img className="img-pasta" src={img} />
    <img className="img-pasta" src={img} />
    <img className="img-pasta" src={img} />
  </div>,
  document.getElementById("root")
);
