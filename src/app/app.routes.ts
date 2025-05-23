import { Routes } from '@angular/router';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { CarMakerComponent } from './components/car-maker/car-maker.component';
import { ConversorDivisasComponent } from './components/conversor-divisas/conversor-divisas.component';
import { GenerarImagenComponent } from './components/generar-imagen/generar-imagen.component';
import { GenerarQrComponent } from './components/generar-qr/generar-qr.component';
export const routes: Routes = [
    {path: '', redirectTo: '/noticias/', pathMatch: 'full'},
    {path: 'noticias', component: NoticiasComponent},
    {path: 'car-maker', component: CarMakerComponent},
    {path: 'conversor', component: ConversorDivisasComponent},
    {path: 'generador-imagen', component: GenerarImagenComponent},
    {path: 'generar-qr', component: GenerarQrComponent}
];
