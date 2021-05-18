import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './acciones/listar/listar.component';
import { NewComponent } from './acciones/new/new.component';
import { CategoriasComponent } from './categorias.component';
import { MenuComponent } from './estructura/menu/menu.component';

const routes: Routes = [
  { path: '', component: CategoriasComponent,
    children: [
      { path: 'new', component: NewComponent },
      { path: ':CatId/libros', component: ListarComponent }
    ]
  },


];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
