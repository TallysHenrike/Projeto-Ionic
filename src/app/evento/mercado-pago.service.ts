import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MercadoPagoService {

	constructor(private http: HttpClient) { }

	checkout(bodyParams: any): Observable<any> {
		const headers: HttpHeaders = new HttpHeaders({
			'Content-Type': 'application/json',
			'Cache-Control': 'no-cache'
		});
		let params: HttpParams = new HttpParams();
		params = params.append('access_token', 'TEST-7648348735216014-112617-151c154a73939628445de3a4855cc231-262259671');
		return this.http.post(`https://api.mercadolibre.com/checkout/preferences`, bodyParams, { headers: headers, params: params });
	}

}