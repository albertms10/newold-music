<script lang="ts">
  import ProgressBar from "@okrad/svelte-progressbar";
  import { number } from "svelte-i18n";
  import { gcd } from "utils/math";

  export let amount: number;
  export let stops: number[];

  $: hasProgress = typeof window !== "undefined" && amount && stops.length > 0;

  const maxStop = stops[stops.length - 1];
  let progress: number;

  $: if (hasProgress) progress = Math.round((amount / maxStop) * 100);

  const weights = stops.map((stop, index) =>
    index > 0 ? stop - stops[index - 1] : stop
  );

  const weightsGCD = gcd(...weights);

  const colors = ["#4589ff", "#008000"];

  const thresholds = stops.map((stop, index) => ({
    till: (stop / maxStop) * 100,
    color: colors[index > colors.length ? colors[colors.length - 1] : index],
  }));
</script>

<style>
  .progress {
    margin-top: 0.5rem;
  }

  .stops {
    display: flex;
  }

  .stops div {
    text-align: right;
    border-right: 1px solid #e5e5e5;
    padding-right: 0.5rem;
    margin-right: 4px;
    margin-left: calc(-4px - 0.5rem);
  }

  :global(.progressbar) {
    position: relative;
  }
</style>

<div class="progress">
  <div class="stops">
    {#each stops as stop, index}
      <div style={`flex: ${weights[index] / weightsGCD}`}>
        {$number(stop, { format: 'EUR-int' })}
      </div>
    {/each}
  </div>
  {#if hasProgress}
    <ProgressBar
      style="thin"
      width="100%"
      valueLabel=" "
      series={[progress]}
      {thresholds} />
  {/if}
</div>
