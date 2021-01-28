<script lang="ts">
  import { Button } from "carbon-components-svelte";
  import { _ } from "svelte-i18n";

  export let status: number;
  export let error: { message: string; stack: string };
  export let baseUrl: string = "/";

  const dev = process.env.NODE_ENV === "development";
</script>

<svelte:head>
  <title>{status} — Newold Music</title>
</svelte:head>

<h1>{status}</h1>

<div class="details">
  <p>{error.message}</p>

  {#if dev && error.stack}
    <pre>{error.stack}</pre>
  {/if}
</div>

<Button href={baseUrl}>{$_("actions.go back home")}</Button>

<style>
  .details {
    margin-bottom: 1rem;
  }
</style>
