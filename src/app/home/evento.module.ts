import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home.component';
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
				component: HomeComponent
			}
		])
	],
	providers: [EventoService],
	declarations: [HomeComponent]
})
export class EventoModule { }