<script context="module">
  import { waitLocale } from "svelte-i18n";

  export async function preload() {
    return waitLocale();
  }
</script>

<script lang="ts">
  import { onMount } from "svelte";
  import { Content, Loading } from "carbon-components-svelte";
  import { isLoading } from "svelte-i18n";
  import Nav from "../components/Nav.svelte";

  export let segment: string;

  onMount(() => {
    const usesDarkMode =
      window.matchMedia("(prefers-color-scheme: dark)").matches || false;

    const favicon = document.getElementById("favicon") as HTMLBaseElement;
    const manifest = document.getElementById("manifest") as HTMLBaseElement;

    const switchIcon = (usesDarkMode: boolean) => {
      favicon.href = `favicon-${usesDarkMode ? "dark" : "light"}.png`;
      manifest.href = `manifest-${usesDarkMode ? "dark" : "light"}.json`;
    };

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => switchIcon(e.matches));

    switchIcon(usesDarkMode);
  });
</script>

{#if $isLoading}
  <Loading />
{:else}
  <Nav {segment} />

  <Content>
    <slot />
  </Content>
{/if}
