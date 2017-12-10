// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';


/**
 * Declares and exports {@link CoreModule}'s routes to be of type `Routes` (an array of objects).
 * First-match wins: go from specific to general.
 */
export const coreRoutes: Routes = [
    {
        path: 'login', component: LoginComponent,
        data: { title: 'Login' }
        // canActivate: [AuthGuard] },
    },
];

/**
 * Declares and exports the constant for {@link CoreModule}'s routing providers to be typed as an array of values of type `any`. Initially set to be empty.
 */
export const CoreRoutingProviders: Array<any> = [];

@NgModule({

    imports: [
        RouterModule.forChild(coreRoutes)
    ],

    exports: [
        RouterModule
    ]

})

export class CoreRoutingModule { }
