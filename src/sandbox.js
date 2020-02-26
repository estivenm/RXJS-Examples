import { updateDisplay, displayLog } from './utils';
import { api } from './api';
import { merge, fromEvent, concat, forkJoin } from 'rxjs';
import { map, endWith } from 'rxjs/operators';

export default () => {
    /** start coding */
    
    const button = document.getElementById('btn');

    /** get 4 consecutive comments */
    const getComments = () =>{
        //get observables from fake REST API.
        const comment1$ = api.getComment(1);
        const comment2$ = api.getComment(2);
        const comment3$ = api.getComment(3);
        const comment4$ = api.getComment(4);

        //subscribe to all the observables to get and display comments
        forkJoin(comment1$, comment2$, comment3$, comment4$).pipe(
            // map(({id, comment}) => `#${id} - ${comment}`),
            map(JSON.stringify),
            endWith('--------//--------')
        ).subscribe(data =>{
            displayLog(data);
        })
    }

    /** get comments on button click */
    fromEvent(button, 'click').subscribe(getComments);

    /**
     * concat emite todos los eventos en  un mismo flujo (secuencial)
     * forkJoin espera que se complete todo un flujo de datos y emite  un flujo con el ultimo valor
     */
    /** end coding */
}