import { Component, OnInit } from '@angular/core';
import { Evento } from './evento.model';
import { EventoService } from './eventos.service';
import { ToastController } from '@ionic/angular';
import { MercadoPagoService } from '../evento/mercado-pago.service';
import { Router } from '@angular/router';

@Component({
	selector: 'eventos',
	templateUrl: './eventos.component.html',
	styleUrls: ['./eventos.component.scss'],
})
export class EventosComponent implements OnInit {

	public eventos: Evento[];

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

	checkout(): void {
		this.mercadoPagoService.checkout({
			"items": [
				{
					"title": "Meu produto",
					"quantity": 1,
					"unit_price": 10.00
				}
			]
		}).subscribe(
			(mercadoPago: any) => {
				debugger
				this.router.navigate(['/checkout'], { queryParams: mercadoPago });
			},
			(error) => {
				console.log(error);
			},
			() => { }
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