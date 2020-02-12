import { displayLog } from './utils';
import { Observable } from 'rxjs';

export default () => {
	/** start coding */
	const hello = Observable.create(subscriber => {

		subscriber.next('hello');
		setTimeout(() => {
			subscriber.next('word');
			// terminar la subscripcion
			subscriber.complete();
		}, 2000);
	});

	// Estructura de un observer
	const observer = {
		next: env => displayLog(env),
		error: err => console.error('[Error]: ',err),
		complete: () => displayLog('[DONE]')

	}
	
	//Ejecutar observable
	//const subscribe = hello.subscribe(env => displayLog(env));
	
	//Ejecutar obserbable con estructura predefinida
	const subscribe1 = hello.subscribe(observer);
	
	// cancelar susbcricion fuera del observable
	subscribe1.unsubcribe();  

	// NOTA: Cada ejecuacion de un observable  implica una nueva subscripcion mde todo el flujo de datos
	/** end coding */
}
