<script lang="ts">
  import Collaborate20 from "carbon-icons-svelte/lib/Collaborate20";
  import { _ } from "svelte-i18n";
  import { truncateString } from "utils/strings";
  import GridViewTile from "./GridView/GridViewTile.svelte";
  import GridViewTileDetail from "./GridView/GridViewTileDetail.svelte";
  import CampaignProgressBar from "./CampaignProgressBar.svelte";

  export let id: number;
  export let title: string = undefined;
  export let description: string = undefined;

  export let contributorsCount: number = undefined;

  export let progressAmount: number = undefined;
  export let progressStops: number[] = [];
</script>

<GridViewTile href={`campaigns/${id}`} aspectRatio="16x9" sm={4} md={8} lg={8}>
  <span slot="title">{title}</span>
  <span slot="meta">{truncateString(description, 82)}</span>
  <div slot="details">
    <GridViewTileDetail
      icon={Collaborate20}
      label={$_('numerable.contributors', {
        values: { n: contributorsCount },
      })} />
    <CampaignProgressBar amount={progressAmount} stops={progressStops} />
  </div>
</GridViewTile>
