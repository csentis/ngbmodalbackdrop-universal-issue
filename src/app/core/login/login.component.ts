/**
 * @License: No License. This software is unlicensed.
 * @Copyright: Copyright (c) 2017 Midyll UG (haftungsbeschränkt)
 * @Author: Christian Sentis
 * @Date: 2017-08-19 17:48:07
 * @Last Modified by: Christian Sentis
 * @Last Modified time: 2017-12-09 03:19:44
 */


// Angular
import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Inject, Input, OnInit, OnChanges, OnDestroy, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// RxJS
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { ISubscription } from 'rxjs/Subscription';

import { FocusDirective } from '../../shared/focus.directive';
import { LoginFormValidationMsg } from './login.interfaces';
import { CredentialsModel } from '../../shared/models/credentials.model';

/**
 * The LoginComponent class is the component for mbs application's login page.
 */
@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [
    ]
})

export class LoginComponent implements AfterViewInit, OnInit, OnDestroy {
    /**
     * Defines a new EventEmitter of type boolean. The event is emitted in in case a control of the HTML template needs focus setting.
     * The event is read by the {@link FocusDirective}.
     */
    public notifySetFocus: EventEmitter<boolean> = new EventEmitter<boolean>(); // use: this.notifySetFocus.emit(true);
    /**
     * Defines the validation message(s) of the login form to be of type Object. Initially set to be empty, later filled by {@link ValidationMsgService}.
     */
    public loginFormValMsg: LoginFormValidationMsg = {};
    // tslint:disable:max-line-length
    /**
     * Defines the information about whether this application's form has been submitted and is awaiting feedback from AuthenticationService to be of type boolean. Is 'true' if submitted and awaiting data, 'false' if not. Initially set to 'true', later handled in {@link LoginComponent.login}.
     * */
    /** Defines the login form to be of type FormGroup. */
    public loginForm: FormGroup;
    /** Defines the error message(s) of the login form to be of type string. Initially set to be empty. */
    public error = '';
    /** Defines the email regex checking pattern to be of type RegExp. This variable is filled from midyll/mbs global constants. */
    private emailRegEx: RegExp = /^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i;
    /** Defines the password minimum length to be of type number - a variable filled from midyll/mbs global constants. */
    private passwordMinLength = 10;
    /**
     * Provides empty credentials
     * - email: string,
     * - password: string
     * */
    private credentials = new CredentialsModel('', '');
    /** Defines the information about whether login form has been submitted to be of type boolean. Is `true` if submitted, `false` if not. Initially set to `false`, later handled in `login`. */
    private submitted = false;
    /** subscriptions is typed as an array of ISubscription(s) and set to contain an empty array. */
    private subscriptions: Array<ISubscription> = [];

    /**
     * Creates and initializes the object created with the LoginComponent class.
     * @param platformId {Object} PLATFORM_ID from '@angular/common'.
     * @param activeModal {NgbActiveModal} NgbActiveModal from `ng-bootstrap/ng-bootstrap`.
     * @param formBuilder {FormBuilder} FormBuilder from `angular/forms`.
     * @param router {Router} Router from `angular/router`.
     */
    constructor(

        @Inject(PLATFORM_ID) private platformId: Object,
        public activeModal: NgbActiveModal,
        private formBuilder: FormBuilder,
        private router: Router

    ) {

    }


    /** Lifecycle handler: Executes logic after this component's child views have been created:
     * - Requests focus for a `FormControl`.
     *
     * @returns {void} Nothing
     */
    ngAfterViewInit(): void {
        this.notifySetFocus.emit();
    }


    /**
     * Lifecycle handler. Executes initialization logic after this component's data-bound properties have been initialized:
     * - Calls for building of the login form.
     *
     * @returns {void}
     */
    ngOnInit(): void { this.buildForm(); }


    /**
     * Lifecycle handler: Executes logic before this component is destroyed:
     * - Cancels all subscriptions.
     *
     * @returns {void} Nothing
     */
    ngOnDestroy(): void {
        this.subscriptions.forEach((subscription: ISubscription) => {
            if (typeof subscription !== 'undefined') {
                subscription.unsubscribe();
            }
        });
    }


    /**
     * Builds the login form using FormBuilder. Calls onValueChanged() in case values entered in the login form have changed.
     *
     * @returns {void}
     */
    buildForm(): void {
        this.loginForm = this.formBuilder.group({
            'email': [
                this.credentials.email,
                Validators.compose([
                    Validators.required,
                    Validators.pattern(this.emailRegEx)
                ])
            ],
            'password': [
                this.credentials.password,
                Validators.compose([Validators.required, Validators.minLength(this.passwordMinLength)])
            ],
        });

        this.loginForm.valueChanges
            .subscribe(data => this.onValueChanged(data));
        this.onValueChanged(); // (re)set validation messages now

    }

    /**
     * Executes the login logic.
     * @returns {void}
     */
    login(): void {
        this.submitted = true;
        this.credentials = this.loginForm.value;
    }

    /**
     * Closes the login modal.
     * @returns {void}
     */
    onClose(): void { this.activeModal.close(); }

    /**
     * Calls for execution of the login logic.
     * @returns {void}
     */
    onSubmit(): void { this.login(); }

    // tslint:disable:max-line-length
    /**
     * Lifecycle handler. Looks for validation errors after every user keystroke clears the prior error message if any acquires the field's corresponding Angular form control.
     * If such a control exists and it has been changed ("dirty") and it is invalid, the handler calls {@link ValidationMsgService} for composition of a consolidated error message for all of the control's errors.
     *
     * Based on angular.io's form validation example, cp. https://angular.io/docs/ts/latest/cookbook/form-validation.html
     *
     * @param [data] {any} Data that has changed (optional).
     * @returns {void}
     */
    // tslint:enable:max-line-length
    onValueChanged(data?: any): void {

        if (this.loginForm) {
            const form = this.loginForm;
        } else {
            return;
        }

    }

}
