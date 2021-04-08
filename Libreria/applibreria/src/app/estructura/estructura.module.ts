import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderModule } from './header/header.module';



@NgModule({
  declarations: [ HeaderComponent, MainComponent, FooterComponent ],
  imports: [
    CommonModule, HeaderModule
  ],
  exports: [
    CommonModule, HeaderComponent, MainComponent, FooterComponent
  ]
})
export class EstructuraModule { }
