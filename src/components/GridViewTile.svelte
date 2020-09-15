<script lang="ts">
  import { ClickableTile } from "carbon-components-svelte";

  export let title: string;
  export let meta: string;
  export let href: string;
</script>

<style>
  article {
    width: 18rem;
    padding: 1rem;
  }
</style>

<svelte:options immutable />

<article>
  <ClickableTile {href}>
    <h3>{title}</h3>
    {#if meta}
      <p>{meta}</p>
    {/if}
  </ClickableTile>
</article>
