import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaginsPageRoutingModule } from './plagins-routing.module';

import { PlaginsPage } from './plagins.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaginsPageRoutingModule
  ],
  declarations: [PlaginsPage]
})
export class PlaginsPageModule {}
