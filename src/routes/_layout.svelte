<script lang="ts">
  import Nav from "../components/Nav.svelte";
  import { Content } from "carbon-components-svelte";

  export let segment;
</script>

<Nav {segment} />

<Content>
  <slot />
</Content>
