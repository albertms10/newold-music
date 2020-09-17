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

    window.onunhandledrejection = (e: PromiseRejectionEvent) => {
      console.log("Unhandled rejection", e);
      window.location.href = "/oi-oi-oi";
    };
  });
</script>

<style>
  :global(hr) {
    border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
</style>

<Loading small bind:active={$isLoading} />

<Nav {segment} />

<Content>
  <slot />
</Content>
