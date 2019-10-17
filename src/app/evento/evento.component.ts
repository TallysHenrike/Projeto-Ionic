import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Evento } from '../eventos/evento.model';
import { EventoService } from '../eventos/eventos.service';

@Component({
	selector: 'app-evento',
	templateUrl: './evento.component.html',
	styleUrls: ['./evento.component.scss'],
})
export class EventoComponent implements OnInit {

	public evento: Evento;

	constructor(
		private eventoService: EventoService,
		private route: ActivatedRoute,
		public toastController: ToastController,
	) { }

	ngOnInit() {
		this.route.params.subscribe(params => {
			if (params['idEvento']) {
				this.eventoService.buscarEventoPorId(parseInt(params['idEvento'])).subscribe(
					(res) => {
						if (res) {
							this.evento = res;
							this.presentToast(res.titulo);
						}
					},
					(erro) => {
						this.presentToast("Não foi possivel visualizar este evento. Tente novamente.");
						console.error(erro.message)
					}
				);
			}
		});
	}

	async presentToast(mensagem: string) {
		const toast = await this.toastController.create({
			message: mensagem,
			duration: 2000
		});
		toast.present();
	}
}