import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickcupCallCardComponent } from 'src/app/components/pickcup-call-card/pickcup-call-card.component';
import { IonicModule } from '@ionic/angular';
import { ModalComponent } from 'src/app/modals/modal/modal.component';
import { PopoverComponent } from 'src/app/components/popover/popover.component';

@NgModule({
  declarations: [
    PickcupCallCardComponent,
    PopoverComponent,
    ModalComponent
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
