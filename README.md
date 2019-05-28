## Lightweight text editor
Port of [@nenadpnc/cl-editor](https://github.com/nenadpnc/cl-editor) from svelte v2 to svelte v3 (no external dependencies) 

<b>Experimental Project for learnng svelte</b>

#### File size (bundle includes css, html and js)
* min: 22.5kb
* gzip: 9kb

## Installation

#### npm:

```bash
npm install --save inno-editor
```

#### HTML:

```html
<head>
  ...
</head>
<body>
  ...
  <div id="editor"></div>
  ...
</body>
```

#### Usage
```js
import Editor from 'inno-editor';
// or
const Editor = require('inno-editor');
```
```js
// Initialize editor
const editor = new Editor({
    // <HTMLElement> required
    target: document.getElementById('editor'),
    // optional
    data: {
        // <Array[string | Object]> string if overwriting, object if customizing/creating
        // available actions:
        // 'viewHtml', 'undo', 'redo', 'b', 'i', 'u', 'strike', 'sup', 'sub', 'h1', 'h2', 'p', 'blockquote', 
        // 'ol', 'ul', 'hr', 'left', 'right', 'center', 'justify', 'a', 'image', 'forecolor', 'backcolor', 'removeFormat'
        actions: [
            'b', 'i', 'u', 'strike', 'ul', 'ol',
            {
                name: 'copy', // required
                icon: '<b>C</b>', // string or html string (ex. <svg>...</svg>)
                title: 'Copy',
                result: () => {
                    // copy current selection or whole editor content
                    const selection = window.getSelection();
                    if (!selection.toString().length) {
                        const range = document.createRange();
                        range.selectNodeContents(editor.refs.editor);
                        selection.removeAllRanges();
                        selection.addRange(range);
                    }
                    editor.exec('copy');
                }
            },
            'h1', 'h2', 'p'
        ],
        // default 300px
        height: '300px',
        // initial html
        html: '',
        // remove format action clears formatting, but also removes some html tags.
        // you can specify which tags you want to be removed.
        removeFormatTags: ['h1', 'h2', 'blackquote'] // default
    }
})
```

#### API
```js
// Methods
editor.exec(cmd: string, value?: string) // execute document command (document.executeCommand(cmd, false, value))
editor.getHtml(sanitize?: boolean) // returns html string from editor. if passed true as argument, html will be sanitized before return
editor.getText() // returns text string from editor
editor.setHtml(html: string, sanitize?: boolean) // sets html for editor. if second argument is true, html will be sanitized
editor.saveRange() // saves current editor cursor position or user selection
editor.restoreRange() // restores cursor position or user selection
// saveRange and restoreRange are useful when making custom actions
// that demands that focus is shifted from editor to, for example, modal window.
```

* You can check them out at [https://svelte.dev](https://svelte.dev)
* For list of available _**exec**_ command visit [https://codepen.io/netsi1964/pen/QbLLG](https://codepen.io/netsi1964/pen/QbLLGW)
```js
// Events
editor.on('change', (html) => console.log(html)) // on every keyup event
editor.on('blur', (event) => console.log(event)) // on editor blur event
```
```js
// Props
editor.refs.<editor | raw | modal | colorPicker> // references to editor, raw (textarea), modal and colorPicker HTMLElements
editor.options // current editor options
```

#### Run demo
```bash
git clone https://github.com/aregee/cl-text-editor.git cl-editor
cd cl-editor
npm i
npm run dev
```

#### This library is inspired by https://github.com/Alex-D/Trumbowyg and https://github.com/jaredreich/pell and  https://github.com/nenadpnc/cl-editor

## Licence

 MIT License