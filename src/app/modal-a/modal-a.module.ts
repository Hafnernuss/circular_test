import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TriggerBModule } from '../trigger-b/trigger-b.module';
import { ModalAComponent } from './modal-a/modal-a.component';



@NgModule({
  declarations: [
    ModalAComponent,
  ],
  imports: [
    CommonModule,
    TriggerBModule
  
  ]
})
export class ModalAModule { }
