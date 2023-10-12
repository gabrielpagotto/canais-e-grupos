<script lang="ts">
  export let href: string | undefined = undefined;
  export let disabled: boolean = false;

  const buttonClassName =
    "flex items-center font-bold gap-2 py-1 px-2 bg-cyan-600 rounded-md hover:bg-cyan-600/90 active:bg-cyan-600/80 disabled:bg-cyan-600/50";
</script>

{#if !href}
  <button class={buttonClassName} {disabled}>
    <slot />
  </button>
{:else}
  <a {href} class={buttonClassName}>
    <slot />
  </a>
{/if}
