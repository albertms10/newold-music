<script lang="ts">
  import { _ } from "svelte-i18n";
  import { truncateString } from "utils/strings";
  import { GridViewTile } from "../GridView";
  import CampaignProgressBar from "./CampaignProgressBar.svelte";
  import CampaignStats from "./CampaignStats.svelte";

  export let id: number;
  export let title: string = undefined;
  export let description: string = undefined;
  export let avatarUrl: string = undefined;

  export let contributorsCount: number = undefined;

  export let progressAmount: number = undefined;
  export let progressGoal: number = undefined;
</script>

<style>
  .stats {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
</style>

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
    <div class="stats">
      <CampaignStats {contributorsCount} {progressAmount} {progressGoal} />
    </div>

    <CampaignProgressBar amount={progressAmount} stops={[progressGoal]} />
  </div>
</GridViewTile>
