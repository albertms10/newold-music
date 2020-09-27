<script lang="ts">
  import { Grid, Row } from "carbon-components-svelte";
  import { _ } from "svelte-i18n";
  import { Empty } from "../Layout";

  export let numerableName: string = "items";
  export let count: number = 0;

  $: countText = $_(`numerable.${numerableName}`, { values: { n: count } });
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
</style>

<section>
  {#if count > 0}
    <p class="count">{countText}</p>
  {/if}
  <hr />
  <Grid>
    <Row>
      <slot>
        <Empty text={countText} />
      </slot>
    </Row>
  </Grid>
</section>
