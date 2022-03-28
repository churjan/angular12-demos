// toolbar: [
//   ['bold', 'italic', 'underline', 'strike'], // toggled buttons
//   ['blockquote', 'code-block'],

//   [{ header: 1 }, { header: 2 }], // custom button values
//   [{ list: 'ordered' }, { list: 'bullet' }],
//   [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
//   [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
//   [{ direction: 'rtl' }], // text direction

//   [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
//   [{ header: [1, 2, 3, 4, 5, 6, false] }],

//   [{ color: [] }, { background: [] }], // dropdown with defaults from theme
//   [{ font: [] }],
//   [{ align: [] }],

//   ['clean'], // remove formatting button

//   ['link', 'image', 'video'], // link and image, video
// ];
import Quill from 'quill'
import 'quill-emoji/dist/quill-emoji.js';
import BlotFormatter from 'quill-blot-formatter/dist/BlotFormatter';

Quill.register('modules/blotFormatter', BlotFormatter);


export const QuillConfiguration = {
  'emoji-shortname': false,
  'emoji-textarea': false,
  'emoji-toolbar': false,
  blotFormatter: {
    // empty object for default behaviour.
  },
  toolbar: {
    container:[
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons
      ['blockquote'],
      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],
      ['clean'], // remove formatting button
      ['link', 'image'], // link and image, video
      ['emoji'],
    ],
  handlers: { 'emoji': function () {} }
  }
};
