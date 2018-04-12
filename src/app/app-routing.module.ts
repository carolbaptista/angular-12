import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ClientesComponent } from './clientes/clientes.component';
import { LoginComponent } from './login/login.component';
import { ServicoComponent } from './servico/servico.component';

const routes: Routes = [
{ path: '', redirectTo: './login', pathMatch: 'full' },
{ path: 'servico', component: ServicoComponent },
{ path: 'cliente', component: ClientesComponent }

];

@NgModule({
imports: [ RouterModule.forRoot(routes) ],
exports: [ RouterModule ]
})

export class AppRoutingModule {}