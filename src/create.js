import { displayLog } from './utils';
import { interval } from 'rxjs';

export default () => {

	/** start coding */
	const observable = interval(1000);

	const subscription = observable.subscribe( (x) => { console.log(x);  displayLog(x)} );

	setTimeout(() => {
			subscription.unsubscribe();
	},4000) 

	// NOTA: Cada ejecuacion de un observable implica una nueva subscripcion mde todo el flujo de datos
	/** end coding */
}
