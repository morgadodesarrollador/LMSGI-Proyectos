import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { AsideComponent } from './aside/aside.component';
import { MainComponent } from './main.component';



@NgModule({
  declarations: [
    MenuComponent,
    CuerpoComponent,
    AsideComponent,
    MainComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainComponent, MenuComponent, CuerpoComponent, AsideComponent
  ]
})
export class MainModule { }
