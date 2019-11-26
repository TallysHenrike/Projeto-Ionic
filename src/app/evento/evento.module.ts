import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { EventoComponent } from './evento.component';
import { EventoService } from '../eventos/eventos.service';
import { LightBoxComponent } from './light-box/light-box.component';
import { MercadoPagoService } from './mercado-pago.service';
import { Sanitizer } from '../pipe/sanitizer.pipe';

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
	providers: [EventoService, MercadoPagoService],
	declarations: [EventoComponent, Sanitizer]
})
export class EventoModule { }