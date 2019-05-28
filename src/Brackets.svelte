<script>
    export let charProps;
    import LetftBracket from './LeftBracket.svelte';
    import RightBracket from './RightBracket.svelte';
</script>
	

{#if charProps.type === "lparen" }
	<LetftBracket bind:value={charProps.value}/>
{:else if charProps.type === 'rparen'}
	<RightBracket bind:value={charProps.value}/>
{/if}

<svelte:options tag="measure-brackets"/>