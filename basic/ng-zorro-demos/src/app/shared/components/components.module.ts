import { NgModule } from '@angular/core';
import { WangEditorModule } from './wang-editor/wang-editor.module';
import { WangEditor5Module } from './wang-editor5/wang-editor5.module';
import { NgxQuillEditorModule } from './ngx-quill-editor/ngx-quill-editor.module';
@NgModule({
  exports: [WangEditorModule, WangEditor5Module, NgxQuillEditorModule],
})
export class ComponentsModule {}
