import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias.service';
import { ICategoria } from '../../../../interfaces/CategoriasInterface';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  categoria: ICategoria = {
    categoriaid: '30',
    nombre_categoria: 'Datos'
  }
  constructor( private catService: CategoriasService) {
    console.log(this.categoria);

  }
  guardar(){
    console.log('Guardando datos ...');
    console.log(this.categoria);
    this.catService.new(this.categoria);

  }
  ngOnInit(): void {
  }

}
