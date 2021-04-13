import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header.component';


@NgModule({
  declarations: [ LogoComponent, MenuComponent, UsuarioComponent, HeaderComponent ],
  imports: [
    CommonModule
  ],
  exports: [
    LogoComponent, MenuComponent, UsuarioComponent, HeaderComponent
  ]
})
export class HeaderModule { }
