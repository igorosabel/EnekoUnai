/**
 * Páginas
 */
import { InicioComponent }         from './pages/inicio/inicio.component';
import { ListadoCuentosComponent } from './pages/cuentos/listado-cuentos/listado-cuentos.component';
import { ZenaComponent }           from './pages/cuentos/zena/zena.component';

export const PAGES: any[] = [
	InicioComponent,
	ListadoCuentosComponent,
	ZenaComponent
];

/**
 * Componentes
 */
import { HeaderComponent } from './components/header/header.component';

export const COMPONENTS: any[] = [
	HeaderComponent
];

/**
 * Pipes
 */

export const PIPES: any[] = [];

/**
 * Servicios
 */

export const SERVICES: any[] = [];

/*
 * Componentes Angular Material
 */
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule }    from '@angular/material/card';
import { MatButtonModule }  from '@angular/material/button';
import { MatIconModule }    from '@angular/material/icon';

export const MATERIAL: any[] = [
	MatToolbarModule,
	MatCardModule,
	MatButtonModule,
	MatIconModule
];
