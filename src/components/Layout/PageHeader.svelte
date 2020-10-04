<script lang="ts">
  import { Button } from "carbon-components-svelte";
  import ChevronLeft16 from "carbon-icons-svelte/lib/ChevronLeft16";
  import { _ } from "svelte-i18n";

  export let title: string = undefined;
  export let description: string = undefined;

  export let goBackRoute: string = undefined;
</script>

<style>
  .header {
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    flex-wrap: wrap;
  }

  .header h1 {
    flex: 1;
  }

  .action {
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
  }

  .back-button .label {
    margin-left: 0.5rem;
  }

  .page-header {
    margin: -2rem -2rem 2rem -2rem;
    padding: 2rem;
    background-color: #fff;
    border-bottom: 1px solid #eee;
  }

  :global(.back-button svg) {
    margin-left: -0.5rem;
  }
</style>

<div class="page-header">
  {#if goBackRoute}
    <div class="back-button">
      <Button kind="ghost" size="small" href={goBackRoute}>
        <svelte:component this={ChevronLeft16} />
        <p class="label">{$_(`routes.${goBackRoute}`)}</p>
      </Button>
    </div>
  {/if}

  <div class="header">
    <slot name="title">
      {#if title}
        <h1>{title}</h1>
      {/if}
    </slot>
    <div class="action">
      <slot name="action" />
    </div>
  </div>

  <slot name="description">
    {#if description}
      <p>{description}</p>
    {/if}
  </slot>

  <slot />
</div>
