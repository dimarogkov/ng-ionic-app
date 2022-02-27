import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertController: AlertController) {}

  ngOnInit() {}

  async openSimpleAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async openAlertWithBtn() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          id: 'cancel-btn',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },{
          text: 'OK',
          id: 'confirm-btn',
          handler: () => {
            console.log('Confirm OK');
          }
        }
      ]
    });
    await alert.present();
  }

  async openAlertWithInputs() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Radio 1',
          value: 'Value One',
          handler: () => {
            console.log('Radio 1 selected');
          },
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Radio 2',
          value: 'Value Two',
          handler: () => {
            console.log('Radio 2 selected');
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          id: 'cancel-btn',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },{
          text: 'OK',
          id: 'confirm-btn',
          handler: () => {
            console.log('Confirm OK');
          }
        }
      ]
    });
    await alert.present();
  }

}
