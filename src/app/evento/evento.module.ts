import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { EventoComponent } from './evento.component';
import { MercadoPagoService } from './mercado-pago.service';
import { Sanitizer } from '../pipe/sanitizer.pipe';
import { EventoService } from './evento.service';

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
				path: ':codigo-do-evento',
				component: EventoComponent
			}
		])
	],
	providers: [EventoService, MercadoPagoService],
	declarations: [EventoComponent, Sanitizer]
})
export class EventoModule { }