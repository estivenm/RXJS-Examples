import { displayLog } from './utils';
import { of, range } from 'rxjs'

export default () => {
    /** start coding */
	const  sourceNumber = of(1,2,3,4,6,5);
	const subscribeSourceNumber = sourceNumber.subscribe(data => displayLog(data));
	displayLog()
	
	const  sourceElements = of(
		[1,2,3],
		'Hello Word',
		{name:'Juan', lastname: 'Mazo'},
		function sayHello() { return 'Hello'; }
	);
	const subscribeSourceElements = sourceElements.subscribe(data => displayLog(data));

	const sourceRange = range(5, 15);
	const subscribeSourceRange = sourceRange.subscribe(data => displayLog(data));
	/** end coding */
	
	/**
	 * Nota:
	 * Funcion of permite emiter una secuencia datos de  objetos
	 */
}