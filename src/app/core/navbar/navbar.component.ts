// Angular
import { Component, Inject, OnInit, NgZone, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
// RxJS
// 3rd party
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

import { LoginComponent } from '../login/login.component';


/**
 * The NavbarComponent class is the component for this application's navigaton menu.
 */
@Component({
    selector: 'test-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})


export class NavbarComponent implements OnInit {

    /**
     * Creates and initializes the object created with the class.
     *
     * @param {NgZone} zone NgZone from `@angular/core`.
     * @param {NgbModal} modal NgbModal from `ng-bootstrap/ng-bootstrap`.
     */
    constructor(
        public zone: NgZone,
        private modal: NgbModal
    ) {

    }

    /**
     * Lifecycle handler. Executes initialization logic after this component's data-bound properties have been initialized.
     *
     * Currently does nothing.
     *
     * @returns {void}
     */
    ngOnInit(): void { }

    /**
     * Opens the login modal.
     *
     * @returns {void}
     */
    login(): void {
        this.modal.open(LoginComponent);
    }

}
