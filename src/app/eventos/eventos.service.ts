import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evento } from './evento.model';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json'
	})
};

@Injectable()
export class EventoService {
	
	constructor(private httpClient: HttpClient){}

    listarEventos():  Observable<Evento[]>{
		return this.httpClient.get<Evento[]>(`http://localhost/restrito/evento/listar`);
	}
	
	listarEventosPorCategoria(categoria: number): Observable<Evento[]>{
		return this.httpClient.get<Evento[]>(`http://localhost/restrito/evento/listarEventosPorCategoria/${categoria}`);
	}

	buscarEventoPorId(evento: number): Observable<Evento> {
		return this.httpClient.get<Evento>(`http://localhost/restrito/evento/buscar/${evento}`);
	}
}