<script context="module" lang="ts">
  import { waitLocale } from "svelte-i18n";

  export async function preload() {
    return waitLocale();
  }
</script>

<script lang="ts">
  import { stores } from "@sapper/app";
  import { Content, Loading } from "carbon-components-svelte";
  import { Footer, Nav } from "components/Layout";
  import client from "database/apollo";
  import { onMount } from "svelte";
  import { isLoading as isLoadingLocale } from "svelte-i18n";
  import { derived } from "svelte/store";
  import { setClient } from "svelte-apollo";

  setClient(client);

  const { preloading } = stores();

  const delayedPreloading = derived(preloading, (currentPreloading, set) => {
    setTimeout(() => set(currentPreloading), 250);
  });

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

<style>
  .content {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  :global(.content main) {
    flex: 1;
  }

  :global(hr) {
    height: 0;
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
</style>

{#if $isLoadingLocale || ($preloading && $delayedPreloading)}
  <Loading small />
{/if}

<div class="content">
  <Nav />

  <Content>
    <slot />
  </Content>

  <Footer />
</div>
