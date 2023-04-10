'use strict';

const btnTabTextoABinario = document.getElementById('btn-tab-texto-binario');
const btnTabBinarioATexto = document.getElementById('btn-tab-binario-texto');
const bloqueTexoABinario = document.getElementById('bloque-texto-a-binario');
const bloqueBinarioATexto = document.getElementById('bloque-binario-a-texto');
const txtAreaSalida = document.getElementById('txt-salida');
const txtAreaEntradaTexto = document.getElementById('txt-entrada-texto');
const txtAreaEntradaBinario = document.getElementById('txt-entrada-binario');


function cambiarBloque(opcion) {
	switch (opcion) {
		case 'texto-a-binario':
			btnTabTextoABinario.classList.add('activo');
			btnTabBinarioATexto.classList.remove('activo');
			bloqueTexoABinario.classList.remove('oculto');
			bloqueBinarioATexto.classList.add('oculto');

			txtAreaSalida.classList.add('binario');
			txtAreaSalida.classList.remove('texto');
		break;

		case 'binario-a-texto':
			btnTabTextoABinario.classList.remove('activo');
			btnTabBinarioATexto.classList.add('activo');
			bloqueTexoABinario.classList.add('oculto');
			bloqueBinarioATexto.classList.remove('oculto');

			txtAreaSalida.classList.add('texto');
			txtAreaSalida.classList.remove('binario');
		break;
	}
	
	txtAreaEntradaTexto.value = '';
	txtAreaEntradaBinario.value = '';
	txtAreaSalida.value = '';
}

btnTabTextoABinario.addEventListener('click', () => cambiarBloque('texto-a-binario'));
btnTabBinarioATexto.addEventListener('click', () => cambiarBloque('binario-a-texto'));

cambiarBloque('texto-a-binario');