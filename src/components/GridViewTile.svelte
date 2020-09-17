<script lang="ts">
  import { ClickableTile } from "carbon-components-svelte";

  export let title: string;
  export let meta: string = undefined;
  export let detail: string = undefined;
  export let href: string = undefined;
</script>

<style>
  article {
    width: 18rem;
    padding: 1rem;
  }

  .detail {
    color: #777;
  }
</style>

<svelte:options immutable />

<article>
  <ClickableTile {href}>
    <h3>{title}</h3>
    {#if meta}
      <p>{meta}</p>
    {/if}
    {#if detail}
      <hr />
      <p class="detail">{detail}</p>
    {/if}
  </ClickableTile>
</article>
