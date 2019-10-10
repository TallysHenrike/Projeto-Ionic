import { Component, OnInit } from '@angular/core';
import { Evento } from './eventos.model';
import { EventoService } from './eventos.service';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

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
		private route: ActivatedRoute
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
		
		this.route.params.subscribe(params => {
			if(params['id']){
				this.eventoService.listarEventosPorCategoria(parseInt(params['id'])).subscribe(
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