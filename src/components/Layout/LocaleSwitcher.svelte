<script lang="ts">
  import { Dropdown } from "carbon-components-svelte";
  import { locale } from "svelte-i18n";

  interface Lang {
    id: string;
    text: string;
  }

  const langs: Lang[] = [
    { id: "ca", text: "Català" },
    { id: "de", text: "Deutsch" },
    { id: "en", text: "English" },
    { id: "es", text: "Español" },
    { id: "fr", text: "Français" },
    { id: "it", text: "Italiano" },
  ];

  $: selectedIndex = langs.findIndex((l) => l.id === $locale.split("-")[0]);

  $: locale.set(langs[selectedIndex].id);
</script>

<Dropdown items={langs} bind:selectedIndex size="sm" />
