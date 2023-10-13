<script lang="ts">
  import FormContainer from "$lib/components/form-container.svelte";
  import PrimaryButton from "$lib/components/primary-button.svelte";
  import TextBox from "$lib/components/text-box.svelte";
  import type { ActionData } from "./$types";

  export let form: ActionData;

  let title = "Cadastrar-se";
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<form class="h-full flex items-center justify-center pt-10" method="POST">
  <FormContainer {title}>
    <TextBox
      label="Nome"
      name="name"
      value={form?.fields?.name}
      error={form?.errors?.name}
    />
    <TextBox
      label="Email"
      type="email"
      name="email"
      value={form?.fields?.email}
      error={form?.errors?.email}
    />
    <TextBox
      label="Senha"
      type="password"
      name="password"
      value={form?.fields?.password}
      error={form?.errors?.password}
    />
    <TextBox
      label="Confirmação de senha"
      type="password"
      name="password_confirmation"
      value={form?.fields?.passwordConfirmation}
      error={form?.errors?.passwordConfirmation}
    />
    <PrimaryButton type="submit">
      <i class="fa-solid fa-right-to-bracket" />
      <p>Continuar</p>
    </PrimaryButton>
  </FormContainer>
</form>
