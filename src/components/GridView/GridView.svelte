<script lang="ts">
  import { Grid, Row } from "carbon-components-svelte";
  import { Empty } from "../Layout";
  import { Searchable } from "../Searchable";

  export let numerableName: string = "items";
  export let count: number = 0;
  export let filteredCount: number = 0;

  export let searchValue: string = undefined;
</script>

<style>
  section {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
</style>

<section>
  <Searchable
    bind:value={searchValue}
    {count}
    {filteredCount}
    hideInput={count === 0}
    let:countText
    {numerableName}
  >
    <Grid>
      <Row>
        {#if count > 0 && filteredCount > 0}
          <slot />
        {:else}
          <Empty text={countText} />
        {/if}
      </Row>
    </Grid>
  </Searchable>
</section>
