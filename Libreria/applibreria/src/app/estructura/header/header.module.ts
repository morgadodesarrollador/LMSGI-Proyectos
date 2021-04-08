import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [ LogoComponent, MenuComponent, UsuarioComponent ],
  imports: [
    CommonModule
  ],
  exports: [
    LogoComponent, MenuComponent, UsuarioComponent
  ]
})
export class HeaderModule { }
