import React, { useState } from "react";

const Grilla = () => {
  const inputs = ["c", "a", "j", "a"];

  const [palabra, setPalabra] = useState("Cajas");
  return (
    <div>
      <div className="grilla">
        {inputs.map((item) => {
          return <input maxLength={1} className="inputGrilla" autoFocus></input>;
        })}
      </div>
    </div>
  );
};

export default Grilla;
