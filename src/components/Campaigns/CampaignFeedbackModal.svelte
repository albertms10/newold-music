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
  } from "carbon-components-svelte";

  export let open = false;

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
  }

  :global(.inline-radio .bx--tile-group div label) {
    flex: 1;
  }
</style>

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
  on:submit={(e) => {
    console.log('modal', e);
  }}
>
  <Form>
    <hr />
    <FormGroup legendText="Person">
      <Grid noGutter>
        <Row>
          <Column>
            <TextInput name="name" labelText="Name" required />
          </Column>
          <Column>
            <TextInput name="email" labelText="Email" required />
          </Column>
        </Row>
      </Grid>
    </FormGroup>

    <hr />
    <FormGroup legendText="Campaign">
      <TextInput name="title" labelText="Title" required />
    </FormGroup>
    <FormGroup>
      <TextArea name="description" labelText="Description" />
    </FormGroup>

    <div class="inline-radio">
      <TileGroup legend="Instrumentation">
        {#each instrumentationOptions as { value, label }}
          <RadioTile {value}>{label}</RadioTile>
        {/each}
      </TileGroup>
    </div>
  </Form>
</Modal>
