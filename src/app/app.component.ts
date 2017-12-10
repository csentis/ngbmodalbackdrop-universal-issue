// Angular
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


/**
 * Defines AppComponent's selector used within index.html, its external template and its stylesheet.
 */
@Component({
    selector: 'test-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})


/**
 * The AppComponent class is the root component of the `test/pwa` application.
 */
export class AppComponent implements OnInit {

    /**
     * Creates and initializes the object created with the AppComponent class.
     *
     * @param {Title} title Title from `angular/platform-browser`
     */
    constructor(

        public title: Title

    ) {

    }

    /**
     * Lifecycle handler: Executes initialization logic after the AppComponent's data-bound properties have been initialized.
     *
     * @returns {void}
     */
    ngOnInit(): void {
    }

}
