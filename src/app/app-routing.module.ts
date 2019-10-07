import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'categorias',
		pathMatch: 'full'
	},
	{
		path: 'categorias',
		loadChildren: () => import('./navegacao/navegacao.module').then(m => m.NavegacaoModule)
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }