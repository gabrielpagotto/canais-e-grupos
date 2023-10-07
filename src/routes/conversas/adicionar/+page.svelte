<script lang="ts">
  import type { ActionData, PageData } from "./$types";

  export let data: PageData;
  export let form: ActionData;
  const title = "Adicionar conversa";
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="w-full flex items-center justify-center h-full">
  <form
    method="post"
    class="flex flex-col justify-center pt-10 bg-white border border-slate-200 w-96 p-4 rounded gap-4"
  >
    <h1 class="pb-4 font-bold text-lg">{title}</h1>
    <label>
      Título
      <input type="text" name="title" id="title" value={form?.title ?? ""} />
    </label>
    <label>
      Detalhes
      <textarea name="details" id="details" />
    </label>
    <label>
      URL do ícone
      <input
        type="url"
        name="iconUrl"
        id="iconUrl"
        value={form?.iconUrl ?? ""}
      />
    </label>
    <label>
      URL de acesso
      <input
        type="url"
        name="accessUrl"
        id="accessUrl"
        value={form?.accessUrl ?? ""}
      />
    </label>
    <label>
      Usuário
      <select name="userId" id="userId">
        {#each data.users as user}
          <option value={user.id}>{user.name}</option>
        {/each}
      </select>
    </label>
    <button class="">Cadastrar</button>
  </form>
</div>
