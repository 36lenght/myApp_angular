import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc07',
  templateUrl: './myc07.component.html',
  styleUrls: ['./myc07.component.css'],
})
export class Myc07Component implements OnInit {
  num = 1;
  add() {
    this.num++;
  }
  constructor() {}

  ngOnInit(): void {}
}
