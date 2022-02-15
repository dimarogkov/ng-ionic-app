import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pickcup-call-card',
  templateUrl: './pickcup-call-card.component.html',
  styleUrls: ['./pickcup-call-card.component.scss'],
})
export class PickcupCallCardComponent implements OnInit {

  @Input() hasHeader: boolean;
  @Input() hasFooter: boolean;
  @Input() status: string;
  @Input() date: string;
  @Input() time: string;
  @Input() createdAt: string;
  @Input() notes: string;
  @Input() cost: string;

  constructor() { }

  ngOnInit() {}

}
