<script lang="ts">
  import {
    Column,
    Form,
    FormGroup,
    Grid,
    Modal,
    RadioTile,
    Row,
    TextArea,
    TextInput,
    TileGroup,
    ToastNotification,
  } from "carbon-components-svelte";
  import { writable } from "svelte/store";
  import { fly } from "svelte/transition";

  export let open = false;

  let notificationShown = false;

  $: if (notificationShown) {
    setTimeout(() => (notificationShown = false), 4000);
  }

  interface Proposal {
    user: {
      name: string;
      email: string;
    };
    title: string;
    description: string;
    instrumentation: string;
  }

  const proposal = writable<Proposal>({
    user: {
      name: undefined,
      email: undefined,
    },
    title: undefined,
    description: undefined,
    instrumentation: undefined,
  });

  $: instrumentationOptions = [
    { value: "1", label: "Solo" },
    { value: "2", label: "Solo + Piano" },
    { value: "3", label: "Duo" },
  ];

  const handleSubmit = () => {
    console.log($proposal);

    notificationShown = true;
    open = false;
  };
</script>

{#if notificationShown}
  <div class="notification" in:fly={{ x: 200, duration: 500 }} out:fly>
    <ToastNotification
      notificationType="inline"
      kind="success"
      title="Proposal sent successfully"
      hideCloseButton
    />
  </div>
{/if}

<Modal
  bind:open
  hasForm
  hasScrollingContent
  modalAriaLabel="Campaigns"
  modalHeading="Proposta de campanya"
  modalLabel="Campaigns"
  on:click:button--secondary={() => (open = false)}
  on:close
  on:open
  on:submit={handleSubmit}
  primaryButtonText="Enviar"
  secondaryButtonText="Tancar"
  shouldSubmitOnEnter={false}
>
  <Form>
    <hr />
    <FormGroup legendText="Person">
      <Grid noGutter>
        <Row>
          <Column>
            <TextInput
              bind:value={$proposal.user.name}
              labelText="Name"
              name="name"
              required
            />
          </Column>
          <Column>
            <TextInput
              bind:value={$proposal.user.email}
              labelText="Email"
              name="email"
              required
            />
          </Column>
        </Row>
      </Grid>
    </FormGroup>

    <hr />
    <FormGroup legendText="Campaign">
      <TextInput
        bind:value={$proposal.title}
        labelText="Title"
        name="title"
        required
      />
    </FormGroup>
    <FormGroup>
      <TextArea
        bind:value={$proposal.description}
        labelText="Description"
        name="description"
      />
    </FormGroup>

    <div class="inline-radio">
      <TileGroup
        bind:selected={$proposal.instrumentation}
        legend="Instrumentation"
      >
        {#each instrumentationOptions as { value, label }}
          <RadioTile {value}>{label}</RadioTile>
        {/each}
      </TileGroup>
    </div>
  </Form>
</Modal>

<style>
  .notification {
    --notification-margin: 2rem;
    position: absolute;
    top: var(--notification-margin);
    right: var(--notification-margin);
    max-width: calc(100vw - (calc(var(--notification-margin) * 2)));
  }

  @media (max-width: 425px) {
    .notification {
      --notification-margin: 1rem;
    }
  }

  :global(.notification .bx--toast-notification) {
    max-width: 16rem;
  }

  :global(.bx--tile-group) {
    position: relative;
  }

  :global(.inline-radio .bx--tile-group div) {
    display: flex;
    flex-wrap: wrap;
  }

  :global(.inline-radio .bx--tile-group div label) {
    flex: 1;
  }

  :global(.bx--modal-container) {
    position: relative;
    top: calc(-4rem / 2);
    height: calc(90% - 4rem);
  }
</style>
