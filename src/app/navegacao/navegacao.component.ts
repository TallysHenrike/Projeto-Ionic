import { Component } from '@angular/core';
import { NavegacaoService } from './navegacao.service';
import { Categoria } from './navegacao.model';

@Component({
	selector: 'navegacao',
	templateUrl: 'navegacao.component.html',
	styleUrls: ['navegacao.component.scss'],
})
export class NavegacaoComponent {
	public categorias: Categoria[];

	constructor(private navegacaoService: NavegacaoService) { }

	ngOnInit() {
		this.navegacaoService.listarCategorias().subscribe(res => {
			this.categorias = res;
		});
	}
}