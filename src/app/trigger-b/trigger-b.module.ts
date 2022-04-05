import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TriggerBComponent } from './trigger-b/trigger-b.component';



@NgModule({
  declarations: [
    TriggerBComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TriggerBComponent,
  ]
})
export class TriggerBModule { }
