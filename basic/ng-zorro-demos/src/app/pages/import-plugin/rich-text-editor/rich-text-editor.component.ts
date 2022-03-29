import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.scss']
})
export class RichTextEditorComponent implements OnInit {
  contentVal='<h1>Hello World</h1>'

  constructor() { }

  ngOnInit(): void {
  }

}
