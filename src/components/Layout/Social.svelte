<script lang="ts">
  import { Button, ClickableTile } from "carbon-components-svelte";
  import type { CarbonIcon } from "carbon-icons-svelte";
  import LogoFacebook32 from "carbon-icons-svelte/lib/LogoFacebook32";
  import LogoInstagram32 from "carbon-icons-svelte/lib/LogoInstagram32";
  import LogoTwitter32 from "carbon-icons-svelte/lib/LogoTwitter32";

  export let isSmall = false;

  interface SocialButton {
    icon: typeof CarbonIcon;
    iconDescription: string;
    color: string;
    href: string;
  }

  const buttons: SocialButton[] = [
    {
      icon: LogoFacebook32,
      iconDescription: "Facebook",
      color: "#3b5998",
      href: "https://facebook.com",
    },
    {
      icon: LogoTwitter32,
      iconDescription: "Twitter",
      color: "#00acee",
      href: "https://twitter.com",
    },
    {
      icon: LogoInstagram32,
      iconDescription: "Instagram",
      color: "#3f729b",
      href: "https://instagram.com",
    },
  ];
</script>

<style>
  .buttons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .content p {
    color: #777;
  }

  :global(.instagram.icon svg *) {
    fill: url(#ig);
  }
</style>

{#if isSmall}
  <div>
    {#each buttons as { icon, iconDescription, href }}
      <Button
        kind="secondary"
        size="small"
        tooltipPosition="bottom"
        hasIconOnly
        {icon}
        {iconDescription}
        {href}
      />
    {/each}
  </div>
{:else}
  <div class="buttons">
    {#each buttons as { icon, iconDescription, color, href }}
      <ClickableTile {href} light>
        <div class="content">
          {#if iconDescription === 'Instagram'}
            <svg width="0" height="0">
              <radialGradient id="ig" r="150%" cx="30%" cy="107%">
                <stop stop-color="#fdf497" offset="0" />
                <stop stop-color="#fdf497" offset="0.05" />
                <stop stop-color="#fd5949" offset="0.45" />
                <stop stop-color="#d6249f" offset="0.6" />
                <stop stop-color="#285aeb" offset="0.9" />
              </radialGradient>
            </svg>
          {/if}
          <div class="icon" class:instagram={iconDescription === 'Instagram'}>
            <svelte:component
              this={icon}
              style={iconDescription !== 'Instagram' ? `color: ${color}` : undefined}
            />
          </div>
          <p>{iconDescription}</p>
        </div>
      </ClickableTile>
    {/each}
  </div>
{/if}
