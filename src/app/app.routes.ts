import { Routes } from '@angular/router';
import { InicioComponent } from 'src/app/modules/inicio/inicio.component';

export const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
  },
  {
    path: 'cuentos',
    loadComponent: () =>
      import(
        'src/app/modules/cuentos/listado-cuentos/listado-cuentos.component'
      ),
  },
  {
    path: 'cuentos/zena',
    loadComponent: () => import('src/app/modules/cuentos/zena/zena.component'),
  },
  {
    path: 'cuentos/tomasa',
    loadComponent: () =>
      import('src/app/modules/cuentos/tomasa/tomasa.component'),
  },
  {
    path: 'juegos',
    loadComponent: () =>
      import('src/app/modules/juegos/listado-juegos/listado-juegos.component'),
  },
  {
    path: 'juegos/memory',
    loadComponent: () =>
      import('src/app/modules/juegos/memory/memory.component'),
  },
  {
    path: 'juegos/simon',
    loadComponent: () => import('src/app/modules/juegos/simon/simon.component'),
  },
  {
    path: 'juegos/koloreak',
    loadComponent: () =>
      import('src/app/modules/juegos/koloreak/koloreak.component'),
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
