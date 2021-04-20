import { Component, OnInit } from '@angular/core';
import { LibrosService } from 'src/app/services/libros.service';
import { MsnApiLibros } from '../../../../interfaces/LibrosInterface';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  respuesta: MsnApiLibros[];
  constructor(private librosService: LibrosService) { }

  async ngOnInit() {
    this.respuesta = await this.librosService.getLibros();
    console.log(this.respuesta);
  }

}
