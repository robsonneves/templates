import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopoComponent } from './topo.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    TopoComponent,
    MenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TopoComponent
  ]
})
export class TopoModule { }
