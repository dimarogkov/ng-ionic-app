import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PickcupCallsPageRoutingModule } from './pickcup-calls-routing.module';

import { PickcupCallsPage } from './pickcup-calls.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickcupCallsPageRoutingModule,
    SharedModule
  ],
  declarations: [
    PickcupCallsPage
  ]
})
export class PickcupCallsPageModule {}
