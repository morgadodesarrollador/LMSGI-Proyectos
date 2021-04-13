import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactosComponent } from './contactos/contactos.component';
import { SocialesComponent } from './sociales/sociales.component';
import { FooterComponent } from './footer.component';



@NgModule({
  declarations: [
    ContactosComponent, SocialesComponent, FooterComponent
  ],
  imports: [
    CommonModule
  ], exports: [ FooterComponent, ContactosComponent, SocialesComponent

  ]
})
export class FooterModule { }
