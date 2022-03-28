import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WangEditor5Component } from './wang-editor5.component';



@NgModule({
  declarations: [
    WangEditor5Component
  ],
  imports: [
    CommonModule
  ],
  exports:[
    WangEditor5Component
  ]
})
export class WangEditor5Module { }
