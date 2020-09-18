<script lang="ts">
  import { Button } from "carbon-components-svelte";
  import type { CarbonIcon } from "carbon-icons-svelte";
  import LogoFacebook16 from "carbon-icons-svelte/lib/LogoFacebook16";
  import LogoInstagram16 from "carbon-icons-svelte/lib/LogoInstagram16";
  import LogoTwitter16 from "carbon-icons-svelte/lib/LogoTwitter16";

  interface SocialButton {
    icon: typeof CarbonIcon;
    iconDescription: string;
    href: string;
  }

  const buttons: SocialButton[] = [
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
  {#each buttons as { icon, iconDescription, href }}
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
