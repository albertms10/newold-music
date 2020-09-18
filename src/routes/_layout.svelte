<script context="module">
  import { waitLocale } from "svelte-i18n";

  export async function preload() {
    return waitLocale();
  }
</script>

<script lang="ts">
  import { stores } from "@sapper/app";
  import { Content, Loading } from "carbon-components-svelte";
  import Nav from "components/Layout/Nav.svelte";
  import { onMount } from "svelte";
  import { isLoading as isLoadingLocale } from "svelte-i18n";
  import { derived } from "svelte/store";

  const { preloading } = stores();

  const delayedPreloading = derived(preloading, (currentPreloading, set) => {
    setTimeout(() => set(currentPreloading), 250);
  });

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
      window.location.href = "/newold-music/oi-oi-oi";
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

{#if $isLoadingLocale || ($preloading && $delayedPreloading)}
  <Loading small />
{/if}

<Nav {segment} />

<Content>
  <slot />
</Content>
