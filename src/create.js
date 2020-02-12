import { displayLog } from './utils';
import  { interval, timer } from 'rxjs'
export default () => {

    /** start coding */
	const sourceInterval = interval(500);
	const subscriptionInterval = sourceInterval.subscribe(data => displayLog(data));
	
	timer(3000).subscribe(() => subscriptionInterval.unsubscribe());
	
	// Se espera que se ejecute despues de  4seg cada 100 milisegundos
	const sourceTimer = timer(4000, 100);
	const subscriptionTimer = sourceTimer.subscribe(data => displayLog(`Timer 2 - ${data}`));
	
	// Eliminar subscripcion del timer  despues de  6 segundos
	timer(6000).subscribe(() => subscriptionTimer.unsubscribe());
	
	/**
	 * NOTA:
	 * Funcion Interval permite crear secuecias de observables cada determinado tiempo
	 * se debe controlar la finalizacion de la ejecucion del interval 
	
	 * Timer obterner un evento cadadeterminado tiempo

	 */
    /** end coding */
}