<script lang="ts">
  import Analytics20 from "carbon-icons-svelte/lib/Analytics20";
  import Collaborate20 from "carbon-icons-svelte/lib/Collaborate20";
  import { _, number } from "svelte-i18n";
  import { GridViewTileStat, GridViewTileStats } from "../GridView";

  export let contributorsCount: number = undefined;
  export let progressAmount: number = undefined;
  export let progressGoal: number = undefined;

  export let large = false;
  export let light = false;
</script>

<GridViewTileStats>
  <GridViewTileStat
    icon={Collaborate20}
    label={contributorsCount.toString()}
    detail={$_('terms.contributors', { values: { n: contributorsCount } })}
    {large}
    {light}
  />
  <GridViewTileStat
    icon={Analytics20}
    label={$number(progressAmount / progressGoal, { style: "percent" })}
    {large}
    {light}
  />
  <GridViewTileStat
    label={$number(progressAmount, { format: "EUR-int" })}
    detail="{$_('numerable.of', { values: { n: Math.floor(progressAmount) } })}{$number(progressGoal, { format: 'EUR-int' })}"
    {large}
    {light}
    isHighlighted
  />
</GridViewTileStats>
