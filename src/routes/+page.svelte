<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<svelte:head>
    <title>Canais & Grupos</title>
</svelte:head>

<div class="ns-responsive-grid flex w-full">
    {#each data.chats as chat (chat.id)}
        <a href="/conversas/{chat.id}">
            <div class="m-2 flex flex-col items-center overflow-hidden rounded border border-slate-200 bg-white transition-colors hover:cursor-pointer hover:border-slate-800">
                <img src={chat.iconUrl} alt={chat.title} />
                <h1 class="text-lg font-bold">{chat.title}</h1>
                <button class="m-3 w-[90%] rounded bg-slate-800 px-4 py-1">Entrar</button>
            </div>
        </a>
    {/each}
</div>
