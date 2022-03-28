import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxQuillEditorComponent } from './ngx-quill-editor.component';
import { QuillModule } from 'ngx-quill'


@NgModule({
  declarations: [
    NgxQuillEditorComponent
  ],
  imports: [
    CommonModule,
    QuillModule.forRoot()
  ],
  exports:[
    NgxQuillEditorComponent
  ]
})
export class NgxQuillEditorModule { }
