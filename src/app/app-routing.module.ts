import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from 'src/app/pages/inicio/inicio.component';
import { ListadoCuentosComponent } from 'src/app/pages/cuentos/listado-cuentos/listado-cuentos.component';
import { ZenaComponent } from 'src/app/pages/cuentos/zena/zena.component';
import { TomasaComponent } from 'src/app/pages/cuentos/tomasa/tomasa.component';
import { ListadoJuegosComponent } from 'src/app/pages/juegos/listado-juegos/listado-juegos.component';
import { MemoryComponent } from 'src/app/pages/juegos/memory/memory.component';
import { SimonComponent } from 'src/app/pages/juegos/simon/simon.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'cuentos', component: ListadoCuentosComponent },
  { path: 'cuentos/zena', component: ZenaComponent },
  { path: 'cuentos/tomasa', component: TomasaComponent },
  { path: 'juegos', component: ListadoJuegosComponent },
  { path: 'juegos/memory', component: MemoryComponent },
  { path: 'juegos/simon', component: SimonComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
