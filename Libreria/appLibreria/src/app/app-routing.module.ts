import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./secciones/secciones.module').then( m => m.SeccionesModule) },
  { path: '', loadChildren: () => import('./estructura/estructura.module').then( m => m.EstructuraModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
