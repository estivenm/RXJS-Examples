import { updateDisplay, displayLog } from './utils';
import { api } from './api';
import { fromEvent, throwError } from 'rxjs';
import { map, scan, tap, concatMap, catchError, retry } from 'rxjs/operators';

export default () => {
    /** start coding */
    
    const button = document.getElementById('btn');

    /** get comments on button click */
    fromEvent(button, 'click').pipe(
        scan((acc, evt) => acc + 1, 0),            
        concatMap(id => api.getComment(id).pipe(
            retry(3),
            throwError
            //catchError((err, src$) => { console.log('Catch!'); return src$;}),
        )),
        map(JSON.stringify),
        tap(console.log),
    ).subscribe(displayLog, err => console.log('Error: ', err.message));
        /**
         * throwError lazar excepciones en el flujo de un observable
         * capturar excepciones a nivel de subscripcion, este cierra la subscripcion
         * catchError capturar excepcines a nivel de flujo
         * retry  repite el observable un numero x li mitado de vecez antes de emitir un flujo de error
         */
     /** end coding */
}