// Angular
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FocusDirective } from './focus.directive';


/**
 * Defines SharedModule's imports, declarations, exports and providers.
 * The module instantiated this applications' routes via {@link AppRoutingModule} and {@link CoreRoutingModule}.
 */
@NgModule({

    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
    ],

    declarations: [
        FocusDirective
    ],

    exports: [
        CommonModule,
        FocusDirective,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
    ],

    providers: [ ]

})


/**
 * The SharedModule class is providing extras which are not necessarily used site-wide.
 */
export class SharedModule { }
