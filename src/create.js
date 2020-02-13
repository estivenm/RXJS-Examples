import { displayLog } from './utils';

import { fromEvent } from 'rxjs';

export default () => {
	/** start coding */

	// crear referencia  para el boton
	const actionBtn = document.getElementById('action-btn');

	//Generar un Observable apartir del evento click
	const sourceClickBtn =  fromEvent(actionBtn, 'click');

	sourceClickBtn.subscribe(evn => displayLog(`click event at pos ${evn.x}, ${evn.y}`));

	fromEvent(document, 'mousemove')
	.subscribe(even => {
		console.log(even);
	});


	/**
	 * Nota
	 * fromEvent asocia una funcion o accion concreta a un observable
	 */

    /** end coding */
}