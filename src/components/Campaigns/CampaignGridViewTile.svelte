<script lang="ts">
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

<GridViewTile
  aspectRatio="16x9"
  {avatarUrl}
  hideDetailLine
  href="campaigns/{id}"
  lg={8}
  md={8}
  meta={truncateString(description, 82)}
  sm={4}
  {title}
>
  <div slot="details">
    <div class="stats">
      <CampaignStats {contributorsCount} {progressAmount} {progressGoal} />
    </div>

    <CampaignProgressBar amount={progressAmount} stops={[progressGoal]} />
  </div>
</GridViewTile>

<style>
  .stats {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
</style>
