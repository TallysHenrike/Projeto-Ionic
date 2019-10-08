import { Component } from '@angular/core';
import { CategoriasService } from './categorias.service';
import { Categoria } from './categorias.model';

@Component({
	selector: 'categorias',
	templateUrl: 'categorias.component.html',
	styleUrls: ['categorias.component.scss'],
})
export class CategoriasComponent {
	public categorias: Categoria[];

	constructor(private categoriasService: CategoriasService) { }

	ngOnInit() {
		this.categoriasService.listarCategorias().subscribe(res => {
			this.categorias = res;
		});
	}
}