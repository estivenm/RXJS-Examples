import { updateDisplay, displayLog } from './utils';
import { api } from './api';
import { fromEvent } from 'rxjs';
import { map, scan, tap, mergeMap, switchMap, concatMap } from 'rxjs/operators';

export default () => {
    /** start coding */
    
    const button = document.getElementById('btn');

    /** get comments on button click */
    fromEvent(button, 'click').pipe(
        scan((acc, evt) => acc + 1, 0),            
        concatMap(id => api.getComment(id)),
        map(JSON.stringify),
        tap(console.log),
    ).subscribe(displayLog);
    /**
     * HOO Hide order observable (son observables que emiten nuevos observables)
     * switchMap: permite quedarse con el observable mas reciente,
     * cancela la susbcripcion de los que no se resolvieron
     * 
     * concatMap: devuelve el observable interno y se subscribe alos eventos internos
     * retorna los evetos de forma ordenada
     */
    /** end coding */
}