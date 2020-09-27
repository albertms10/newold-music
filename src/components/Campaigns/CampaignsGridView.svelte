<script lang="ts">
  import type { CampaignsListQuery } from "database/generated/operations";
  import { GridView } from "../GridView";
  import CampaignGridViewTile from "./CampaignGridViewTile.svelte";

  export let numerableName = "campaigns";
  export let items: CampaignsListQuery["campaigns"] = [];
</script>

<GridView {numerableName} count={items.length}>
  {#each items as { id, title, description, campaign_contributors_aggregate, campaign_progress_stops } (id)}
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
