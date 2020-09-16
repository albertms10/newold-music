<script lang="ts">
  import { Button } from "carbon-components-svelte";
  import { _ } from "svelte-i18n";

  export let status: string;
  export let error: { message: string; stack: string };

  const dev = process.env.NODE_ENV === "development";
</script>

<style>
  .details {
    margin-bottom: 1rem;
  }
</style>

<svelte:head>
  <title>Error {status}</title>
</svelte:head>

<h1>{status}</h1>

<div class="details">
  <p>{error.message}</p>

  {#if dev && error.stack}
    <pre>{error.stack}</pre>
  {/if}
</div>

<Button href="/newold-music">{$_('actions.go back home')}</Button>
