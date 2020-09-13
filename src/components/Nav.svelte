<script lang="ts">
  import { Header, HeaderNav, HeaderNavItem } from "carbon-components-svelte";
  import { _ } from "svelte-i18n";

  $: getAriaCurrent = (href?: string) =>
    segment === href ? "page" : undefined;

  export let segment: string;

  const routes = [
    "campaigns",
    "mission",
    "composers",
    "shop",
    "feedback",
    "contact",
  ];
</script>

<style>
  .logo {
    height: 100%;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    margin-right: 2rem;
  }

  :global(.bx--header) {
    height: 4rem;
  }
</style>

<Header platformName="">
  <img class="logo" src="logo-dark-192.png" alt="Logo" />
  <HeaderNav>
    <HeaderNavItem
      href="."
      text={$_('routes.home')}
      aria-current={getAriaCurrent()} />

    {#each routes as route}
      <HeaderNavItem
        href={route}
        text={$_(`routes.${route}`)}
        aria-current={getAriaCurrent(route)} />
    {/each}
  </HeaderNav>
</Header>
