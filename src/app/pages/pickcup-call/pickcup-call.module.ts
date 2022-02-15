import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PickcupCallPageRoutingModule } from './pickcup-call-routing.module';

import { PickcupCallPage } from './pickcup-call.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickcupCallPageRoutingModule
  ],
  declarations: [PickcupCallPage]
})
export class PickcupCallPageModule {}
