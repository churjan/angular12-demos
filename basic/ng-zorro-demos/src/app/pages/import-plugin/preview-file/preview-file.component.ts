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
    const url='https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf'
    this.pdfViewerOnDemand.pdfSrc = url;
    this.pdfViewerOnDemand.refresh();
  }
}
