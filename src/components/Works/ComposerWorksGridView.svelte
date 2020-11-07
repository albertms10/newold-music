<script lang="ts">
  import type { ComposerInfoQuery } from "database/generated/operations";
  import { _ } from "svelte-i18n";
  import { timeDuration } from "utils/datetime";
  import { searchFilter } from "utils/misc";
  import { GridView } from "../GridView";
  import WorkGridViewTile from "./WorkGridViewTile.svelte";

  export let numerableName = "works";
  export let items: ComposerInfoQuery["composers_by_pk"]["roled_composers"]["work_roled_composers"] = [];

  let searchValue: string = "";

  $: filteredItems = items.filter(({ work }) =>
    searchFilter(searchValue, {
      texts: [
        work.title,
        work.duration,
        timeDuration(work.duration, { defaultText: $_("fields.no duration") }),
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
  {#each filteredItems as { work: { id, title, duration } } (id)}
    <WorkGridViewTile {id} {title} {duration} />
  {/each}
</GridView>
