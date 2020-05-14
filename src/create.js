import { displayLog } from './utils';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';

export default () => {

	/** start coding */
	const observable = interval(1000);

	const subscription = observable
	.pipe(
		tap(x => displayLog(x))
	).subscribe();

	setTimeout(() => {  subscription.unsubscribe(); }, 4000) 

	// NOTA: Cada ejecuacion de un observable implica una nueva subscripcion mde todo el flujo de datos
	/** end coding */
}
