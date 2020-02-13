import { displayLog } from './utils';
import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export default () => {
    /** start coding */
    const grid = document.getElementById('grid');
    const click$ = fromEvent(grid, 'click').pipe(
        tap( data => console.log('Before:', data )),
        map(val => [ 
            Math.floor(val.offsetX/50), 
            Math.floor(val.offsetY/50)
        ]),
        tap( data => console.log('After:', data ))
    );

    const subscription = click$.subscribe(data => displayLog(data));

    /**
     * Nota operador tap
     * permite leer infomacion en cualquier punto del stream de datos,
     * no permite mnodificar el stream de datos
     * 
     */
    /** end coding */
}