import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { NavegacaoComponent } from './navegacao.component';
import { HttpClientModule } from '@angular/common/http';
import { NavegacaoService } from './navegacao.service';

@NgModule({
	imports: [
		HttpClientModule,
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild([
			{
				path: '',
				component: NavegacaoComponent
			}
		])
	],
	providers: [NavegacaoService],
	declarations: [NavegacaoComponent]
})
export class NavegacaoModule { }