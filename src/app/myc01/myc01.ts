// ts文件负责引入 html 和 css
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc01',
  templateUrl: './myc01.html',
  styleUrls: ['./myc01.css']
})
export class Myc01 implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
