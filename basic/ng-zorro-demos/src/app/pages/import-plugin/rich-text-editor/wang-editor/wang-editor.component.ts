import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import E from 'wangeditor';

@Component({
  selector: 'app-wang-editor',
  templateUrl: './wang-editor.component.html',
  styleUrls: ['./wang-editor.component.scss'],
})
export class WangEditorComponent implements OnInit, OnDestroy {
  @ViewChild('editorRef') editorRef;
  editor = null;
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.editor = new E(this.editorRef.nativeElement);

      this.editor.config.height = 300;
      this.editor.config.excludeMenus = ['code', 'video'];
      // this.editor.config.customUploadImg = function (resultFiles, insertImgFn) {
      //   // resultFiles 是 input 中选中的文件列表
      //   // insertImgFn 是获取图片 url 后，插入到编辑器的方法

      //   // 上传图片，返回结果，将图片插入到编辑器中
      //   insertImgFn(resultFiles);
      // };
      this.editor.config.onchange = function (newHtml) {
        console.log('change 之后最新的 html', newHtml);
      };

      this.editor.create();
      this.editor.txt.html(
        '<h1 style="color:red;">用 JS 设置的内容</h1><h2>用 JS 设置的内容</h2>'
      );
      console.log(this.editor.txt.html());
      console.log(this.editor.txt.text());
    }, 100);
  }

  ngOnDestroy(): void {
    this.editor.destroy();
    this.editor = null;
  }
}
