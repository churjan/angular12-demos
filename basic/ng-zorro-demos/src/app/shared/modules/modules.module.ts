import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from './ng-zorro-antd/ng-zorro-antd.module';
import { Ng2PdfViewerModule } from './ng2-pdf-viewer/ng2-pdf-viewer.module';
import { Ng2PdfjsViewerModule } from './ng2-pdfjs-viewer/ng2-pdfjs-viewer.module';

@NgModule({
  exports:[
    NgZorroAntdModule,
    Ng2PdfViewerModule,
    Ng2PdfjsViewerModule
  ]
})
export class ModulesModule { }
