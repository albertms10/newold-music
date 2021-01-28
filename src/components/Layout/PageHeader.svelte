<script lang="ts">
  import { Button } from "carbon-components-svelte";
  import ChevronLeft16 from "carbon-icons-svelte/lib/ChevronLeft16";
  import { _ } from "svelte-i18n";

  export let title: string = undefined;
  export let description: string = undefined;

  export let goBackRoute: string = undefined;
  export let backgroundImageUrl: string = undefined;
</script>

<div
  class="page-header"
  class:large={backgroundImageUrl}
  class:light={backgroundImageUrl}
  style={backgroundImageUrl
    ? `background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)), url(${backgroundImageUrl})`
    : ""}
>
  {#if goBackRoute}
    <div class="back-button">
      <Button
        kind={backgroundImageUrl ? "secondary" : "ghost"}
        size="small"
        href={goBackRoute}
      >
        <svelte:component this={ChevronLeft16} />
        <p class="label">{$_(`routes.${goBackRoute}`)}</p>
      </Button>
    </div>
  {/if}

  <div>
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
  </div>

  <slot />
</div>

<style>
  .page-header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: -2rem -2rem 2rem -2rem;
    padding: 2rem;
    border-bottom: 1px solid #eee;
    background-color: #fff;
    background-position: center;
    background-size: cover;
  }

  .page-header.light {
    color: #fff;
  }

  .page-header.large {
    min-height: 16rem;
  }

  .header {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
    margin-bottom: 1rem;
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

  :global(.back-button svg) {
    margin-left: -0.5rem;
  }
</style>
