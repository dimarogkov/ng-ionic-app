import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickcupCallCardComponent } from 'src/app/components/pickcup-call-card/pickcup-call-card.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    PickcupCallCardComponent
  ],
  exports: [
    PickcupCallCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class SharedModule {}
