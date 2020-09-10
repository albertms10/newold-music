<script lang="ts">
  import {
    Header,
    HeaderNav,
    HeaderNavItem,
    HeaderNavMenu,
  } from "carbon-components-svelte";

  export let segment;
</script>

<Header platformName="Newold Music">
  <HeaderNav>
    <HeaderNavItem
      href="."
      text="Home"
      aria-current={segment === undefined ? 'page' : undefined} />

    <HeaderNavItem
      href="about"
      text="About"
      aria-current={segment === 'about' ? 'page' : undefined} />
  </HeaderNav>
</Header>
