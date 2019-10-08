import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { CategoriasComponent } from './categorias.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriasService } from './categorias.service';

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
	providers: [CategoriasService],
	declarations: [CategoriasComponent]
})
export class CategoriasModule { }