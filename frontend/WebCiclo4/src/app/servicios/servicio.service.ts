
  import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import { ServicioModel } from '../modelos/servicio.model'; 
  import { SeguridadService } from './seguridad.service';
  import { environment } from 'src/environments/environment';
  
  @Injectable({
    providedIn: 'root'
  })
  export class ServicioService {

    token: string = ''
  
    constructor(private http: HttpClient,
      private seguridadService: SeguridadService) { 
        this.token = this.seguridadService.getToken();
      }

    //Crear un servicio
    store(servicio: ServicioModel): Observable<ServicioModel> {
      return this.http.post<ServicioModel>(`${environment.urlBackend}/servicios`, {
        origen: servicio.origen,
        destino: servicio.destino,
        fecha: servicio.fecha,
        hora: servicio.hora,
        encomienda: servicio.encomienda,
        valor: servicio.valor,
      });
    }

    //Obtiene todos los servicios
    getAll(): Observable<ServicioModel[]>{
      return this.http.get<ServicioModel[]>(`${environment.urlBackend}/servicios`, {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      });
    }

    //Actualiza un servicio
    update(servicio: ServicioModel): Observable<ServicioModel> {
      return this.http.patch<ServicioModel>(`${environment.urlBackend}/servicios/${servicio.id}`, {
        origen: servicio.origen,
        destino: servicio.destino,
        fecha: servicio.fecha,
        hora: servicio.hora,
        encomienda: servicio.encomienda,
        valor: servicio.valor
      }, {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      });
    }

    //Elimina un servicio
    delete(id: string): Observable<ServicioModel[]>{
      return this.http.delete<ServicioModel[]>(`${environment.urlBackend}/servicios/${id}`, {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }

    //Obtiene la informacion de un servicio
    getWithId(id: string): Observable<ServicioModel>{
      return this.http.get<ServicioModel>(`${environment.urlBackend}/servicios/${id}`,{
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }

    //Obtiene la cantidad de servicios
    getCount(): Observable<ServicioModel[]>{
      return this.http.get<ServicioModel[]>(`${environment.urlBackend}/servicios/count`, {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      });
    }
  }
