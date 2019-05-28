<script>
  import {
    getTagsRecursive,
    saveRange,
    restoreRange,
    exec,
    cleanHtml,
    getActionBtns,
    getNewActionObj,
    removeBadTags,
    isEditorClick
  } from './helpers/util';
  import EditorModal from "./helpers/EditorModal.svelte";
  import EditorColorPicker from "./helpers/EditorColorPicker.svelte";
  import {onMount} from 'svelte';
  import {createActions} from './helpers/actions';
  import { writable, get } from 'svelte/store';
  import { createEventDispatcher } from 'svelte';
  const dispatchEvent = createEventDispatcher();

  const content = writable({});
  
  let editorWrapper;
  let editor;
  let raw;
  let modal;
  let colorPicker;
  const helper = {};

  
  
  export let actionBtns = [];
  export let height = '300px';
  export let html = '';
  export let removeFormatTags =  ['h1', 'h2', 'blockquote'];
  const actionObj = {};
  
  onMount(()=> {
    const _data = {actionBtns, height, html, removeFormatTags};
    Object.assign(helper, {
        foreColor: false,
        backColor: false,
        foreColorModal: false,
        backColorModal: false,
        image: false,
        link: false,
        showEditor: true,
        blurActive: false
    });
    const modalEl = new EditorModal({ target: modal });
    const colorPickerEl = new EditorColorPicker({ target: colorPicker });
    const actions = createActions({helper, store: content, raw, editor, colorPicker: colorPickerEl, modal: modalEl});
    Object.assign(actionObj, getNewActionObj(actions, _data.actions));
    console.log(this)
    editor.set({ actionBtns: getActionBtns(actionObj), actionObj });
    methods.setHtml(_data.html);
    content.subscribe(state =>{
        actionBtns = state.actionBtns;
        Object.assign(actionObj, state.actionObj);
    });
});

    const _this = this;
    const methods = {
      _btnClicked: function(action) {
        editor.focus();
        saveRange(editor);
        restoreRange(editor);
        action.result(get(content));
        methods._handleButtonStatus();
      },
      _handleButtonStatus: function(clearBtns) {
        const tags = clearBtns ? [] : getTagsRecursive(document.getSelection().focusNode);
        Object.keys(actionObj).forEach((action) => actionObj[action].active = false);
        tags.forEach((tag) => (actionObj[tag.toLowerCase()] || {}).active = true);
        content.update(s=> Object.assign(s, { actionBtns: getActionBtns(actionObj), actionObj}));
      },
      _onPaste: function(event) {
        event.preventDefault();
        exec('insertHTML', event.clipboardData.getData('text/html') ? cleanHtml(event.clipboardData.getData('text/html')) : event.clipboardData.getData('text'));
      },
      _onChange: function(event) {
        dispatchEvent('change', event.target.innerHTML);
      },
      _documentClick: function(event) {
        if (!isEditorClick(event.target, editorWrapper) && helper.blurActive) {
          dispatchEvent('blur', event);
        }
        helper.blurActive = true;
      },
      exec: (cmd, value) => {
        exec(cmd, value);
      },
      getHtml: function(sanitize) {
        return sanitize ? removeBadTags(editor.innerHTML) : editor.innerHTML;
      },
      getText: function() {
        return editor.innerText;
      },
      setHtml: function(html, sanitize) {
        editor.innerHTML = sanitize ? removeBadTags(html) : (html || '');
      },
      saveRange: function() {
        saveRange(editor);
      },
      restoreRange: function() {
        restoreRange(editor);
      }
    };


</script>

<style type="text/css">
  .cl * {
    box-sizing: border-box;
  }

  .cl {
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
    box-sizing: border-box;
    width: 100%;
    position: relative;
  }

  .cl-content {
    height: 300px;
    outline: 0;
    overflow-y: auto;
    padding: 10px;
    width: 100%;
    background-color: white;
  }

  .cl-actionbar {
    background-color: #ecf0f1;
    border-bottom: 1px solid rgba(10, 10, 10, 0.1);
    width: 100%;
  }

  .cl-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    height: 35px;
    outline: 0;
    width: 35px;
    vertical-align: top;
    position: relative;
  }

  .cl-button:hover, .cl-button.active {
    background-color: #fff;
  }

  .cl-button:disabled {
    opacity: .5;
    pointer-events: none;
  }

  .cl-textarea {
    display: none;
    max-width: 100%;
    min-width: 100%;
    border: none;
    padding: 10px;
  }

  .cl-textarea:focus {
    outline: none;
  }


</style>


<svelte:window on:click={methods._documentClick}/>
<div class="cl" bind:this={editorWrapper}>
  <div class="cl-actionbar">
    {#each actionBtns as action }
      <button 
        class="cl-button {action.active ? 'active' : ''}" 
        title="{action.title}" 
        on:click={methods._btnClicked.bind(null,  action)} 
        disabled={action.disabled}>
        {@html action.icon}
      </button>
    {/each}
  </div>
  <div bind:this={editor} 
    class="cl-content"
    style="height:{height}"
    contenteditable="true"
    on:input={methods._onChange} 
    on:mouseup={methods._handleButtonStatus}
    on:keyup={methods._handleButtonStatus}
    on:paste={methods._onPaste}>
  </div>
  
  <textarea bind:this={raw} class="cl-textarea" style="max-height: {height}; min-height: {height}"></textarea>
  <div bind:this={modal}></div>
  <div bind:this={colorPicker}></div>
</div>
<svelte:options tag="editor-svelte"  accessors={true}/>