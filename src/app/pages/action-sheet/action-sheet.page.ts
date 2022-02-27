import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(private actionSheetController: ActionSheetController) {}

  ngOnInit() {}

  async openActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: "Action Sheet Title",
      cssClass: 'action-sheet-custom',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          id: 'delete-button',
          data: {
            type: 'delete'
          },
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Play',
          icon: 'caret-forward-circle',
          data: {
            type: 'play'
          },
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    })
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log(role, data);
  }

}
