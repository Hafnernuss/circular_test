import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TriggerAComponent } from './trigger-a/trigger-a.component';



@NgModule({
  declarations: [
    TriggerAComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TriggerAComponent,
  ]
})
export class TriggerAModule { }
