<script lang="ts">
    import "../app.css";
</script>

<div class="ns-root flex h-full flex-col">
    <header class="fixed left-0 right-0 top-0 flex h-14 items-center border-b-slate-800 bg-slate-800 text-white shadow-xl">
        <a href="/" title="Ir para o início">
            <h1 class="px-10 text-2xl font-bold hover:cursor-pointer hover:opacity-70">Canais & Grupos</h1>
        </a>
        <a href="/conversas/adicionar">Adicionar</a>
    </header>
    <main class="mt-14 h-full">
        <slot />
    </main>
</div>
