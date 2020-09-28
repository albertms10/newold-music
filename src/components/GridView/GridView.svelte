<script lang="ts">
  import { Grid, Row, Search } from "carbon-components-svelte";
  import { _ } from "svelte-i18n";
  import { Empty } from "../Layout";
  import { stores, goto } from "@sapper/app";

  const { page } = stores();

  export let numerableName: string = "items";
  export let count: number = 0;
  export let filteredCount: number = 0;

  export let searchValue: string = undefined;

  $: countText = $_(`numerable.${numerableName}`, {
    values: { n: filteredCount },
  });
  $: numerableTerm = $_(`terms.${numerableName}`, {
    values: { n: count },
  });
  $: filteredCountText = $_("numerable.showing start", {
    values: { n: filteredCount, t: count },
  });

  searchValue = $page.query.search;
</script>

<style>
  section {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .count {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    text-align: right;
    color: #777;
  }
</style>

<section>
  <div class="header">
    {#if count > 0}
      <Search
        placeholder={$_('actions.search')}
        small
        light
        autofocus
        autocomplete="on"
        bind:value={searchValue}
        on:change={(e) => goto(`.${$page.path}?search=${e.target.value}`)}
      />
      <p class="count">
        {#if filteredCount < count}
          {filteredCountText}
          {numerableTerm}
        {:else}{countText}{/if}
      </p>
    {:else}
      <hr />
    {/if}
  </div>
  <Grid>
    <Row>
      {#if count > 0 && filteredCount > 0}
        <slot />
      {:else}
        <Empty text={countText} />
      {/if}
    </Row>
  </Grid>
</section>
