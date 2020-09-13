<script lang="ts">
  export let status: string;
  export let error: { message: string; stack: string };

  const dev = process.env.NODE_ENV === "development";
</script>

<svelte:head>
  <title>Error {status}</title>
</svelte:head>

<h1>{status}</h1>

<p>{error.message}</p>

{#if dev && error.stack}
  <pre>{error.stack}</pre>
{/if}
