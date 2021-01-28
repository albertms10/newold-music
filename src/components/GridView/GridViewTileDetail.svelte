<svelte:options immutable />

<script lang="ts">
  import type { CarbonIcon } from "carbon-icons-svelte";

  export let icon: typeof CarbonIcon = undefined;
  export let label: string = undefined;
</script>

<p>
  <svelte:component this={icon} />
  <span>{label}</span>
</p>

<style>
  p {
    display: flex;
    align-items: center;
  }

  p span {
    margin-left: 0.5rem;
  }
</style>
