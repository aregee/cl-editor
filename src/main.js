import Editor from './Editor.svelte';

const app = new Editor({
    target: document.body,
    props: {
	  html: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a odio neque. Duis ac laoreet lacus.',
	  height: '350px'
    }
});

export default app;