<script lang="ts">
  import { Accordion, AccordionItem } from "carbon-components-svelte";
  import { _ } from "svelte-i18n";
  import { faqs } from "./_faqs.json";
</script>

<style>
  h1,
  h2 {
    margin-bottom: 2rem;
  }
</style>

<svelte:head>
  <title>{$_('routes.mission')} — Newold Music</title>
</svelte:head>

<h1>{$_('routes.mission')}</h1>

<h2 id="faq">Preguntes freqüents</h2>

<Accordion>
  {#each faqs as { id, q, a } (id)}
    <AccordionItem title={q}>{a}</AccordionItem>
  {/each}
</Accordion>
