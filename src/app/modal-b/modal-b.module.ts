import { NgModule } from '@angular/core';
import { TriggerAModule } from '../trigger-a/trigger-a.module';
import { ModalBComponent } from './modal-b/modal-b.component';



@NgModule({
  declarations: [
    ModalBComponent
  ],
  imports: [
    TriggerAModule,
  ],
  exports: [
  ]
})
export class ModalBModule { }
