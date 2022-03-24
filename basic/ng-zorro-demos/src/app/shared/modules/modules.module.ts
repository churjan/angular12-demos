import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from './ng-zorro-antd/ng-zorro-antd.module';
import { Ng2PdfjsViewerModule } from './ng2-pdfjs-viewer/ng2-pdfjs-viewer.module';

@NgModule({
  exports:[
    NgZorroAntdModule,
    Ng2PdfjsViewerModule
  ]
})
export class ModulesModule { }
