<script lang="ts">
  import { Button } from "carbon-components-svelte";
  import type { CarbonIcon } from "carbon-icons-svelte";
  import LogoFacebook16 from "carbon-icons-svelte/lib/LogoFacebook16";
  import LogoInstagram16 from "carbon-icons-svelte/lib/LogoInstagram16";
  import LogoTwitter16 from "carbon-icons-svelte/lib/LogoTwitter16";

  interface Icon {
    icon: typeof CarbonIcon;
    iconDescription: string;
    href: string;
  }

  const icons: Icon[] = [
    {
      icon: LogoFacebook16,
      iconDescription: "Facebook",
      href: "https://facebook.com",
    },
    {
      icon: LogoTwitter16,
      iconDescription: "Twitter",
      href: "https://twitter.com",
    },
    {
      icon: LogoInstagram16,
      iconDescription: "Instagram",
      href: "https://instagram.com",
    },
  ];
</script>

<div>
  {#each icons as { icon, iconDescription, href }}
    <Button
      kind="secondary"
      size="small"
      tooltipPosition="bottom"
      hasIconOnly
      {icon}
      {iconDescription}
      {href} />
  {/each}
</div>
