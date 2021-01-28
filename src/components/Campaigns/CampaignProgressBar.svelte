<script lang="ts">
  import { TooltipDefinition } from "carbon-components-svelte";
  import { number } from "svelte-i18n";
  import { cubicOut } from "svelte/easing";
  import { tweened } from "svelte/motion";
  import { gcd } from "utils/math";

  export let amount: number = undefined;
  export let stops: number[] = [];
  export let isSmall = false;

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

<div class="progress">
  {#if stops.length > 1}
    <div class="stops">
      {#each stops as stop, index}
        <div style="flex: {weights[index] / weightsGCD}">
          {$number(stop, { format: "EUR-int" })}
        </div>
      {/each}
    </div>
  {/if}
  <div
    class="progress-bar"
    class:isSmall
    on:click|preventDefault
    style="--progress-width: {$width * 100}%"
  >
    <TooltipDefinition
      direction="top"
      tooltipText={$number(amount, { format: "EUR-int" })}
    >
      <div class="bar" class:isSmall />
    </TooltipDefinition>
  </div>
</div>

<style>
  .progress {
    margin-top: 0.5rem;
  }

  .stops {
    display: flex;
  }

  .stops div {
    margin-left: -0.5rem;
    padding-right: 0.5rem;
    text-align: right;
    border-right: 1px solid #c5c5c5;
  }

  .progress-bar {
    height: 1rem;
    margin-top: 0.5rem;
    background-color: #eee;
  }

  .progress-bar .bar {
    width: 100%;
    height: 1rem;
    background-color: #4589ff;
  }

  .progress-bar.isSmall,
  .progress-bar .bar.isSmall {
    height: 0.4rem;
  }

  :global(.progress-bar .bx--tooltip--definition) {
    width: var(--progress-width);
  }

  :global(.progress-bar .bx--tooltip__trigger) {
    width: 100%;
    border-bottom: none;
  }
</style>
