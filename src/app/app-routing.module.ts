// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component';


/**
 * Declares and exports {@link AppModule}'s routes to be of type `Routes` (an array of objects).
 * First-match wins: go from specific to general.
 */
export const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent }
    // { path: '**', redirectTo: 'error', pathMatch: 'full' }
];

/**
 * Declares and exports the constant for {@link AppModule}'s routing providers to be typed as an array of values of type `any`. Initially set to be empty.
 * */
export const AppRoutingProviders: Array<any> = [];

@NgModule({

    imports: [
        RouterModule.forRoot(appRoutes, { useHash: false })
    ],

    exports: [
        RouterModule
    ]

})

// useHash: https://angular.io/docs/ts/latest/guide/router.html#browser-url-styles
export class AppRoutingModule { }
