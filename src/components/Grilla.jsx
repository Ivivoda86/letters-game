import React, { useEffect, useState } from 'react'

const Grilla = () => {
	const [inputs, setInputs] = useState({ posiciones: ['', '', '', '', ''], validado: false })

	const primerVacio = inputs.posiciones.findIndex((item) => {
		return item === ''
	})
	console.log(primerVacio)

	const word = inputs[0] + inputs[1] + inputs[2] + inputs[3] + inputs[4]
	// const word2 = inputs[5] + inputs[6] + inputs[7] + inputs[8] + inputs[9];
	// const word3 = inputs[10] + inputs[11] + inputs[12] + inputs[13] + inputs[14];
	// const word4 = inputs[15] + inputs[16] + inputs[17] + inputs[18] + inputs[19];
	// const word5 = inputs[20] + inputs[21] + inputs[22] + inputs[23] + inputs[24];
	// console.log(word1);

	const palabra = 'lajas'
	const silabas = palabra.split('')
	console.log(silabas[0])

	const validacion = (valor, index) => {
		if (inputs.validado === false) {
			return 'inputGrilla'
		} else if (valor === silabas[index]) {
			return 'inputGrilla correcto'
		} else if (
			silabas.find((item) => {
				return item === valor
			})
		) {
			return 'inputGrilla soso'
		} else if (
			silabas.find((item) => {
				return item !== valor
			})
		) {
			return 'inputGrilla miss'
		}
	}
	const verLlenos = (item) => {
		return item !== ''
	}
	// const correcto2 = palabra === word2;
	// const correcto3 = palabra === word3;
	// const correcto4 = palabra === word4;
	// const correcto5 = palabra === word5;

	// const lasCorrectas =
	//   correcto1 + correcto2 + correcto3 + correcto4 + correcto5;
	return (
		<div>
			<div className="grilla">
				{inputs.posiciones.map((item, index) => {
					return (
						<input
							key={index}
							onChange={(event) => {
								setInputs(() => {
									const copia = [...inputs.posiciones]
									const valorInput = event.target.value
									copia[index] = valorInput
									console.log(copia)
									return { ...inputs, posiciones: copia }
								})
							}}
							autoFocus={primerVacio === index}
							maxLength={1}
							className={validacion(item, index)}
							id={item}
						></input>
					)
				})}
			</div>
			<button
				onClick={() => {
					if (inputs.posiciones.every(verLlenos)) {
						setInputs(() => {
							return { ...inputs, validado: true }
						})
					}
				}}
			>
				Confirmar
			</button>
		</div>
	)
}

export default Grilla
