import { Route, Routes } from '@angular/router';
import InicioComponent from '@modules/inicio/inicio.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
  },
  {
    path: 'cuentos',
    loadChildren: () =>
      import('@modules/cuentos/cuentos-routes').then(
        (m): Route[] => m.CUENTOS_ROUTES
      ),
  },
  {
    path: 'juegos',
    loadChildren: () =>
      import('@modules/juegos/juegos-routes').then(
        (m): Route[] => m.JUEGOS_ROUTES
      ),
  },
  {
    path: 'familia',
    loadComponent: () => import('@modules/familia/familia.component'),
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

export default routes;
