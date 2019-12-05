import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { MercadoPagoService } from '../evento/mercado-pago.service';
import { Router } from '@angular/router';
import { EventoModel } from '../evento/evento.model';
import { EventoService } from '../evento/evento.service';

@Component({
	selector: 'eventos',
	templateUrl: './eventos.component.html',
	styleUrls: ['./eventos.component.scss'],
})
export class EventosComponent implements OnInit {

	public eventos: EventoModel[];

	constructor(
		private mercadoPagoService: MercadoPagoService,
		private eventoService: EventoService,
		public toastController: ToastController,
		private router: Router
	) { }

	ngOnInit() {
		this.eventoService.listarEventos().subscribe(
			(res) => {
				if (res) {
					this.eventos = res;
					this.presentToast("Lista de eventos");
				}
			},
			(erro) => {
				this.presentToast("Não foi possivel listar os eventos");
				console.error(erro.message)
			}
		);
	}

	async presentToast(mensagem: string) {
		const toast = await this.toastController.create({
			message: mensagem,
			duration: 2000
		});
		toast.present();
	}
}