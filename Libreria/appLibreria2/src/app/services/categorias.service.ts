import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { Subject } from 'rxjs';
import { ICategoria, MsnApiCategorias } from '../interfaces/CategoriasInterface';
import { MsnApiLibros } from '../interfaces/LibrosInterface';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  respuesta: MsnApiLibros[];

  constructor(private http: HttpClient) { }

  new(data: ICategoria){
    const ruta = `${ URL }categorias/new`;
    console.log(ruta, data);
    this.http.post
  }

  new1(categoria: ICategoria) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Accept' : 'application/json',
     //   'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

   // const data = JSON.stringify(categoria);
    const data = categoria;
    const ruta = `${ URL }categorias/new`;
    console.log(data, ruta);
    this.http.post<any>(ruta, data, httpOptions)
      .subscribe(respuesta => {
        console.log(respuesta);
      });
  }
  async getLibros(idCat): Promise<MsnApiLibros[]> {
    let ruta = URL + 'libros/filter?idCat='+idCat;
    return new Promise (resolve => {
      this.http.get<MsnApiLibros[]>(ruta)
        .subscribe (data => {
          this.respuesta = data;
         // this.LibrosStorage.next(data);
          console.log(data);
          resolve(data);
        })
    })
  }

  async getCategorias(): Promise<MsnApiCategorias[]> {
    let ruta = URL + 'categorias';
    console.log(ruta);
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept' : 'application/json',
        'Access-Control-Allow-Origin': '*',
      })
    };
    return new Promise ( resolve => {
      this.http.get<MsnApiCategorias[]>(ruta)
      .subscribe (data => {
          resolve(data);
      });
    });

  }
}
