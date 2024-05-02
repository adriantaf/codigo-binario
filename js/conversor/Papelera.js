'use strict';

class Papelera {
	temporizador;
	copiar(event) {
		let span = document.querySelector('.cv-output__span-copiado');
		let texto = OUTPUT.value;
		span.classList.remove('activar');

		navigator.clipboard.writeText(texto)
			.then(() => {
				span.classList.add('activar');

				if (this.temporizador) {
					this.ocultarTexto();
				}
				this.temporizador = setTimeout(()=>{
					span.classList.remove('activar')
				}, 3000);
			})
			.catch(err => {
				console.error('Error al copiar el texto: ', err);
			});
	}

	comprobarCompatibilidad(event) {
		if (!navigator.clipboard) {
			event.target.style.display='none';
		}
	}

	ocultarTexto() {
		clearTimeout(this.temporizador)
	}
}

const PAPELERA = new Papelera();