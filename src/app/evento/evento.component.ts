import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Evento } from '../eventos/evento.model';
import { EventoService } from '../eventos/eventos.service';
import { MercadoPagoService } from './mercado-pago.service';

@Component({
	selector: 'evento',
	templateUrl: './evento.component.html',
	styleUrls: ['./evento.component.scss'],
})
export class EventoComponent implements OnInit {

	public evento: Evento;
	public pagar: boolean = false;
	public mercadoPago: any;

	constructor(
		private mercadoPagoService: MercadoPagoService,
		private eventoService: EventoService,
		private route: ActivatedRoute,
		public toastController: ToastController,
	) { }

	ngOnInit() {
		this.route.params.subscribe(params => {
			if (params['idEvento']) {
				this.eventoService.buscarEventoPorId(parseInt(params['idEvento'])).subscribe(
					(res) => {
						this.evento = res;
						this.presentToast(res.titulo);
					},
					(erro) => {
						this.presentToast("Não foi possivel visualizar este evento. Tente novamente.");
						console.error(erro.message)
					}
				);
			}
		});
	}

	checkout(): void {
		this.mercadoPagoService.checkout({
			"items": [
				{
					"title": "evento",
					"quantity": 1,
					"unit_price": 10.00
				}
			]
		}).subscribe(
			(next: any) => {
				this.mercadoPago = next;
				this.pagar = true;
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