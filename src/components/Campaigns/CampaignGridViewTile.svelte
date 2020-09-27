<script lang="ts">
  import Collaborate20 from "carbon-icons-svelte/lib/Collaborate20";
  import { _ } from "svelte-i18n";
  import { truncateString } from "utils/strings";
  import { GridViewTile, GridViewTileDetail } from "../GridView";
  import CampaignProgressBar from "./CampaignProgressBar.svelte";

  export let id: number;
  export let title: string = undefined;
  export let description: string = undefined;

  export let contributorsCount: number = undefined;

  export let progressAmount: number = undefined;
  export let progressStops: number[] = [];
</script>

<GridViewTile
  {title}
  meta={truncateString(description, 82)}
  href="campaigns/{id}"
  aspectRatio="16x9"
  sm={4}
  md={8}
  lg={8}
>
  <div slot="details">
    <GridViewTileDetail
      icon={Collaborate20}
      label={$_('numerable.contributors', { values: { n: contributorsCount } })}
    />
    <CampaignProgressBar amount={progressAmount} stops={progressStops} />
  </div>
</GridViewTile>
