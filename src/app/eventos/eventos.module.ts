import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { EventosComponent } from './eventos.component';
import { MercadoPagoService } from '../evento/mercado-pago.service';
import { EventoService } from '../evento/evento.service';

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
				path: ':codigo-do-evento',
				component: EventosComponent
			}
		])
	],
	providers: [EventoService, MercadoPagoService],
	declarations: [EventosComponent]
})
export class EventosModule { }