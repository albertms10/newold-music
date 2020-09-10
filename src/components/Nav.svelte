<script lang="ts">
  import {
    Header,
    HeaderNav,
    HeaderNavItem,
    HeaderNavMenu,
  } from "carbon-components-svelte";

  $: getAriaCurrent = (href?: string) =>
    segment === href ? "page" : undefined;

  export let segment;
</script>

<Header platformName="Newold Music">
  <HeaderNav>
    <HeaderNavItem href="." text="Home" aria-current={getAriaCurrent()} />
    <HeaderNavItem
      href="projects"
      text="Projects"
      aria-current={getAriaCurrent('projects')} />
    <HeaderNavItem
      href="shop"
      text="Shop"
      aria-current={getAriaCurrent('shop')} />
  </HeaderNav>
</Header>
