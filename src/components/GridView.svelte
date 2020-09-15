<script lang="ts">
  import { _ } from "svelte-i18n";
  import GridViewTile from "./GridViewTile.svelte";

  interface GridViewItem {
    id: number | string;
    title: string;
    meta?: string;
  }

  export let items: GridViewItem[];
  export let count: number;
  export let numerableName: string;

  const n = count || items.length;
</script>

<style>
  section {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  hr {
    margin-bottom: 1rem;
  }

  .count {
    margin-bottom: 0.5rem;
    text-align: right;
    color: #777;
  }

  .items {
    display: flex;
    flex-flow: wrap;
  }
</style>

<section>
  <p class="count">
    {#if numerableName}
      {$_(`numerable.${numerableName}`, { values: { n } })}
    {:else}{n}{/if}
  </p>
  <hr />
  <div class="items">
    {#each items as { id, title, meta } (id)}
      <GridViewTile {title} {meta} href={`composers/${id}`} />
    {/each}
  </div>
</section>
