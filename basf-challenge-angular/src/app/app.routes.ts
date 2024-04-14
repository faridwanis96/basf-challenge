import {Routes} from '@angular/router';
import {LandingComponent} from "./components/landing/landing.component";
import {ItemListComponent} from "./components/item-list/item-list.component";

export const routes: Routes = [
    {path: 'landing', component: LandingComponent},
    {path: 'item-list', component: ItemListComponent},
    {path: '**', redirectTo: 'landing'}
];
