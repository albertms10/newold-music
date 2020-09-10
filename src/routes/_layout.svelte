<script lang="ts">
  import Nav from "../components/Nav.svelte";
  import { Content } from "carbon-components-svelte";

  export let segment;
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/carbon-components/css/carbon-components.min.css" />
</svelte:head>

<Nav {segment} />

<Content>
  <slot />
</Content>
