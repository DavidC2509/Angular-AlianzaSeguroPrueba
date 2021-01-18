import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { APITemperaturaByCity } from '../models/ApiTemperaturaByCity';

@Injectable({
  providedIn: 'root'
})
export class ServicioMapaService {

  constructor(private http: HttpClient) { }

  getTemperaturaMarcador(ciudad){
    const url = `${environment.baseUrl}${ciudad}${environment.apiKey}`;
    return this.http.get<APITemperaturaByCity>(url);
  }
}
