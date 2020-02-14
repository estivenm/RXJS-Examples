import { displayLog } from './utils';
import { fromEvent } from 'rxjs';
import { map, takeWhile, tap, last } from 'rxjs/operators';

export default () => {
    /** start coding */
    const grid = document.getElementById('grid');
    const click$ = fromEvent(grid, 'click').pipe(
        map(val => [ 
            Math.floor(val.offsetX/50), 
            Math.floor(val.offsetY/50)
        ]),
        takeWhile( ([col, row]) => col > 3 ),
        tap(val => console.log('valid in takeWhile', val)),
        last()
        // takeLast(3),
        // skip(5)
    );

    const subscription = click$.subscribe(data => displayLog(data));
        // last  emite  ultimo valor que ha recibido
        // takeLast  emite los ultimos x cantidad de valores recibidos
        // Skip permite obmitir una x  cantidad de valores 
    /** end coding */
}