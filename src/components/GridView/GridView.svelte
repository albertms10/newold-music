<script lang="ts">
  import { Grid, Row } from "carbon-components-svelte";
  import DataTable32 from "carbon-icons-svelte/lib/DataTable32";
  import { _ } from "svelte-i18n";

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

  .no-items {
    text-align: center;
    width: 100%;
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
        <div class="no-items">
          <DataTable32 />
          <h5>{countText}</h5>
        </div>
      </slot>
    </Row>
  </Grid>
</section>
