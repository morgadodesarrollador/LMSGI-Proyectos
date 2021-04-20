import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { MenuComponent } from './menu/menu.component';
import { LibrosComponent } from './libros.component';


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    LibrosRoutingModule
  ]
})
export class LibrosModule { }
