import React from "react";
import ReactDOM from "react-dom";

var name = "Jozef Drha";
var year = new Date().getFullYear();

const obr = "https://picsum.photos/200"; //náhodné fotky dáva táto služba

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

customStyle.color = "blue";

ReactDOM.render(
  <div>
    <h1 style={customStyle} contentEditable="true">
      Hello World!
    </h1>
    <p>This is the year {year}</p>

    <img className="img-pasta" alt="random" src={obr} />
    <img className="img-pasta" alt="random" src={obr} />
    <img className="img-pasta" alt="random" src={obr} />
    <img alt="random" src={obr} />
    <button onClick={() => window.location.reload(false)}>
      Click to reload!
    </button>
  </div>,
  document.getElementById("root")
);
