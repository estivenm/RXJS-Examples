import { displayLog } from './utils';
import { fromEvent } from 'rxjs';
import { map, takeWhile, tap, reduce, scan } from 'rxjs/operators';

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
        scan((accumalated, current)=> { 
             return {
                 clicks: accumalated.clicks + 1,
                 cells: [ ...accumalated.cells, current]
             }
        },{clicks:0, cells:[]})
    );

    const subscription = click$.subscribe(data => displayLog(`${data.clicks}, clicks:${JSON.stringify(data.cells)}` ));

    /** Reduce aplica una misma funcion a acada evento que pasa por el stream
        y devuelve el resultado cuando finaliza 
        
        Scan devuelve todo el historico
    **/
    /** end coding */
}