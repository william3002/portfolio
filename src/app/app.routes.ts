import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';

export const routes: Routes = [
    {path: "", redirectTo: 'home', pathMatch: 'full'},
    {path: "home", component: HomeComponent},
    {path: "contato", component: ContatoComponent},
    {path: "projetos", component: ProjetosComponent},
];
