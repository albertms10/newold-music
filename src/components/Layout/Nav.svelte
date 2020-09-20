<script lang="ts">
  import {
    Header,
    HeaderNav,
    HeaderNavItem,
    SideNav,
    SideNavItems,
    SideNavLink,
  } from "carbon-components-svelte";
  import { _ } from "svelte-i18n";
  import LocaleSwitcher from "./LocaleSwitcher.svelte";
  import Social from "./Social.svelte";

  export let segment: string;

  $: getAriaCurrent = (href?: string) =>
    segment === href ? "page" : undefined;

  let isSideNavOpen: boolean;

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
  .actions {
    width: 100%;
    padding-right: 1rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .social {
    margin-right: 1rem;
  }

  .locale-switcher {
    width: 8rem;
  }

  :global(.bx--header__name) {
    margin-left: 1rem;
    padding-right: 0 !important;
    width: 18rem;
  }
</style>

<Header
  platformName="Newold Music"
  href="."
  uiShellAriaLabel="Main"
  expandedByDefault={false}
  bind:isSideNavOpen>
  <SideNav fixed bind:isOpen={isSideNavOpen} ariaLabel="Main">
    <SideNavItems>
      {#each routes as route}
        <SideNavLink
          href={route}
          text={$_(`routes.${route}`)}
          aria-current={getAriaCurrent(route)}
          on:click={() => (isSideNavOpen = !isSideNavOpen)} />
      {/each}
    </SideNavItems>
  </SideNav>

  <HeaderNav ariaLabel="Main">
    {#each routes as route}
      <HeaderNavItem
        href={route}
        text={$_(`routes.${route}`)}
        aria-current={getAriaCurrent(route)} />
    {/each}
  </HeaderNav>

  <div class="actions">
    <div class="social">
      <Social />
    </div>
    <div class="locale-switcher">
      <LocaleSwitcher />
    </div>
  </div>
</Header>