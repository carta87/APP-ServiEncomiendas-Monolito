import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesEmail {

  http = inject(HttpClient);
  headers = new HttpHeaders({
    'accept': 'application/json',
    'Content-Type': 'application/json'
  });

  getActiveNotification(): Observable<any> {
    return this.http.get(
      `${environment.apiUrlNotificacionEmail}`,
      { responseType: 'text' }
    );
  }
}
