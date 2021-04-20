import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor(private http: HttpClient) { }

  getLibros() {
    let ruta = URL + 'libros';
    console.log(ruta);
    this.http.get(ruta)
      .subscribe (data => {
          console.log(data);
      });
  }
}
