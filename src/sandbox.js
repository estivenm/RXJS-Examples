import { updateDisplay } from './utils';
import { fromEvent } from 'rxjs';
import { map, tap, delay, bufferTime } from 'rxjs/operators';

export default () => {
    /** start coding */
    
    const progressBar = document.getElementById('progress-bar');
    const docElement = document.documentElement;

    //function to update progress bar width on view
    const updateProgressBar = (percentage) => {
        progressBar.style.width = `${percentage}%`;
    }

    //observable that returns scroll (from top) on scroll events
    const scroll$ = fromEvent(document, 'scroll').pipe(
        map(() => docElement.scrollTop),
        tap(evt => console.log("[scroll]: ", evt))
        );
        
        //observable that returns the amount of page scroll progress
        const scrollProgress$ = scroll$.pipe(
            map(evt => {
                const docHeight = docElement.scrollHeight - docElement.clientHeight;
                return (evt / docHeight) * 100;
            }),
            bufferTime(2000,1000),
            tap(evt => console.log("[buffer]: ", evt))
    )

    //subscribe to scroll progress to paint a progress bar
    const subscription = scrollProgress$.subscribe(updateProgressBar);


    /**
     *  delay  este operador  permite generar un retraso en el flujo de datos
     * bufferTime se ejecuta cada determinado tiempo y guarda un flujo de muestra en ese interavalo de tiempo 
     * (tambien se puede eapecificar en que tiempo emitir esas muestras recolectadas )
     */
    /** end coding */
}