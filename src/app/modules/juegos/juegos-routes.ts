import { Route } from '@angular/router';

export const JUEGOS_ROUTES: Route[] = [
  {
    path: 'listado',
    loadComponent: () =>
      import('src/app/modules/juegos/listado-juegos/listado-juegos.component'),
  },
  {
    path: 'memory',
    loadComponent: () =>
      import('src/app/modules/juegos/memory/memory.component'),
  },
  {
    path: 'simon',
    loadComponent: () => import('src/app/modules/juegos/simon/simon.component'),
  },
  {
    path: 'koloreak',
    loadComponent: () =>
      import('src/app/modules/juegos/koloreak/koloreak.component'),
  },
  {
    path: 'metro',
    loadComponent: () =>
      import(
        'src/app/modules/juegos/metro/metro-inicio/metro-inicio.component'
      ),
  },
  {
    path: 'metro/:ciudad',
    loadComponent: () =>
      import(
        'src/app/modules/juegos/metro/metro-lineas/metro-lineas.component'
      ),
  },
];
