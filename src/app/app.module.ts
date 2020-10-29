import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { Myc01 } from './myc01/myc01';
import { Myc02 } from './myc02/myc02';
import { Myc03 } from './myc03/myc03';

import { Myc04Component } from './myc04/myc04.component';
import { Myc05Component } from './myc05/myc05.component';
import { Myc06Component } from './myc06/myc06.component';
import { Myc07Component } from './myc07/myc07.component';
import { Myc08Component } from './myc08/myc08.component';
import { FormsModule } from '@angular/forms';
import { Myc09Component } from './myc09/myc09.component';
import { Myc10Component } from './myc10/myc10.component';

// 引入Form模块

@NgModule({
  declarations: [
    AppComponent,
    Myc01,
    Myc02,
    Myc03,
    Myc04Component,
    Myc05Component,
    Myc06Component,
    Myc07Component,
    Myc08Component,
    Myc09Component,
    Myc10Component,
  ],
  // imports 负责引入模块
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
