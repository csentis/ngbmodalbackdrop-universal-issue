// Angular
import { Component, Inject, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Title } from '@angular/platform-browser';


/**
 * The HomeComponent class is the component of the mbs application's home page.
 */
@Component({
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class HomeComponent implements OnDestroy, OnInit {

    /**
     * Creates and initializes the object created with the HomeComponent class.
     * @param {Title} title Title from '@angular/platform-browser'.
     */
    constructor(

        public title: Title,

    ) {

        //

    }

    /**
     * Lifecycle handler: Execute initialization logic after this component's data-bound properties have been initialized:
     * - Subscribes to event in order to get the translation when the component is loaded and when the current language changes.
     * @returns {void}
     */
    ngOnInit(): void {
        this.setTitle();
    }

    /**
     * Lifecycle handler: Executes logic before this component is destroyed.
     * @returns {void}
     */
    ngOnDestroy(): void {
    }

    /**
     * Sets the title.
     * @returns {void}
     */
    setTitle(): void {
        this.title.setTitle('Test');
    }

}
