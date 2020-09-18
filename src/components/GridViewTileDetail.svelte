<script lang="ts">
  import type { CarbonIcon } from "carbon-icons-svelte";

  export let icon: typeof CarbonIcon = undefined;
  export let label: string = undefined;
</script>

<style>
  p {
    display: flex;
    align-items: center;
  }

  p span {
    margin-left: 0.5rem;
  }
</style>

<p>
  <svelte:component this={icon} />
  <span>{label}</span>
</p>
