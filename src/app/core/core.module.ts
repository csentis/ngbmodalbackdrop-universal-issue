// Angular
import { Injectable, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// 3rd party
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreRoutingModule, CoreRoutingProviders } from './core-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../shared/shared.module'; // has CommonModule and (Reactive)FormsModule


/**
 * Defines CoreModule's imports, declarations, entryComponents, exports and providers.
 * The module instantiates this applications' routes via its {@link CoreRoutingModule}.
 */
@NgModule({

    imports: [
        SharedModule,
        CoreRoutingModule,
    ],

    declarations: [
        FooterComponent,
        HomeComponent,
        LoginComponent,
        NavbarComponent
    ],
    
    entryComponents: [
        LoginComponent  // needed by NgbModal
    ],
    
    exports: [
        FooterComponent,
        // NgbModule, // ng-bootstrap for all non-lazy-loaded modules
        LoginComponent,
        NavbarComponent,
        SharedModule
    ],

    providers: [
        CoreRoutingProviders
    ]

})


/**
 * The CoreModule class provides site-wide fundamentals to the {@link AppModule}.
 */
export class CoreModule {
    /**
     * Creates and initializes the object created with the AppComponent class.
     * @param parentModule {CoreModule} The CoreModule from this application.
     */
    constructor(

        @Optional() @SkipSelf() parentModule: CoreModule

    ) {

        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only.');
        }

    }
}
