import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Reserva } from '../model/reserva';

@Injectable()
export class ReservaService {

  private BASE_URL = `${environment.endpoint}/reservas`;

  constructor(private http: HttpService) { }

  public consultar() {
    return this.http.doGet<Reserva[]>(this.BASE_URL);
  }

 public eliminar(id: number){
   return this.http.doDelete<Reserva>(`${this.BASE_URL}/${id}`);
 }

 public agregar(reserva: Reserva){
   return this.http.doPost(this.BASE_URL, reserva);
 }

 public obtener(id: number){
   return this.http.doGet<Reserva>(`${this.BASE_URL}/${id}`);
 }
 public actualizar(reserva: Reserva, id: number){
  return this.http.doPut<Reserva, number>(`${this.BASE_URL}/${id}`, reserva);
 }
}
