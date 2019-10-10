import { Component } from '@angular/core';
import { CategoriasService } from './categorias.service';
import { Categoria } from './categorias.model';
import { ToastController } from '@ionic/angular';

@Component({
	selector: 'categorias',
	templateUrl: 'categorias.component.html',
	styleUrls: ['categorias.component.scss'],
})
export class CategoriasComponent {
	public categorias: Categoria[];

	constructor(
		private categoriasService: CategoriasService,
		public toastController: ToastController
	) { }

	ngOnInit() {
		this.categoriasService.listarCategorias().subscribe(
			(res)=> {
				if(res){
					this.categorias = res;
					this.presentToast("Lista de categorías");
				}
			},
			(erro)=> {
				this.presentToast("Não foi possivel listar as categorías");
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