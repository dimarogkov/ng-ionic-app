import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pickcup-call',
  templateUrl: './pickcup-call.page.html',
  styleUrls: ['./pickcup-call.page.scss'],
})
export class PickcupCallPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {}

  addPickcupCall() {
    this.router.navigate(['home']);
  }

}
