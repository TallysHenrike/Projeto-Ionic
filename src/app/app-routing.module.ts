import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'eventos',
		pathMatch: 'full'
	},
	{
		path: 'categorias',
		loadChildren: () => import('./categorias/categorias.module').then(m => m.CategoriasModule)
	},
	{
		path: 'eventos',
		loadChildren: () => import('./eventos/eventos.module').then(m => m.EventoModule)
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }