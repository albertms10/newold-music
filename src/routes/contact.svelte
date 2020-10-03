<script lang="ts">
  import {
    Button,
    Form,
    FormGroup,
    TextArea,
    TextInput,
  } from "carbon-components-svelte";
  import { _ } from "svelte-i18n";
  import { getFormData } from "utils/misc";

  const handleSubmit = (e: Event) => {
    const data = getFormData(e.target as HTMLFormElement);
  };
</script>

<style>
  h1 {
    margin-bottom: 2rem;
  }
</style>

<svelte:head>
  <title>{$_('routes.contact')} — Newold Music</title>
</svelte:head>

<h1>{$_('routes.contact')}</h1>

<Form on:submit={handleSubmit}>
  <FormGroup>
    <TextInput name="name" labelText={$_('fields.name')} required />
  </FormGroup>
  <FormGroup>
    <TextInput
      name="email"
      type="email"
      labelText={$_('fields.email')}
      required
    />
  </FormGroup>
  <FormGroup>
    <TextArea name="message" rows={3} labelText={$_('fields.message')} />
  </FormGroup>
  <Button type="submit">{$_('actions.send')}</Button>
</Form>
