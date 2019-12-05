import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { CategoriasComponent } from './categoria.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriaService } from './categoria.service';

@NgModule({
	imports: [
		HttpClientModule,
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild([
			{
				path: '',
				component: CategoriasComponent
			}
		])
	],
	providers: [CategoriaService],
	declarations: [CategoriasComponent]
})
export class CategoriasModule { }