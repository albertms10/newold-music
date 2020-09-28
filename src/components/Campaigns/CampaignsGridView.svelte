<script lang="ts">
  import type { CampaignsListQuery } from "database/generated/operations";
  import { searchFilter } from "utils/misc";
  import { GridView } from "../GridView";
  import CampaignGridViewTile from "./CampaignGridViewTile.svelte";

  export let numerableName = "campaigns";
  export let items: CampaignsListQuery["campaigns"] = [];

  let searchValue: string = "";

  $: filteredItems = items.filter((item) =>
    searchFilter(searchValue, { texts: [item.title] })
  );
</script>

<GridView
  {numerableName}
  count={items.length}
  filteredCount={filteredItems.length}
  bind:searchValue
>
  {#each filteredItems as { id, title, description, campaign_contributors_aggregate, campaign_progress_stops } (id)}
    <CampaignGridViewTile
      {id}
      {title}
      {description}
      contributorsCount={campaign_contributors_aggregate.aggregate.count}
      progressAmount={campaign_contributors_aggregate.aggregate.sum.quantity}
      progressStops={campaign_progress_stops.map(({ stop }) => stop)}
    />
  {/each}
</GridView>
