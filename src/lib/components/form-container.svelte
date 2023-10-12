<script lang="ts">
  export let title: string;
</script>

<div
  class="flex flex-col justify-center bg-white border border-slate-200 w-96 p-4 rounded gap-4"
>
  <h1 class="pb-4 font-bold text-lg">{title}</h1>
  <slot />
</div>
