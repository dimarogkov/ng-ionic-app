import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-ion-loading',
  templateUrl: './ion-loading.page.html',
  styleUrls: ['./ion-loading.page.scss'],
})
export class IonLoadingPage implements OnInit {

  constructor(private loadingController: LoadingController) {}

  ngOnInit() {}

  async openLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 1500
    });
    return await loading.present();
  }

  async openLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: 'crescent',
      duration: 2000,
      message: 'Click the backdrop to dismiss early...',
      translucent: true,
      backdropDismiss: true
    });
    return await loading.present();
  }

}
