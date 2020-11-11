import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListadoCuentosComponent } from './pages/cuentos/listado-cuentos/listado-cuentos.component';
import { ZenaComponent } from './pages/cuentos/zena/zena.component';

const routes: Routes = [
	{ path: '', component: InicioComponent },
	{ path: 'cuentos', component: ListadoCuentosComponent },
	{ path: 'cuentos/zena', component: ZenaComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
