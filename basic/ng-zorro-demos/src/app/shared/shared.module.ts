import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesModule } from './modules/modules.module';
import { WangEditorModule } from './wang-editor/wang-editor.module';
@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    ModulesModule,
    WangEditorModule
  ]
})
export class SharedModule { }
