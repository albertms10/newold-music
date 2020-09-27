<script lang="ts">
  import type { ComposersListQuery } from "database/generated/operations";
  import { searchFilter } from "utils/misc";
  import { GridView } from "../GridView";
  import ComposerGridViewTile from "./ComposerGridViewTile.svelte";

  export let numerableName = "composers";
  export let items: ComposersListQuery["composers"] = [];

  let searchValue: string = "";

  $: filteredItems = items.filter((item) =>
    searchFilter(searchValue, { texts: [`${item.name} ${item.surname}`] })
  );
</script>

<GridView {numerableName} count={items.length} bind:searchValue>
  {#each filteredItems as { id, name, surname, roled_composers } (id)}
    <ComposerGridViewTile
      {id}
      composer="{name} {surname}"
      worksCount={roled_composers.reduce((prev, curr) => prev + curr.work_roled_composers_aggregate.aggregate.count, 0)}
    />
  {/each}
</GridView>
