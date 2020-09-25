<script lang="ts">
  import type { ComposersListQuery } from "database/generated/operations";
  import ComposerGridViewTile from "./ComposerGridViewTile.svelte";
  import GridView from "./GridView/GridView.svelte";

  export let numerableName = "composers";
  export let items: ComposersListQuery["composers"] = [];
</script>

<GridView {numerableName} count={items.length}>
  {#each items as { id, name, surname, roled_composers } (id)}
    <ComposerGridViewTile
      {id}
      composer="{name} {surname}"
      worksCount={roled_composers.reduce((prev, curr) => prev + curr.work_roled_composers_aggregate.aggregate.count, 0)}
    />
  {/each}
</GridView>
