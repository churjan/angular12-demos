import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WangEditorComponent } from './wang-editor.component';


@NgModule({
  declarations:[WangEditorComponent],
  imports: [
    CommonModule
  ],
  exports:[
    WangEditorComponent
  ]
})
export class WangEditorModule { }
