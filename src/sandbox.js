import { displayLog } from './utils';
import { fromEvent } from 'rxjs';
import { map, takeWhile, tap, distinct, distinctUntilChanged } from 'rxjs/operators';

export default () => {
    /** start coding */
    const grid = document.getElementById('grid');
    const click$ = fromEvent(grid, 'click').pipe(
        // convertir las cordernadas  del raton en posiones
        map(val => [ 
            Math.floor(val.offsetX/50), 
            Math.floor(val.offsetY/50)
        ]),
        // transdormar coordenadas en  unico valor suma de col + fila
        takeWhile( ([col, row]) => col != 0 ),
        tap(val => console.log(`cell: [${val}]`)),
        //map(([col, row]) => col+row),
       // tap(val => console.log('sum of col + row is:', val)),
        // distinct(([col, row]) => `${col}` - `${row}`),
        distinctUntilChanged(
            (cell1, cell2) => 
            (cell1[0] === cell2[0]) &&
            (cell1[1] === cell2[1])
        )
    );

    const subscription = click$.subscribe(data => displayLog(data));

    /**
     * Operador distinct y distinctUntilChanged
     * distinct
     * No deja pasar ningun  valor que ya se ha emitido con aterioridad
     * para comparar objetos se debe pasar el valor que se desea comparar
     * 
     * distinctUntilChanged
     * No deja pasar ningun valor que ya se ha emitido consecutivamente
     * para comparar objetos se debe pasar una funcion de comparacion , recibe 
     * 2 eventos  y devolver un boolean para bloquear el evento actual
     *  
     */
    /** end coding */
}