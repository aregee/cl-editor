import App from './App.svelte';
import moo from 'moo';

import Editor from './Editor.svelte';


const lexer = moo.compile({
	WS:      /[ \t]+/,
	comment: /\/\/.*?$/,
	number:  /0|[1-9][0-9]*/,
	string:  /"(?:\\["\\]|[^\n"\\])*"/,
	lparen:  '(',
	rparen:  ')',
	keyword: ['AND', 'OR', 'ANDNOT', 'NOT'],
	NL:      { match: /\n/, lineBreaks: true },
	SyntaxError: moo.error,
  });

// const app = new App({
// 	target: document.body,
// 	props: {
// 		lexer
// 	}
// });


const app = new Editor({
    target: document.body,
    props: {
	  html: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a odio neque. Duis ac laoreet lacus.',
	  height: '350px'
    }
});

export default app;