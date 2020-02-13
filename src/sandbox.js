import { displayLog } from './utils';
import { fromEvent, Mapo } from 'rxjs';
import { MapTo, mapTo, map, filter } from 'rxjs/operators';

export default () => {
    /** start coding */
    const grid = document.getElementById('grid');
    const fromEventClick = fromEvent(grid, 'click').pipe(
        
        // mapTo('CLICK'),
        // map(data => [data.offsetX, data.offsetY]),
         map(data =>[
             Math.floor(data.offsetX / 50 ),
             Math.floor(data.offsetY / 50 )]
         ),
        filter( data => (data[0] + data[1]) % 2 != 0 ) 
    );
    const subscriptionGrid = fromEventClick.subscribe(data => displayLog(data));

    /** 
    * Nota
    * Operadores
    * MapTo operador de transformacion, para cada evento que entra transforma la salida
    * devolviendo simpre el mismo valor
    * 
    * filter
    * solo deja pasar los valores que cumplen con una condicion
    * 
    */

    /** end coding */
}