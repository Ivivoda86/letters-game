import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Grilla from "./components/Grilla";

const Letter = () => {
  const listaPalabras = ["cajas", "cacao", "saber", "saldo"];

  return (
    <div className="App">
      <header className="App-header">
        <Grilla></Grilla>
        <button>Enter</button>
      </header>
    </div>
  );
};

export default Letter;
