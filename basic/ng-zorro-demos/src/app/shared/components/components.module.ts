import { NgModule } from '@angular/core';
import { WangEditorModule } from './wang-editor/wang-editor.module';
import { QuillEditorModule } from './quill-editor/quill-editor.module';
@NgModule({
  exports: [WangEditorModule,QuillEditorModule],
})
export class ComponentsModule {}
