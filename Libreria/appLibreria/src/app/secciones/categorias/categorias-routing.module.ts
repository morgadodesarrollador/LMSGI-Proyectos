import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './categorias.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: 'home', component: CategoriasComponent, outlet: 'secondary' },
  { path: 'menu', component: MenuComponent,  outlet: 'primary' },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
