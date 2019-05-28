<script>
	import Brackets from './Brackets.svelte';
	import Keyword from './Keyword.svelte';

	let expression = '( ( 27 OR 28 OR 29 OR 30 OR 31 OR 32 OR 33 OR ( 34 AND 35 ) ) ANDNOT ( ( ( 0 OR ( 1 AND ( 2 OR 3 ) ) ) OR ( (4 OR 5) AND (6 OR 7) AND ( 8 OR 9 ) ) ) AND 10 AND 11 AND 12 AND ( ( 13 OR ( 14 AND 15 ) ) OR 16 ) AND ( 17 OR 18 ) AND 19 AND ( 20 OR 21 ) AND 22 AND ( ( 23 OR 24 ) OR ( 25 AND 26 ) ) ) )';
	export let lexer;

	function tokenizer(exprs) {
  		lexer.reset(exprs);
 		return Array.from(lexer);
	}
	
</script>

<style>
	h1 {
		color: purple;
	}
	textarea { width: 100%; height: 200px; }
</style>

<textarea bind:value={expression}/>

{#each tokenizer(expression) as token}
	{#if token.type === 'SyntaxError' }
		<span>Error {token.value}</span>
		<pre>{lexer.formatError(token, "invalid syntax")}</pre>
	{/if}
	<Brackets bind:charProps={token} />
	<Keyword bind:charProps={token} />
{/each}

<svelte:options tag="measure-builder"/>