import { Component, OnInit } from '@angular/core';
import { Evento } from './evento.model';
import { EventoService } from './eventos.service';
import { ToastController } from '@ionic/angular';

@Component({
	selector: 'eventos',
	templateUrl: './eventos.component.html',
	styleUrls: ['./eventos.component.scss'],
})
export class EventosComponent implements OnInit {

	public eventos: Evento[];

	constructor(
		private eventoService: EventoService,
		public toastController: ToastController,
	) { }

	ngOnInit() {
		this.eventoService.listarEventos().subscribe(
			(res)=> {
				if(res){
					this.eventos = res;
					this.presentToast("Lista de eventos");
				}
			},
			(erro)=> {
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