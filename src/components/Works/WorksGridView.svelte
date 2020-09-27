<script lang="ts">
  import type { WorksListQuery } from "database/generated/operations";
  import { GridView } from "../GridView";
  import WorkGridViewTile from "./WorkGridViewTile.svelte";

  export let numerableName = "works";
  export let items: WorksListQuery["works"] = [];
</script>

<GridView {numerableName} count={items.length}>
  {#each items as { id, title, duration, work_roled_composers } (id)}
    <WorkGridViewTile
      {id}
      {title}
      composers={work_roled_composers.map(({ roled_composer }) => `${roled_composer.composer.name} ${roled_composer.composer.surname}`)}
      {duration}
    />
  {/each}
</GridView>
