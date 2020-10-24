<script lang="ts">
  import { goto, stores } from "@sapper/app";
  import { Search } from "carbon-components-svelte";
  import { _ } from "svelte-i18n";

  const { page } = stores();

  export let value: string = undefined;
  export let hideInput = false;

  export let numerableName: string = "items";
  export let count: number = 0;
  export let filteredCount: number = 0;

  $: countText = $_(`numerable.${numerableName}`, {
    values: { n: filteredCount },
  });

  $: numerableTerm = $_(`terms.${numerableName}`, {
    values: { n: count },
  });

  $: filteredCountText = $_("numerable.showing start", {
    values: { n: filteredCount, t: count },
  });

  if ($page.query.search !== undefined) value = $page.query.search;

  const onChange = (e: InputEvent) => {
    const search = (e.target as HTMLInputElement).value;
    goto(`.${$page.path}${search ? `?search=${search}` : ""}`);
  };
</script>

<style>
  hr {
    margin-bottom: 2rem;
  }

  .count {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    text-align: right;
    color: #777;
  }
</style>

{#if !hideInput}
  <Search
    placeholder={$_('actions.search')}
    size="lg"
    light
    autofocus
    autocomplete="on"
    bind:value
    on:change={onChange}
  />

  <p class="count">
    {#if filteredCount < count}
      {filteredCountText}
      {numerableTerm}
    {:else}{countText}{/if}
  </p>
{:else}
  <hr />
{/if}

<slot {countText} />
