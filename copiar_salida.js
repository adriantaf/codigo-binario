'use strict';

const btnCopiar = document.getElementById('btn-copiar');

btnCopiar.addEventListener('click', (e) => {
	let salida = txtAreaSalida.value;

	if (salida !== '') {
		let textoCopiado = '';

		txtAreaSalida.select();
		textoCopiado = document.execCommand('copy');
		txtAreaSalida.setSelectionRange(0, 0);

		if (textoCopiado) {
			txtAreaSalida.classList.remove('copiar');

			setInterval(()=> {
				txtAreaSalida.classList.add('copiar');
			}, 10);
		}
	}
});