import { Route } from '@angular/router';

export const JUEGOS_ROUTES: Route[] = [
  {
    path: 'listado',
    loadComponent: () =>
      import('@modules/juegos/listado-juegos/listado-juegos.component'),
  },
  {
    path: 'memory',
    loadComponent: () => import('@modules/juegos/memory/memory.component'),
  },
  {
    path: 'simon',
    loadComponent: () => import('@modules/juegos/simon/simon.component'),
  },
  {
    path: 'koloreak',
    loadComponent: () => import('@modules/juegos/koloreak/koloreak.component'),
  },
  {
    path: 'metro',
    loadComponent: () =>
      import('@modules/juegos/metro/metro-inicio/metro-inicio.component'),
  },
  {
    path: 'metro/:ciudad',
    loadComponent: () =>
      import('@modules/juegos/metro/metro-lineas/metro-lineas.component'),
  },
  {
    path: 'metro/:ciudad/linea/:num',
    loadComponent: () =>
      import('@modules/juegos/metro/metro-paradas/metro-paradas.component'),
  },
  {
    path: 'metro/:ciudad/linea/:linea/parada/:parada',
    loadComponent: () =>
      import('@modules/juegos/metro/metro-parada/metro-parada.component'),
  },
];
