import { Route, Routes } from '@angular/router';
import InicioComponent from '@modules/inicio/inicio.component';

export const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
  },
  {
    path: 'cuentos',
    loadChildren: () =>
      import('src/app/modules/cuentos/cuentos-routes').then(
        (m): Route[] => m.CUENTOS_ROUTES
      ),
  },
  {
    path: 'juegos',
    loadChildren: () =>
      import('src/app/modules/juegos/juegos-routes').then(
        (m): Route[] => m.JUEGOS_ROUTES
      ),
  },
  {
    path: 'familia',
    loadComponent: () => import('@modules/familia/familia.component'),
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
