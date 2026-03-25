import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../modelos/usuario.model';
import { SeguridadService } from './seguridad.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = ''

  constructor(private http: HttpClient,
    private seguridadService: SeguridadService) { 
      this.token = this.seguridadService.getToken();
    }

  //Crear un usuario
  store(usuario: UsuarioModel): Observable<UsuarioModel> {
    return this.http.post<UsuarioModel>(`${environment.urlBackend}/usuarios`, {
      nombre: usuario.nombre,
      apellidos: usuario.apellidos,
      telefono: usuario.telefono,
      correo: usuario.correo,
      //password: ''
    });
  }

  //Obtiene todos los usuarios
  getAll(): Observable<UsuarioModel[]>{
    return this.http.get<UsuarioModel[]>(`${environment.urlBackend}/usuarios`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }

  //Actualiza un usuario
  update(usuario: UsuarioModel): Observable<UsuarioModel> {
    return this.http.patch<UsuarioModel>(`${environment.urlBackend}/usuarios/${usuario.id}`, {
      nombre: usuario.nombre,
      apellidos: usuario.apellidos,
      telefono: usuario.telefono,
      correo: usuario.correo
    }, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }

  //Elimina un usuario
  delete(id: string): Observable<UsuarioModel[]>{
    return this.http.delete<UsuarioModel[]>(`${environment.urlBackend}/usuarios/${id}`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }

  //Obtiene la informacion de un usuario
  getWithId(id: string): Observable<UsuarioModel>{
    return this.http.get<UsuarioModel>(`${environment.urlBackend}/usuarios/${id}`,{
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }

  //Obtiene la cantidad de usuarios
  getCount(): Observable<UsuarioModel[]>{
    return this.http.get<UsuarioModel[]>(`${environment.urlBackend}/usuarios/count`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }
}