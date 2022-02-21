import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { Network } from '@awesome-cordova-plugins/network/ngx';

@Component({
  selector: 'app-plagins',
  templateUrl: './plagins.page.html',
  styleUrls: ['./plagins.page.scss'],
  providers: [Geolocation, Camera, Network]
})
export class PlaginsPage implements OnInit {

  clickedImage: string;

  options: CameraOptions = {
    quality: 30,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(private geolocation: Geolocation, private camera: Camera, private network: Network) {}

  ngOnInit() {}

  getGeolocation() {
    this.geolocation.getCurrentPosition().then(data => {
      console.log(data.coords.latitude);
      console.log(data.coords.longitude);
    });
    this.geolocation.watchPosition().subscribe(data => console.log(data));
  }

  getCamera() {
    this.camera.getPicture(this.options).then(imageData => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.clickedImage = base64Image;
    });
  }

  getNetwork() {
    this.network.onDisconnect().subscribe(() => {
      console.log('network was disconnected');
    });

    this.network.onConnect().subscribe(() => {
      console.log('network connected!');

      setTimeout(() => {
        if (this.network.type === 'wifi') {
          console.log('we got a wifi connection, woohoo!');
        }
      }, 3000);
    })
  }

}
