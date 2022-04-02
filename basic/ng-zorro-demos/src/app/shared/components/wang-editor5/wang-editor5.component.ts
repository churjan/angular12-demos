import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  forwardRef,
  ViewEncapsulation,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  createEditor,
  createToolbar,
  IEditorConfig,
  IToolbarConfig,
  IDomEditor,
} from '@wangeditor/editor';

type InsertFnType = (url: string, alt: string, href: string) => void;

@Component({
  selector: 'app-wang-editor5',
  templateUrl: './wang-editor5.component.html',
  styleUrls: ['./wang-editor5.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => WangEditor5Component),
      multi: true,
    },
  ],
  encapsulation: ViewEncapsulation.None,
})
export class WangEditor5Component
  implements OnInit, AfterViewInit, OnDestroy, ControlValueAccessor
{
  @ViewChild('toolbarContainer') toolbarContainer;
  @ViewChild('editorContainer') editorContainer;
  editorConfig: Partial<IEditorConfig> = {};
  toolbarConfig: Partial<IToolbarConfig> = {};
  editor = null;
  toolbar = null;
  @Input() customerStyle: any = {};

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.editorConfig = {
      placeholder: '请输入内容',
      onChange: (editor: IDomEditor) => {
        // console.log('html', editor.getHtml());
        this.propagateOnChange(editor.getHtml());
      },
      MENU_CONF: {
        uploadImage: {
          async customUpload(file: File, insertFn: InsertFnType) {
            // file 即选中的文件
            // 自己实现上传，并得到图片 url alt href
            // 最后插入图片
            console.log(file);
            const url = '';
            const alt = '';
            const href = '';
            insertFn(url, alt, href);
          },
        },
      },
    };

    this.toolbarConfig = {
      toolbarKeys: [
        'headerSelect',
        'blockquote',
        '|',
        'bold',
        'underline',
        'italic',
        {
          key: 'group-more-style',
          title: '更多',
          iconSvg:
            '<svg viewBox="0 0 1024 1024"><path d="M204.8 505.6m-76.8 0a76.8 76.8 0 1 0 153.6 0 76.8 76.8 0 1 0-153.6 0Z"></path><path d="M505.6 505.6m-76.8 0a76.8 76.8 0 1 0 153.6 0 76.8 76.8 0 1 0-153.6 0Z"></path><path d="M806.4 505.6m-76.8 0a76.8 76.8 0 1 0 153.6 0 76.8 76.8 0 1 0-153.6 0Z"></path></svg>',
          menuKeys: ['through', 'code', 'sup', 'sub', 'clearStyle'],
        },
        'color',
        'bgColor',
        '|',
        'fontSize',
        'fontFamily',
        'lineHeight',
        '|',
        'bulletedList',
        'numberedList',
        'todo',
        {
          key: 'group-justify',
          title: '对齐',
          iconSvg:
            '<svg viewBox="0 0 1024 1024"><path d="M768 793.6v102.4H51.2v-102.4h716.8z m204.8-230.4v102.4H51.2v-102.4h921.6z m-204.8-230.4v102.4H51.2v-102.4h716.8zM972.8 102.4v102.4H51.2V102.4h921.6z"></path></svg>',
          menuKeys: [
            'justifyLeft',
            'justifyRight',
            'justifyCenter',
            'justifyJustify',
          ],
        },
        {
          key: 'group-indent',
          title: '缩进',
          iconSvg:
            '<svg viewBox="0 0 1024 1024"><path d="M0 64h1024v128H0z m384 192h640v128H384z m0 192h640v128H384z m0 192h640v128H384zM0 832h1024v128H0z m0-128V320l256 192z"></path></svg>',
          menuKeys: ['indent', 'delIndent'],
        },
        '|',
        'emotion',
        'insertLink',
        {
          key: 'group-image',
          title: '图片',
          iconSvg:
            '<svg viewBox="0 0 1024 1024"><path d="M959.877 128l0.123 0.123v767.775l-0.123 0.122H64.102l-0.122-0.122V128.123l0.122-0.123h895.775zM960 64H64C28.795 64 0 92.795 0 128v768c0 35.205 28.795 64 64 64h896c35.205 0 64-28.795 64-64V128c0-35.205-28.795-64-64-64zM832 288.01c0 53.023-42.988 96.01-96.01 96.01s-96.01-42.987-96.01-96.01S682.967 192 735.99 192 832 234.988 832 288.01zM896 832H128V704l224.01-384 256 320h64l224.01-192z"></path></svg>',
          menuKeys: ['insertImage', 'uploadImage'],
        },
        // {
        //   key: 'group-video',
        //   title: '视频',
        //   iconSvg:
        //     '<svg viewBox="0 0 1024 1024"><path d="M981.184 160.096C837.568 139.456 678.848 128 512 128S186.432 139.456 42.816 160.096C15.296 267.808 0 386.848 0 512s15.264 244.16 42.816 351.904C186.464 884.544 345.152 896 512 896s325.568-11.456 469.184-32.096C1008.704 756.192 1024 637.152 1024 512s-15.264-244.16-42.816-351.904zM384 704V320l320 192-320 192z"></path></svg>',
        //   menuKeys: ['insertVideo', 'uploadVideo'],
        // },
        'insertTable',
        // 'codeBlock',
        // 'divider',
        '|',
        'undo',
        'redo',
        '|',
        'fullScreen',
      ],
    };

    this.editor = createEditor({
      selector: this.editorContainer.nativeElement,
      config: this.editorConfig,
      mode: 'default', // 或 'simple' 参考下文
    });

    this.toolbar = createToolbar({
      editor: this.editor,
      selector: this.toolbarContainer.nativeElement,
      config: this.toolbarConfig,
      mode: 'default', // 或 'simple' 参考下文
    });
  }

  ngOnDestroy(): void {
    if (this.editor) {
      this.editor.destroy();
      this.editor = null;
      this.toolbar = null;
    }
  }

  writeValue(value) {
    console.log(111, value);
    if (value) {
        this.editor.select([]);
        this.editor.deleteFragment();
        this.editor.dangerouslyInsertHtml(value);
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
