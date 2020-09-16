<script lang="ts">
  import { _ } from "svelte-i18n";

  export let numerableName: string;
  export let count: number = 0;

  $: n = count;
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
    <slot>{$_('numerable.no items')}</slot>
  </div>
</section>
