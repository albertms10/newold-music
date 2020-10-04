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

  let winWidth = undefined;
  let isSideNavOpen: boolean;

  const routes = [
    "campaigns",
    "mission",
    "composers",
    "shop",
    "contact",
  ];
</script>

<style>
  .platform {
    display: flex;
    height: 100%;
    align-items: center;
  }

  .platform img {
    height: 71%;
    margin-right: 0.5rem;
  }

  .actions {
    width: 100%;
    padding-right: 1rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
  }

  .social {
    margin-right: 1rem;
  }

  .locale-switcher.nav {
    width: 8rem;
  }

  .locale-switcher.side {
    padding: 1rem;
  }

  :global(.bx--header) {
    height: 4rem !important;
  }

  :global(.bx--header ~ .bx--content) {
    margin-top: 4rem !important;
  }

  :global(.bx--side-nav__overlay) {
    top: 4rem !important;
  }

  :global(.bx--header__action) {
    height: 4rem !important;
  }

  :global(.bx--side-nav--ux) {
    top: 4rem !important;
  }
</style>

<svelte:window bind:innerWidth={winWidth} />

<Header
  href="."
  uiShellAriaLabel="Main"
  expandedByDefault={false}
  bind:isSideNavOpen
>
  <div class="platform" slot="platform">
    <img src="logo-dark-192.png" alt="Logo" />
    {#if winWidth > 378}
      <div>Newold Music</div>
    {/if}
  </div>
  {#if winWidth < 1056}
    <SideNav fixed bind:isOpen={isSideNavOpen} ariaLabel="Main">
      <SideNavItems>
        {#each routes as route}
          <SideNavLink
            href={route}
            text={$_(`routes.${route}`)}
            aria-current={getAriaCurrent(route)}
            on:click={() => (isSideNavOpen = !isSideNavOpen)}
          />
        {/each}
        <div class="locale-switcher side">
          <LocaleSwitcher />
        </div>
      </SideNavItems>
    </SideNav>
  {:else}
    <HeaderNav ariaLabel="Main">
      {#each routes as route}
        <HeaderNavItem
          href={route}
          text={$_(`routes.${route}`)}
          aria-current={getAriaCurrent(route)}
        />
      {/each}
    </HeaderNav>
  {/if}

  <div class="actions">
    <div class="social">
      <Social isSmall />
    </div>
    {#if winWidth >= 1056}
      <div class="locale-switcher nav">
        <LocaleSwitcher />
      </div>
    {/if}
  </div>
</Header>
