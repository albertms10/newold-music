<script lang="ts">
  import { number } from "svelte-i18n";
  import { cubicOut } from "svelte/easing";
  import { tweened } from "svelte/motion";
  import { gcd } from "utils/math";

  export let amount: number;
  export let stops: number[];
  export let isSmall: boolean = false;

  const maxStop = stops[stops.length - 1];
  const progress = amount / maxStop;

  const weights = stops.map((stop, index) =>
    index > 0 ? stop - stops[index - 1] : stop
  );

  const weightsGCD = gcd(...weights);

  const width = tweened(0, {
    duration: (from, to) => (to - from) * 1000,
    easing: cubicOut,
  });

  width.set(progress);
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
    border-right: 1px solid #c5c5c5;
    padding-right: 0.5rem;
    margin-left: -0.5rem;
  }

  .progress-bar {
    background-color: #eee;
    margin-top: 0.5rem;
  }

  .progress-bar .bar {
    height: 100%;
    background-color: #4589ff;
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
  <div class="progress-bar" style={`height: ${isSmall ? 0.4 : 1}rem`}>
    <div class="bar" style={`width: ${$width * 100}%`} />
  </div>
</div>
