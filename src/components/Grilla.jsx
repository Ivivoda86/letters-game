import React, { useState } from "react";

const utilizeFocus = () => {
  const ref = React.createRef();
  const setFocus = () => {
    ref.current && ref.current.focus();
  };
  return { setFocus, ref };
};

const Grilla = () => {
  const [inputs, setInputs] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const word1 = inputs[0] + inputs[1] + inputs[2] + inputs[3] + inputs[4];
  const word2 = inputs[5] + inputs[6] + inputs[7] + inputs[8] + inputs[9];
  const word3 = inputs[10] + inputs[11] + inputs[12] + inputs[13] + inputs[14];
  const word4 = inputs[15] + inputs[16] + inputs[17] + inputs[18] + inputs[19];
  const word5 = inputs[20] + inputs[21] + inputs[22] + inputs[23] + inputs[24];
  console.log(word1);

  const [palabra, setPalabra] = useState("cajas");
  const silabas = palabra.split("");
  console.log(silabas[0]);
  const correcto1 = palabra === word1;
  const correcto2 = palabra === word2;
  const correcto3 = palabra === word3;
  const correcto4 = palabra === word4;
  const correcto5 = palabra === word5;

  const lasCorrectas =
    correcto1 + correcto2 + correcto3 + correcto4 + correcto5;
  return (
    <div>
      <div className="grilla">
        {inputs.map((item, index) => {
          return (
            <input
              onChange={(event) => {
                setInputs(() => {
                  const copia = [...inputs];
                  const valorInput = event.target.value;
                  copia[index] = valorInput;
                  console.log(copia);
                  return copia;
                });
              }}
              maxLength={1}
              className="inputGrilla"
              id={item}
            ></input>
          );
        })}
      </div>
      <button
        onClick={() => {
          if (lasCorrectas) {
            alert("Correcto");
          } else {
            alert("mmm no es por aca");
          }
        }}
      >
        Confirmar
      </button>
    </div>
  );
};

export default Grilla;
