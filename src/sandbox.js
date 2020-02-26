import { updateDisplay } from './utils';
import { fromEvent } from 'rxjs';
import { map, tap, sampleTime, auditTime, throttleTime } from 'rxjs/operators';

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
        // sampleTime(50),
        // auditTime(50),
        throttleTime(50),
        map(() => docElement.scrollTop),
        tap(evt => console.log("[scroll]: ", evt))
    );

    //observable that returns the amount of page scroll progress
    const scrollProgress$ = scroll$.pipe(
        map(evt => {
            const docHeight = docElement.scrollHeight - docElement.clientHeight;
            return (evt / docHeight) * 100;
        })
    )

    //subscribe to scroll progress to paint a progress bar
    const subscription = scrollProgress$.subscribe(updateProgressBar);

    /**
    * operadores temporares (limitar frecuencia de emitir eventos)
    * sampleTime emite el valor mas reciente dentro de un flujo de datos cada  determinado tiempo
    * auditTime espera a detectar un evento, luego espera  determinado retraso para ejecutarse
    *  throttleTime detecta un evento y lo emite, luego espera  determinado tiempo para ejecutarse nuevamente 
    * (no garariza obtener el ultimo valor ejecutado)
    */
    /** end coding */
}