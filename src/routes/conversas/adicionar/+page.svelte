<script lang="ts">
    import type { ActionData, PageData } from "./$types";

    export let data: PageData;
    export let form: ActionData;

    const title = "Adicionar conversa";
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<div class="flex h-full w-full items-center justify-center">
    <form method="post" class="flex w-96 flex-col justify-center gap-4 rounded border border-slate-200 bg-white p-4 pt-10">
        <h1 class="pb-4 text-lg font-bold">{title}</h1>
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
            <input type="url" name="iconUrl" id="iconUrl" value={form?.iconUrl ?? ""} />
        </label>
        <label>
            URL de acesso
            <input type="url" name="accessUrl" id="accessUrl" value={form?.accessUrl ?? ""} />
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
