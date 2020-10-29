import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc10',
  templateUrl: './myc10.component.html',
  styleUrls: ['./myc10.component.css'],
})
export class Myc10Component implements OnInit {
  names = ['亮亮', '然然', '东东', '华哥', '小新'];
  emps = [
    { name: '东东', age: 33, phone: '111111' },
    { name: '亮亮', age: 13, phone: '222222' },
    { name: '然然', age: 53, phone: '333333' },
    { name: '华华', age: 43, phone: '444444' },
    { name: '新新', age: 23, phone: '555555' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
