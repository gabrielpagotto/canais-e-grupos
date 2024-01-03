<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<svelte:head>
    <title>Canais & Grupos</title>
</svelte:head>

<div class="w-full flex ns-responsive-grid">
    {#each data.chats as chat (chat.id)}
        <a href="/conversas/{chat.id}">
            <div
                class="m-2 rounded bg-white border border-slate-200 hover:border-slate-800 hover:cursor-pointer transition-colors flex flex-col items-center overflow-hidden"
            >
                <img src={chat.iconUrl} alt={chat.title} />
                <h1 class="font-bold text-lg">{chat.title}</h1>
                <button class="bg-slate-800 py-1 m-3 px-4 rounded w-[90%]"
                    >Entrar</button
                >
            </div>
        </a>
    {/each}
</div>
