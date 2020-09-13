<script>
  import { Button } from "carbon-components-svelte";
  import LogoFacebook16 from "carbon-icons-svelte/lib/LogoFacebook16";
  import LogoInstagram16 from "carbon-icons-svelte/lib/LogoInstagram16";
  import LogoTwitter16 from "carbon-icons-svelte/lib/LogoTwitter16";

  const icons = [
    { icon: LogoFacebook16, iconDescription: "Facebook" },
    { icon: LogoTwitter16, iconDescription: "Twitter" },
    { icon: LogoInstagram16, iconDescription: "Instagram" },
  ];
</script>

<div>
  {#each icons as { icon, iconDescription }}
    <Button
      kind="secondary"
      hasIconOnly
      size="small"
      {icon}
      {iconDescription} />
  {/each}
</div>
