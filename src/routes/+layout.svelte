<script lang="ts">
  import PrimaryButton from "$lib/components/primary-button.svelte";
  import "../app.css";
</script>

<div class="flex flex-col h-full bg-slate-50">
  <header
    class="bg-slate-800 h-14 flex items-center shadow-xl border-b-slate-600 fixed top-0 left-0 right-0 text-white justify-between px-10"
  >
    <a href="/" title="Ir para o início">
      <h1 class="text-2xl font-bold hover:opacity-70 hover:cursor-pointer">
        Canais & Grupos
      </h1>
    </a>
    <div class="flex gap-1 mr-3">
      <a href="/conversas/adicionar">Adicionar</a>
      <PrimaryButton href="/autenticacao/cadastrar-se">
        <i class="fa-solid fa-arrow-right-to-bracket font-bold" />
        <p>Entrar</p>
      </PrimaryButton>
    </div>
  </header>
  <main class="mt-14 max-md:min-h-0">
    <slot />
  </main>
</div>
