import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstructuraModule } from './estructura/estructura.module';
import { SeccionesModule } from './secciones/secciones.module';
import { ComunesModule } from './comunes/comunes.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, EstructuraModule, SeccionesModule, ComunesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
