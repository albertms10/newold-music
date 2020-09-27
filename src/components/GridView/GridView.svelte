<script lang="ts">
  import { Grid, Row, Search } from "carbon-components-svelte";
  import { _ } from "svelte-i18n";
  import { Empty } from "../Layout";

  export let numerableName: string = "items";
  export let count: number = 0;

  export let searchValue: string = undefined;

  $: countText = $_(`numerable.${numerableName}`, { values: { n: count } });
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
  {#if count > 0}
    <div class="header">
      <Search
        placeholder={$_('actions.search')}
        small
        light
        autofocus
        autocomplete="on"
        bind:value={searchValue}
      />
      <p class="count">{countText}</p>
    </div>
  {/if}
  <Grid>
    <Row>
      <slot>
        <Empty text={countText} />
      </slot>
    </Row>
  </Grid>
</section>
