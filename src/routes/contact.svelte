<script lang="ts">
  import { Button, Form, FormGroup, TextArea, TextInput } from "carbon-components-svelte";
  import { PageHeader } from "components/Layout";
  import { _ } from "svelte-i18n";
  import { writable } from "svelte/store";

  interface Message {
    name: string;
    email: string;
    message: string;
  }

  const message = writable<Message>({
    name: undefined,
    email: undefined,
    message: undefined,
  });

  const handleSubmit = () => {
    console.log($message);
  }
</script>

<svelte:head>
  <title>{$_('routes.contact')} — Newold Music</title>
</svelte:head>

<PageHeader title={$_('routes.contact')} />

<Form on:submit={handleSubmit}>
  <FormGroup>
    <TextInput labelText={$_('fields.name')} name="name" required />
  </FormGroup>
  <FormGroup>
    <TextInput
      labelText={$_('fields.email')}
      name="email"
      required
      type="email"
    />
  </FormGroup>
  <FormGroup>
    <TextArea labelText={$_('fields.message')} name="message" rows={3} />
  </FormGroup>
  <Button type="submit">{$_('actions.send')}</Button>
</Form>
