<script lang="ts">
  import "../app.css";
</script>

<div class="ns-root flex flex-col">
  <header
    class="bg-teal-400 h-14 flex items-center shadow-xl border-b-teal-400 fixed top-0 left-0 right-0"
  >
    <h1 class="px-10 text-white text-2xl font-bold">Canais & Grupos</h1>
  </header>
  <main class="mt-14">
    <slot />
  </main>
</div>
