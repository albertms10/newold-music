<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { Dropdown } from "carbon-components-svelte";
  import { getCookie } from "../modules/cookie";
  import { startClient } from "../services/i18n";

  interface Lang {
    id: string;
    text: string;
  }

  const langs: Lang[] = [
    { id: "ca-ES", text: "Català" },
    { id: "en", text: "English" },
  ];

  export let locale: Lang["id"] = getCookie("locale");

  $: selectedIndex = langs.findIndex((l) => l.id === locale);

  const dispatch = createEventDispatcher();

  $: {
    dispatch("locale-changed", langs[selectedIndex]);
    startClient();
  }
</script>

<Dropdown items={langs} bind:selectedIndex />
