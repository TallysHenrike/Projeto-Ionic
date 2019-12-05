import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { MercadoPagoService } from './mercado-pago.service';
import { EventosModule } from '../eventos/eventos.module';
import { EventoService } from './evento.service';

@Component({
	selector: 'evento',
	templateUrl: './evento.component.html',
	styleUrls: ['./evento.component.scss'],
})
export class EventoComponent implements OnInit {

	public evento: EventosModule;
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
			if (params['codigo-do-evento']) {
				this.eventoService.buscarEvento(parseInt(params['codigo-do-evento'])).subscribe(
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