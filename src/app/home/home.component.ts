import { Component, OnInit } from '@angular/core';
import { Evento } from './evento.model';
import { EventoService } from './evento.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

	public eventos: Evento[];

	constructor(private eventoService: EventoService) { }

	ngOnInit() {
		this.eventoService.listarEventos().subscribe(res => {
			this.eventos = res;
		});
	}

}