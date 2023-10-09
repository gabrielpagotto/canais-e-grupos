<script lang="ts">
  import "../app.css";
</script>

<div class="ns-root flex flex-col h-full">
  <header
    class="bg-slate-800 h-14 flex items-center shadow-xl border-b-slate-800 fixed top-0 left-0 right-0 text-white"
  >
    <a href="/" title="Ir para o início">
      <h1
        class="px-10 text-2xl font-bold hover:opacity-70 hover:cursor-pointer"
      >
        Canais & Grupos
      </h1>
    </a>
    <a href="/conversas/adicionar">Adicionar</a>
  </header>
  <main class="mt-14 h-full">
    <slot />
  </main>
</div>
