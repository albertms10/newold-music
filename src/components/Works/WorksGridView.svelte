<script lang="ts">
  import type { WorksListQuery } from "database/generated/operations";
  import { _ } from "svelte-i18n";
  import { timeDuration } from "utils/datetime";
  import { searchFilter } from "utils/misc";
  import { GridView } from "../GridView";
  import WorkGridViewTile from "./WorkGridViewTile.svelte";

  export let numerableName = "works";
  export let items: WorksListQuery["works"] = [];

  let searchValue: string = "";

  const getRoledComposer = ({ roled_composer }) =>
    `${roled_composer.composer.name} ${roled_composer.composer.surname}`;

  $: filteredItems = items.filter((item) =>
    searchFilter(searchValue, {
      texts: [
        item.title,
        item.duration,
        timeDuration(item.duration, { defaultText: $_("fields.no duration") }),
        ...item.work_roled_composers.map(getRoledComposer),
      ],
    }),
  );
</script>

<GridView
  bind:searchValue
  count={items.length}
  filteredCount={filteredItems.length}
  {numerableName}
>
  {#each filteredItems as { id, title, duration, work_roled_composers } (id)}
    <WorkGridViewTile
      {id}
      {title}
      composers={work_roled_composers.map(getRoledComposer)}
      {duration}
    />
  {/each}
</GridView>
