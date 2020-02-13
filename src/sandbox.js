import { displayLog } from './utils';
import { fromEvent } from 'rxjs';
import { map, first, take, takeWhile } from 'rxjs/operators';

export default () => {
    /** start coding */
    const grid = document.getElementById('grid');
    const click$ = fromEvent(grid, 'click').pipe(
        map(val => [ 
            Math.floor(val.offsetX/50), 
            Math.floor(val.offsetY/50)
        ]),

        // Emite solo el primer evento si cumple la condicion 
        // first(data => data[0] > 4),
        // ejecuta  los 4 primeros eventos
        // take(4),
        // emiter evento si la columna es mayor que  3
        takeWhile(([col , row]) => col > 3)
    );

    const subscription = click$.subscribe(data => displayLog(data));

    /**
     * firts Emiter solo el primer evento, ademas se agregar una  condicion para aplicarlo
     * Take  Operador que deja de emiter eventos despues de una cantidad de eventos
     * takewhile permite cancelar el stream despues que deja de cumplir cierta condicion
     */
    /** end coding */
}