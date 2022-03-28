import { Component, OnInit,ViewEncapsulation  } from '@angular/core';
import { QuillConfiguration } from "./quill-configuration";
@Component({
  selector: 'app-ngx-quill-editor',
  templateUrl: './ngx-quill-editor.component.html',
  styleUrls: ['./ngx-quill-editor.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NgxQuillEditorComponent implements OnInit {
  quillConfiguration = QuillConfiguration;
  
  constructor() { }

  ngOnInit(): void {
  }

}
