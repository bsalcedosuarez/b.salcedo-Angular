import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AplicacionComponent } from './aplicacion/aplicacion.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [AplicacionComponent],
  declarations: [AplicacionComponent]
})
export class SeriesModule { }
