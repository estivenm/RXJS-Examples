import { updateDisplay } from './utils';
import { fromEvent, Subject, BehaviorSubject } from 'rxjs';
import { map, tap, share } from 'rxjs/operators';

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
        share()
    )

    // const  scrollProgressHot$ =  new  Subject();
    const  scrollProgressHot$ =  new  BehaviorSubject(0);

    scrollProgress$.subscribe(scrollProgressHot$);

    //subscribe to scroll progress to paint a progress bar
    const subscription = scrollProgressHot$.subscribe(updateProgressBar);

    //subscribe to display scroll progress percentage
    const subscription2 = scrollProgressHot$.subscribe(
        val => updateDisplay(`${ Math.floor(val) } %`)
    );

    // scrollProgressHot$.next(0)
    console.log('valor inicial de scrollProgressHot:', scrollProgressHot$.value)

    /**
     * Subject  tipo especial de Observable (permite multi casth de eventos para varios observadores)
     * Distribuidor de eventos , ademas permite emitir sus propios eventos 
     * 
     * BehaviorSubject
     * Actua como Subject pero este guarda el ultimo evento emitido (se puede acceder a este en cualquier momento)
     * se inicializa con un valor por defecto
     */
    /** end coding */
}