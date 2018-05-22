import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './../../modules/login/';
 
 
export const PUBLIC_ROUTES: Routes = [
    // { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent }
];