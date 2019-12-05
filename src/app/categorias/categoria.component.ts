import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CategoriaModel } from './categoria.model';
import { CategoriaService } from './categoria.service';

@Component({
	selector: 'categorias',
	templateUrl: 'categoria.component.html',
	styleUrls: ['categoria.component.scss'],
})
export class CategoriasComponent {
	public categorias: CategoriaModel[];

	constructor(
		private categoriaService: CategoriaService,
		public toastController: ToastController
	) { }

	ngOnInit() {
		this.categoriaService.listarCategorias().subscribe(
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