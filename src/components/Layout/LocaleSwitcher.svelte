<script lang="ts">
  import { Dropdown } from "carbon-components-svelte";
  import dayjs from "dayjs";
  import "dayjs/locale/ca";
  import "dayjs/locale/de";
  import "dayjs/locale/en";
  import "dayjs/locale/es";
  import "dayjs/locale/fr";
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
  ];

  $: selectedIndex = langs.findIndex((l) => l.id === $locale.split("-")[0]);

  $: {
    const selectedLocale = langs[selectedIndex].id;
    locale.set(selectedLocale);
    dayjs.locale(selectedLocale);
  }
</script>

<Dropdown bind:selectedIndex items={langs} size="sm" />
