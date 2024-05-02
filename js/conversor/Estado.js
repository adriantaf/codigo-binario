'use strict';

const INPUT = document.getElementById('cv-input');
const OUTPUT = document.getElementById('cv-output');

class Estado {
	estadoInput;
	estadosInput = {
		binario: 'Código binario',
		texto: 'Texto'
	}
	cambiarEstado(nuevoEstado) {
		const inputTempValue = INPUT.value;
		const outputTempValue = OUTPUT.value;

		this.estadoInput = nuevoEstado;
		INPUT.labels[0].textContent = this.estadoInput;
		INPUT.placeholder = `Digitar ${this.estadoInput.toLowerCase()}`;
		OUTPUT.value = inputTempValue;
		INPUT.value = outputTempValue;
		OUTPUT.scrollTo({top: OUTPUT.scrollHeight});
		INPUT.focus();

		if (nuevoEstado === this.estadosInput.texto) {
			INPUT.onkeyup = this.traducirTexto;
			OUTPUT.labels[0].textContent = this.estadosInput.binario;
			this.estadoInput = this.estadosInput.binario;
		} else {
			INPUT.onkeyup = this.traducirBinario;
			OUTPUT.labels[0].textContent = this.estadosInput.texto;
			this.estadoInput = this.estadosInput.texto;
		}
	}

	traducirTexto(event) {
		let texto = event.target.value;
		let arrayTexto = texto.split('');
		let arrayCodigoASCII = [];
		let arrayCodigoBinario = [];
		let codigoBinario;

		arrayTexto.forEach((elemento, x) => {
			arrayCodigoASCII[x] = elemento.charCodeAt();
		});

		arrayCodigoASCII.forEach(elemento => {
			arrayCodigoBinario.push(elemento.toString(2).padStart(8, '0'));
		});

		codigoBinario = arrayCodigoBinario.join(" ");

		OUTPUT.value = codigoBinario;
		OUTPUT.scrollTo({top: OUTPUT.scrollHeight});
	}

	traducirBinario(event) {
		let binario = event.target.value.trim();

		if (binario !== '') {
			let arrayBinario = binario.split(' ');
			let arrayCodigoASCII = [];
			let arrayLetras = [];
			let texto = '';

			arrayBinario.forEach((ele, i) => {
				if (parseInt(ele, 2)) {
					arrayCodigoASCII[i] = parseInt(ele, 2);
				}
			});

			arrayCodigoASCII.forEach((ele, i) => {
				arrayLetras[i] = String.fromCharCode(ele);
			});

			texto = arrayLetras.join('');

			if (texto !== '') {
				OUTPUT.value = texto;
				OUTPUT.scrollTo({top: OUTPUT.scrollHeight});
			}
		} else {
			OUTPUT.value = "";
		}
	}
}


const BS = new Estado();
BS.cambiarEstado(BS.estadosInput.texto);
