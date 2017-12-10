// Angular
import { Directive, ElementRef, EventEmitter, Inject, Input, Renderer, OnDestroy, OnInit } from '@angular/core';
// RxJS
import { ISubscription } from 'rxjs/Subscription';


/**
 * The SignupComponent class is the component for this application's signup page.
 */
@Directive({
    selector: '[testFocus]'
})

export class FocusDirective implements OnDestroy, OnInit {
    /** Defines the input `testFocus` (from any form) to be of type EventEmitter of a boolean value. Is `true` in case a FormControl requests focus. */
    @Input() testFocus: EventEmitter<boolean>;
    /** Defines subscriptions to be typed as an array of ISubscription(s). initially set to be an empty array. */
    private subscriptions: ISubscription[] = [];

    /**
     * Creates and initializes the object created with the LoginComponent class.
     *
     * @param elementRef {ElementRef} ElementRef from `@angular/core`.
     * @param renderer {Renderer} Renderer from '@angular/core'.
     */
    constructor(

        @Inject(ElementRef) private elementRef: ElementRef,
        private renderer: Renderer,

    ) {


    }


    /**
     * Lifecycle handler: Executes logic before this component is destroyed:
     * - Cancels all subscriptions.
     * @returns {void} Nothing
     */
    ngOnDestroy(): void {
        // cancel the subscriptions of this component.
        this.subscriptions.forEach((subscription: ISubscription) => {
            if (typeof subscription !== 'undefined') {
                subscription.unsubscribe();
            }
        });
    }


    /**
     * Lifecycle handler: Execute initialization logic after this component's data-bound properties have been initialized.
     * @returns {void}
     */
    ngOnInit() {
        this.subscriptions.push(
            this.testFocus.subscribe((event: any) => {
                this.renderer.invokeElementMethod(this.elementRef.nativeElement, 'focus', []);
            })
        );
    }

}
