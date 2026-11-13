import { Routes } from '@angular/router';
import { NotFoundPage } from './pages/not-found-page/not-found-page';
import { RegisterFormPage } from './pages/register-form-page/register-form-page';
import { ConfirmationPage } from './pages/confirmation-page/confirmation-page';

export const routes: Routes = [
    {path: '', pathMatch: 'full', component: RegisterFormPage },
    {path: 'confirmacion/:nombre', component: ConfirmationPage },
    {path: '**', component: NotFoundPage },
];
