import { displayLog } from './utils';
import Observable, { from } from 'rxjs';
export default () => {
    /** start coding */

	const myArray = [1,2,3,4,5,6]
	const myString =  "Hello word";

	const myPromise = new Promise(resolve => setTimeout(() => {
		resolve('Hello word')
	}, 2000));

	
	const observaleMyArray = from(myArray);
	const subscriptionMyArray = observaleMyArray.subscribe(val => displayLog(val));

	const observaleMyString = from(myString);
	const subscriptionMyString = observaleMyString.subscribe(val => displayLog(val));
	
	// Conservertir promesa en Observable

	const observableMyPromise = from(myPromise);
	const subscriptionMyPromise = observableMyPromise.subscribe(val => displayLog(val))
	
	/** end coding */

	/** 
	 *Nota las promesas y observables permiten devolver eventos asincronos,
	 las promesas solo permiten devolver un evento, los observables un flujo de datos completos
	 ademas estas se pueden cancelar cuando se desee
	 */
}