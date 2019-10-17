import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { EventoComponent } from './evento.component';
import { EventoService } from '../eventos/eventos.service';

@NgModule({
	imports: [
		HttpClientModule,
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild([
			{
				path: '',
				component: EventoComponent
			},
			{
				path: ':idEvento',
				component: EventoComponent
			}
		])
	],
	providers: [EventoService],
	declarations: [EventoComponent]
})
export class EventoModule { }