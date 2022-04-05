import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { TriggerAModule } from '../trigger-a/trigger-a.module';
import { TriggerBModule } from '../trigger-b/trigger-b.module';
import { ModalBModule } from '../modal-b/modal-b.module';
import { ModalAModule } from '../modal-a/modal-a.module';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,

    TriggerAModule,
    TriggerBModule,

    ModalAModule,
    ModalBModule,

    
  ]
})
export class MainModule { }
