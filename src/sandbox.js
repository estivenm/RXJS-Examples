import { displayLog } from './utils';
import { fromEvent } from 'rxjs';
import { map, takeWhile, tap, startWith, endWith } from 'rxjs/operators';

export default () => {
    /** start coding */
    const grid = document.getElementById('grid');
    const click$ = fromEvent(grid, 'click').pipe(
        map(val => [ 
            Math.floor(val.offsetX/50), 
            Math.floor(val.offsetY/50)
        ]),
        takeWhile( ([col, row]) => col != 0 ),
        tap(val => console.log(`cell: [${val}]`)),
        startWith('Iniciando Game', 'Cargando...'),
        endWith('Game fineshed', 'bye!')
    );

    const subscription = click$.subscribe(data => displayLog(data));

    /**
     * Start with Emitir evetos al iniciar el stream
     * End with Emitir  eventos al finaliazar el stream
     */
    /** end coding */
}