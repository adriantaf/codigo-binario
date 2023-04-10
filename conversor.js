'use strict';

const btnGenerarBinario = document.getElementById('btn-generar-binario');
const btnGenerarTexto = document.getElementById('btn-generar-texto');


///////////////////////////////////////////////////////////////////
// TEXTO A CODIGO BINARIO
////////////////////////////////////////////////////////////////////

function conversorBinario(ascii) {
	let codigoBin = [];

	while (ascii > 0) {
		codigoBin.unshift(ascii % 2);
		ascii = parseInt(ascii / 2);
	}
	
	codigoBin = verificarBits(codigoBin.join(""));

	return codigoBin;
}

function verificarBits(bin) {
	if (bin.length < 8) {
		let binCorregido;

		switch (bin.length) {
			case 1: binCorregido = "0000000" + bin; 
			break;
			case 2: binCorregido = "000000" + bin; 
			break;
			case 3: binCorregido = "00000" + bin;
			break;
			case 4: binCorregido = "0000" + bin; 
			break;
			case 5: binCorregido = "000" + bin; 
			break;
			case 6: binCorregido = "00" + bin; 
			break;
			case 7: binCorregido = "0" + bin; 
			break;
		}

		return binCorregido;
	}
}

function generarCodigoBinario() {
	let texto = txtAreaEntradaTexto.value;
	let arrayTexto = texto.split('');
	let arrayCodigoASCII = [];
	let arrayCodigoBinario = [];
	let codigoBinario = '';

	arrayTexto.forEach((elemento, x) => {
		arrayCodigoASCII[x] = elemento.charCodeAt();
	});

	arrayCodigoASCII.forEach(elemento => {
		arrayCodigoBinario.push(conversorBinario(elemento));
	});

	codigoBinario = arrayCodigoBinario.join(" ");

	txtAreaSalida.value = codigoBinario;
}

///////////////////////////////////////////////////////////////////
// CODIGO BINARIO A TEXTO
// 01001000 01101111 01101100 01100001 00100000 01101101 01110101 01101110 01100100 01101111
////////////////////////////////////////////////////////////////////

function generarTexto() {
	let binario = txtAreaEntradaBinario.value.trim();
	
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

		console.log(arrayLetras);

		texto = arrayLetras.join('');

		if (texto !== '') {
			txtAreaSalida.value = texto;
		}
	}
}


///////////////////////////////////////////////////////////////////
// EVENTOS
///////////////////////////////////////////////////////////////////////

btnGenerarBinario.addEventListener('click', generarCodigoBinario);
txtAreaEntradaTexto.addEventListener('keydown', (e) => {
	if (e.ctrlKey && e.keyCode === 13) {
		generarCodigoBinario();
	}
});

btnGenerarTexto.addEventListener('click', generarTexto);
txtAreaEntradaBinario.addEventListener('keydown', (e) => {
	if (e.ctrlKey && e.keyCode === 13) {
		generarTexto();
	}
});