// Angular
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
// 3rd party
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule, AppRoutingProviders } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { environment } from './../environments/environment';


/**
 * Defines AppModule's imports, declarations, exports, providers and what component to bootstrap.
 * The module instantiates this applications' routes via {@link AppRoutingModule} and, implicitly via the imported {@link CoreModule}'s {@link CoreRoutingModule}.
 */
@NgModule({
    imports: [
        // BrowserModule,
        BrowserModule.withServerTransition({
          appId: 'test-univ-pwa'
        }),
        CoreModule, // features SharedModule w/ CommonModule and HttpClientModule (which needs to be imported after BrowserModule)
        NgbModule.forRoot(),
        AppRoutingModule,
        environment.production ? ServiceWorkerModule.register('./ngsw-worker.js') : []
    ],
    declarations: [
        AppComponent
    ],
    exports: [
        AppComponent
    ],
    providers: [
        AppRoutingProviders,
        Title
    ],

    bootstrap: [
        AppComponent
    ]
})


/**
 * The AppModule class is the module for this application's base module.
 * The module instantiates this applications' routes via {@link AppRoutingModule} and {@link CoreRoutingModule}.
 */
export class AppModule {
    /**
     * Creates and initializes the object created with the AppComponent class.
     *
     * @param {Router} router Router from `@angular/router`
     */
    constructor(

        router: Router

    ) { }
}
