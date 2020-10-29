import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc04',
  templateUrl: './myc04.component.html',
  styleUrls: ['./myc04.component.css'],
})
export class Myc04Component implements OnInit {
  // angular 大量采用面向对象
  // 使用 等号 做赋值符号
  name = '东东';

  age = 19;

  names = ['东东', '然然', '亮亮'];

  boss = {
    name: '文化',
    age: 32,
  };
  constructor() {}
  ngOnInit(): void {}
}
