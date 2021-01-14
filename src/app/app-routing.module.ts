import { NgModule }                from '@angular/core';
import { Routes, RouterModule }    from '@angular/router';
import { InicioComponent }         from './pages/inicio/inicio.component';
import { ListadoCuentosComponent } from './pages/cuentos/listado-cuentos/listado-cuentos.component';
import { ZenaComponent }           from './pages/cuentos/zena/zena.component';
import { ListadoJuegosComponent }  from './pages/juegos/listado-juegos/listado-juegos.component';
import { MemoryComponent }         from './pages/juegos/memory/memory.component';

const routes: Routes = [
	{ path: '',              component: InicioComponent },
	{ path: 'cuentos',       component: ListadoCuentosComponent },
	{ path: 'cuentos/zena',  component: ZenaComponent },
	{ path: 'juegos',        component: ListadoJuegosComponent },
	{ path: 'juegos/memory', component: MemoryComponent },
	{ path: '**',            redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
