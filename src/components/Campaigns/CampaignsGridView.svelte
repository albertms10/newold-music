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
  bind:searchValue
  count={items.length}
  filteredCount={filteredItems.length}
  {numerableName}
>
  {#each filteredItems as { id, title, description, goal, image_url, campaign_contributors_aggregate } (id)}
    <CampaignGridViewTile
      {id}
      {title}
      {description}
      avatarUrl={image_url}
      contributorsCount={campaign_contributors_aggregate.aggregate.count}
      progressAmount={campaign_contributors_aggregate.aggregate.sum.quantity}
      progressGoal={goal}
    />
  {/each}
</GridView>
