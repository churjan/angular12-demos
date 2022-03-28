import { NgModule } from '@angular/core';
import { WangEditorModule } from './wang-editor/wang-editor.module';
import { NgxQuillEditorModule } from './ngx-quill-editor/ngx-quill-editor.module';
@NgModule({
  exports: [WangEditorModule,NgxQuillEditorModule],
})
export class ComponentsModule {}
