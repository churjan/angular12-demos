import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import E from 'wangeditor';

@Component({
  selector: 'app-wang-editor',
  templateUrl: './wang-editor.component.html',
  styleUrls: ['./wang-editor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => WangEditorComponent),
      multi: true,
    },
  ],
})
export class WangEditorComponent
  implements OnInit, AfterViewInit, OnDestroy, ControlValueAccessor
{
  @ViewChild('editorRef') editorRef;
  editor = null;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.editor = new E(this.editorRef.nativeElement);
    // this.editor.config.height = 300;
    this.editor.config.menus = [
      'head',
      'bold',
      'fontSize',
      'fontName',
      'italic',
      'underline',
      'strikeThrough',
      'indent',
      'lineHeight',
      'foreColor',
      'backColor',
      'link',
      'list',
      'todo',
      'justify',
      // 'quote',
      'emoticon',
      'image',
      // 'video',
      'table',
      // 'code',
      'splitLine',
      'undo',
      'redo',
    ];
    this.editor.config.colors = [
      'rgb(0,0,0)',
      'rgb(127,127,127)',
      'rgb(136,0,21)',
      'rgb(237,28,36)',
      'rgb(255,127,39)',
      'rgb(255,242,0)',
      'rgb(34,177,76)',
      'rgb(0,162,232)',
      'rgb(63,72,204)',
      'rgb(163,73,164)',
    ];
    // this.editor.config.customUploadImg = function (resultFiles, insertImgFn) {
    //   // resultFiles 是 input 中选中的文件列表
    //   // insertImgFn 是获取图片 url 后，插入到编辑器的方法

    //   // 上传图片，返回结果，将图片插入到编辑器中
    //   insertImgFn(resultFiles);
    // };
    this.editor.config.onchange = (newHtml) => {
      this.propagateOnChange(newHtml);
    };

    this.editor.create();
    // this.editor.txt.html(
    //   '<h1 style="color:red;">用 JS 设置的内容</h1><h2>用 JS 设置的内容</h2>'
    // );
    // console.log(this.editor.txt.html());
    // console.log(this.editor.txt.text());
  }

  ngOnDestroy(): void {
    this.editor.destroy();
    this.editor = null;
  }

  writeValue(value) {
    console.log(111, value);
    if (value) {
      setTimeout(() => {
        this.editor.txt.html(value);
      }, 300);
    }
  }
  propagateOnChange: (value: any) => void = (_: any) => {};
  propagateOnTouched: (value: any) => void = (_: any) => {};
  registerOnChange(fn: any) {
    this.propagateOnChange = fn;
  }
  registerOnTouched(fn: any) {
    this.propagateOnTouched = fn;
  }
}
