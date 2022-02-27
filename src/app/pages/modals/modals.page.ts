import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { ModalComponent } from 'src/app/modals/modal/modal.component';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.page.html',
  styleUrls: ['./modals.page.scss'],
})
export class ModalsPage implements OnInit {

  constructor(private modalController: ModalController, private routerOutlet: IonRouterOutlet) {}

  ngOnInit() {}

  async openModalOne() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      cssClass: 'modal-one'
    });
    return await modal.present();
  };

  async openModalTwo() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      breakpoints: [0, 0.3, 0.5, 0.8],
      initialBreakpoint: 0.3,
      cssClass: 'modal-two'
    });
    return await modal.present();
  };

  async openModalTree() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      cssClass: 'modal-tree',
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });
    return await modal.present();
  };

}
