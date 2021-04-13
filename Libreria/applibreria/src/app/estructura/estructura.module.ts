import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderModule } from './header/header.module';
import { MainModule } from './main/main.module';
import { FooterModule } from './footer/footer.module';



@NgModule({
  declarations: [  ],
  imports: [
    CommonModule, HeaderModule, MainModule, FooterModule
  ],
  exports: [
    CommonModule, HeaderModule, MainModule, FooterModule
  ]
})
export class EstructuraModule { }
