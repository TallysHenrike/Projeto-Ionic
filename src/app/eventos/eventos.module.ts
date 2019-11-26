import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { EventosComponent } from './eventos.component';
import { EventoService } from './eventos.service';
import { MercadoPagoService } from '../evento/mercado-pago.service';

@NgModule({
	imports: [
		HttpClientModule,
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild([
			{
				path: '',
				component: EventosComponent
			},
			{
				path: ':idCategoria',
				component: EventosComponent
			}
		])
	],
	providers: [EventoService, MercadoPagoService],
	declarations: [EventosComponent]
})
export class EventosModule { }