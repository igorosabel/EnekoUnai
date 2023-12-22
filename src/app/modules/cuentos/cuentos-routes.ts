import { Route } from '@angular/router';

export const CUENTOS_ROUTES: Route[] = [
  {
    path: 'listado',
    loadComponent: () =>
      import(
        'src/app/modules/cuentos/listado-cuentos/listado-cuentos.component'
      ),
  },
  {
    path: 'zena',
    loadComponent: () => import('src/app/modules/cuentos/zena/zena.component'),
  },
  {
    path: 'tomasa',
    loadComponent: () =>
      import('src/app/modules/cuentos/tomasa/tomasa.component'),
  },
];
