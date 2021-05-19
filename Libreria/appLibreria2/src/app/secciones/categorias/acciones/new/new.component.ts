import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias.service';
import { ICategoria } from '../../../../interfaces/CategoriasInterface';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  a: number = 3;
  categoria: ICategoria = {
    categoriaid: '10',
    nombre_categoria: 'Bases de Datos'
  }
  constructor( private catService: CategoriasService) { }
  guardar(){
    console.log('Guardando datos ...');
    this.catService.new(this.categoria);

  }
  ngOnInit(): void {
  }

}
