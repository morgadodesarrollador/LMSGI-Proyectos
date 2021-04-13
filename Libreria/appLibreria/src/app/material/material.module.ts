import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule, MatSliderModule, MatIconModule, MatMenuModule, MatSidenavModule, MatListModule
  ],
  exports: [
    MatToolbarModule, MatSliderModule, MatIconModule, MatMenuModule, MatSidenavModule, MatListModule
  ]
})
export class MaterialModule { }
