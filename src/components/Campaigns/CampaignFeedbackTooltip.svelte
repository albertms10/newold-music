<script lang="ts">
  import { Button, Link, Tooltip } from "carbon-components-svelte";
  import CampaignFeedbackModal from "./CampaignFeedbackModal.svelte";

  let tooltipOpen = false;
  let modalOpen = false;
</script>

<Tooltip bind:open={tooltipOpen} triggerText="Vols iniciar una campanya?">
  <p>Envia’ns les teves propostes i ens posarem en contacte amb tu.</p>
  <div class="bx--tooltip__footer">
    <Link href="mission#how-campaigns-work">Llegeix-ne més</Link>
    <Button
      on:click={() => {
        tooltipOpen = false;
        modalOpen = true;
      }}
      size="small"
    >Enviar proposta</Button>
  </div>
</Tooltip>

<CampaignFeedbackModal bind:open={modalOpen} />
