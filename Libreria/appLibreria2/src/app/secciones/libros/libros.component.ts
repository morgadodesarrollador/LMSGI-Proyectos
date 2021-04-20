import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../services/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss']
})
export class LibrosComponent implements OnInit {

  constructor(private librosService: LibrosService) {
    librosService.getLibros();
  }

  ngOnInit(): void {
  }

}
