import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.page.html',
  styleUrls: ['./refresh.page.scss'],
})
export class RefreshPage implements OnInit {

  constructor() {}

  ngOnInit() {}

  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
    },1000);
  }

}
