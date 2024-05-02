'use strict';

class MenuResponsive {
	toggleMenu(event) {
		const menu = document.getElementById('menu');
		menu.classList.toggle('activado')
	}
}
const MENU = new MenuResponsive();