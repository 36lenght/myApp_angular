import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc09',
  templateUrl: './myc09.component.html',
  styleUrls: ['./myc09.component.css'],
})
export class Myc09Component implements OnInit {
  name = 'iphone12';
  price = 8999;
  count = 5;
  constructor() {}

  ngOnInit(): void {}
}
