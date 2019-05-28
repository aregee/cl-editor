<script>
export let charProps;
</script>


{#if charProps.type === 'keyword' }
    <div class="ms-builder-block-wrapper" uid="15ji" style="display: inline-block;">
    <div class="ms-builder-block-container operator-block-container" uid="2ic5" style="margin: 0px;">
            <div class="ms-builder-popover-parent" uid="2ai5">
                <div uid="16ai" style="position: relative;"><span class="button inverse small inline end operator current-operator" uid="ga1a">{charProps.text}</span></div>
            </div>
        </div>
    </div>  
{:else if charProps.type === 'number' }
    <span class="operand-block" id={charProps.value}>{charProps.text}</span>
{/if}

<svelte:options tag="measure-keyword"/>