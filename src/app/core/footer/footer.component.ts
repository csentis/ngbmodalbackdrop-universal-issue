// Angular
import { Component, OnInit } from '@angular/core';


/**
 * Defines FooterComponent's HTML selector in app.component.html, its external template and its stylesheet.
 */
@Component({
    selector: 'test-footer',
    templateUrl: 'footer.component.html',
    styleUrls: ['./footer.component.scss']
})


/**
 * The FooterComponent class is the component this application's footer.
 * Implements OnInit interface.
 */
export class FooterComponent implements OnInit {

    /**
     * Creates and initializes the object created with the class.
     */
    constructor(

    ) {

    }

    /**
     * Lifecycle handler: Calls for building of the login form.
     */
    ngOnInit(): void { }

}
