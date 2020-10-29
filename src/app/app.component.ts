import { Component } from '@angular/core';

@Component({
  // 规定当前组件名：使用时<app-root></app-root>
  selector: 'app-root',
  // 原生 web中 ：主文件是html，把 js 和 css 引入HTML中
  // angular 中：主文件是 .ts,把 html 和 css 引入到 ts 中
  templateUrl: './app.component.html',
  // css 是数组方式
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
}
