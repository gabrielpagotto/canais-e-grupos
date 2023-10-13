<script lang="ts">
  export let title: string;
</script>

<div
  class="flex flex-col justify-center bg-white max-md:bg-slate-50 max-md:border-none border border-slate-200 w-96 p-4 rounded gap-4 py-10"
>
  <h1 class="pb-4 font-bold text-2xl">{title}</h1>
  <slot />
</div>
