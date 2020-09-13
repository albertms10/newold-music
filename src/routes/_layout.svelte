<script context="module">
  import { waitLocale } from "svelte-i18n";

  export async function preload() {
    return waitLocale();
  }
</script>

<script lang="ts">
  import { onMount } from "svelte";
  import { Content } from "carbon-components-svelte";
  import Nav from "../components/Nav.svelte";

  export let segment: string;

  onMount(() => {
    const usesDarkMode =
      window.matchMedia("(prefers-color-scheme: dark)").matches || false;
    const favicon = document.getElementById("favicon");
    const manifest = document.getElementById("manifest");

    const switchIcon = (usesDarkMode: boolean) => {
      if (usesDarkMode) {
        favicon.href = "favicon-dark.png";
        manifest.href = "manifest-dark.json";
      } else {
        favicon.href = "favicon-light.png";
        manifest.href = "manifest-light.json";
      }
    };

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e: Event) => switchIcon(e.matches));

    switchIcon(usesDarkMode);
  });
</script>

<Nav {segment} />

<Content>
  <slot />
</Content>
