import { Route } from '@angular/router';

export const CUENTOS_ROUTES: Route[] = [
  {
    path: 'listado',
    loadComponent: () =>
      import('@modules/cuentos/listado-cuentos/listado-cuentos.component'),
  },
  {
    path: 'zena',
    loadComponent: () => import('@modules/cuentos/zena/zena.component'),
  },
  {
    path: 'tomasa',
    loadComponent: () => import('@modules/cuentos/tomasa/tomasa.component'),
  },
];
