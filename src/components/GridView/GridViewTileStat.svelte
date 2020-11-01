<script lang="ts">
  import type { CarbonIcon } from "carbon-icons-svelte";

  export let icon: typeof CarbonIcon = undefined;
  export let label: string = undefined;
  export let detail: string = undefined;

  export let large = false;
  export let light = false;
  export let isHighlighted = false;
</script>

<style>
  .stat {
    display: flex;
    align-items: center;
    min-width: 9rem;
    justify-content: center;
  }

  @media (max-width: 425px) {
    .stat {
      margin-bottom: 1rem;
      justify-content: left;
      width: 100%;
    }
  }

  .stat .data {
    margin-left: 0.5rem;
    display: flex;
    flex-direction: column;
  }

  .label {
    font-size: 1.5rem;
    color: #000;
  }

  .large .label {
    font-size: 2rem;
  }

  .large .detail {
    font-size: 1.25rem;
  }

  .light .label,
  .light .detail {
    color: #fff;
  }

  .isHighlighted {
    color: #4589ff;
    font-weight: bold;
  }

  :global(.stat .bx--tooltip__trigger.bx--tooltip__trigger--definition) {
    border-bottom: none;
  }
</style>

<svelte:options immutable />

<div class="stat">
  <svelte:component this={icon} />
  <div class="data" class:large class:light>
    <span class="label" class:isHighlighted>{label}</span>
    {#if detail}
      <span class="detail">{detail}</span>
    {/if}
  </div>
</div>
