<script lang="ts">
  import Analytics20 from "carbon-icons-svelte/lib/Analytics20";
  import Collaborate20 from "carbon-icons-svelte/lib/Collaborate20";
  import { number, _ } from "svelte-i18n";
  import { truncateString } from "utils/strings";
  import {
    GridViewTile,
    GridViewTileStat,
    GridViewTileStats,
  } from "../GridView";
  import CampaignProgressBar from "./CampaignProgressBar.svelte";

  export let id: number;
  export let title: string = undefined;
  export let description: string = undefined;
  export let avatarUrl: string = undefined;

  export let contributorsCount: number = undefined;

  export let progressAmount: number = undefined;
  export let progressGoal: number = undefined;
</script>

<GridViewTile
  {title}
  {avatarUrl}
  meta={truncateString(description, 82)}
  href="campaigns/{id}"
  aspectRatio="16x9"
  sm={4}
  md={8}
  lg={8}
  hideDetailLine
>
  <div slot="details">
    <GridViewTileStats>
      <GridViewTileStat
        icon={Collaborate20}
        label={contributorsCount.toString()}
        detail={$_('terms.contributors', { values: { n: contributorsCount } })}
      />
      <GridViewTileStat
        icon={Analytics20}
        label={$number(progressAmount / progressGoal, { style: "percent" })}
      />
      <GridViewTileStat
        label={$number(progressAmount, { format: "EUR-int" })}
        detail="{$_('numerable.of', { values: { n: Math.floor(progressAmount) } })}{$number(progressGoal, { format: "EUR-int" })}"
        isHighlighted
      />
    </GridViewTileStats>
    <CampaignProgressBar amount={progressAmount} stops={[progressGoal]} />
  </div>
</GridViewTile>
