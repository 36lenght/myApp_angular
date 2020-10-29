import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc06',
  templateUrl: './myc06.component.html',
  styleUrls: ['./myc06.component.css'],
})
export class Myc06Component implements OnInit {
  show() {
    alert('我是show方法');
  }
  constructor() {}

  ngOnInit(): void {}
}
