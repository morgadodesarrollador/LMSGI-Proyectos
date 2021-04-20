import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { MsnApiLibros } from '../interfaces/LibrosInterface';
import { Subject } from 'rxjs';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor(private http: HttpClient) { }

 async getLibros(): Promise<MsnApiLibros[]> {
    let ruta = URL + 'libros';
    console.log(ruta);
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept' : 'application/json',
        'Access-Control-Allow-Origin': '*',
      })
    };
    return new Promise ( resolve => {
      this.http.get<MsnApiLibros[]>(ruta)
      .subscribe (data => {
          console.log(data);
          resolve(data);
      })
    })

  }
}
