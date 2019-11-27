import { Categoria } from './categorias.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json'
	})
};

@Injectable()
export class CategoriasService {
	
	constructor(private httpClient: HttpClient){}

    listarCategorias():  Observable<Categoria[]>{
		return this.httpClient.get<Categoria[]>(`http://api.arscrift.digital/restrito/categoria/listar`);
    }
}