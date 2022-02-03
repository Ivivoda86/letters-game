import React, { useState } from "react";

const utilizeFocus = () => {
  const ref = React.createRef();
  const setFocus = () => {
    ref.current && ref.current.focus();
  };
  return { setFocus, ref };
};

const Grilla = () => {
  const [inputs, setInputs] = useState(["", "", "", "", ""]);
  const word = inputs[0]+inputs[1]+inputs[2]+inputs[3]+inputs[4]
  console.log(word)
  const [palabra, setPalabra] = useState("Cajas");
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
      <button onClick={()=>{
          if(palabra===word){alert("le pegaste a la palabra papaaaa")}
          else{alert("mmm no es por aca")}
      }}>Confirmar</button>

    </div>
  );
};

export default Grilla;
