import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { MsnApiLibros } from '../../interfaces/LibrosInterface';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss']
})
export class LibrosComponent implements OnInit {
  respuesta: MsnApiLibros;

  constructor(private librosService: LibrosService) {

  }

   ngOnInit() {

  }

}
