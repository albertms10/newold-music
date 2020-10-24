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

  export let open = false;
  let notificationShown = false;

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
</script>

<style>
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

{#if notificationShown}
  <ToastNotification
    notificationType="inline"
    kind="success"
    title="Proposal sent successfully"
  />
{/if}

<Modal
  bind:open
  modalLabel="Campaigns"
  modalAriaLabel="Campaigns"
  modalHeading="Proposta de campanya"
  primaryButtonText="Enviar"
  secondaryButtonText="Tancar"
  shouldSubmitOnEnter={false}
  hasScrollingContent
  hasForm
  on:click:button--secondary={() => (open = false)}
  on:open
  on:close
  on:submit={() => {
    console.log($proposal);

    notificationShown = true;
    open = false;
  }}
>
  <Form>
    <hr />
    <FormGroup legendText="Person">
      <Grid noGutter>
        <Row>
          <Column>
            <TextInput
              name="name"
              labelText="Name"
              bind:value={$proposal.user.name}
              required
            />
          </Column>
          <Column>
            <TextInput
              name="email"
              labelText="Email"
              bind:value={$proposal.user.email}
              required
            />
          </Column>
        </Row>
      </Grid>
    </FormGroup>

    <hr />
    <FormGroup legendText="Campaign">
      <TextInput
        name="title"
        labelText="Title"
        bind:value={$proposal.title}
        required
      />
    </FormGroup>
    <FormGroup>
      <TextArea
        name="description"
        labelText="Description"
        bind:value={$proposal.description}
      />
    </FormGroup>

    <div class="inline-radio">
      <TileGroup
        legend="Instrumentation"
        bind:selected={$proposal.instrumentation}
      >
        {#each instrumentationOptions as { value, label }}
          <RadioTile {value}>{label}</RadioTile>
        {/each}
      </TileGroup>
    </div>
  </Form>
</Modal>
