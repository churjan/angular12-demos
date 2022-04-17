import { Component, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-preview-file',
  templateUrl: './preview-file.component.html',
  styleUrls: ['./preview-file.component.scss'],
})
export class PreviewFileComponent implements OnInit {
  @ViewChild('pdfViewerOnDemand') pdfViewerOnDemand;

  constructor() {}

  ngOnInit(): void {}

  onPreviewPDF() {
    // const url='https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf'
    const url =
      'http://192.168.100.44:10081/upload/20220324/202203241313371547.pdf';
    this.pdfViewerOnDemand.pdfSrc = url;
    this.pdfViewerOnDemand.refresh();
  }
}
