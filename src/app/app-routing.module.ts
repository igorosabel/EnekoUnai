import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from 'src/app/pages/inicio/inicio.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
  },
  {
    path: 'cuentos',
    loadComponent: () =>
      import('src/app/pages/cuentos/listado-cuentos/listado-cuentos.component'),
  },
  {
    path: 'cuentos/zena',
    loadComponent: () => import('src/app/pages/cuentos/zena/zena.component'),
  },
  {
    path: 'cuentos/tomasa',
    loadComponent: () =>
      import('src/app/pages/cuentos/tomasa/tomasa.component'),
  },
  {
    path: 'juegos',
    loadComponent: () =>
      import('src/app/pages/juegos/listado-juegos/listado-juegos.component'),
  },
  {
    path: 'juegos/memory',
    loadComponent: () => import('src/app/pages/juegos/memory/memory.component'),
  },
  {
    path: 'juegos/simon',
    loadComponent: () => import('src/app/pages/juegos/simon/simon.component'),
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
