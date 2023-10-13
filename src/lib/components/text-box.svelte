<script lang="ts">
  import { v4 as uuidv4 } from "uuid";

  export let value: any = "";
  export let label: string | undefined = undefined;
  export let id: string = uuidv4();
  export let placeholder: string | undefined = undefined;
  export let name: string;
  export let error: string | undefined | null = undefined;
  export let type:
    | "email"
    | "number"
    | "password"
    | "search"
    | "tel"
    | "text"
    | "url" = "text";
  const inputProperties = { placeholder, type, name };
  function handleInput(event: InputEvent) {
    const inputValue = (event.target as HTMLInputElement).value;
    value = inputValue;
  }
</script>

<div class="max-w-full">
  {#if label}
    <label for={id} class="ml-1 font-semibold text-sm">{label}</label>
  {/if}
  <input
    class="max-md:py-2 max-md:px-3 w-full text-base"
    {id}
    {...inputProperties}
    bind:value
  />
  {#if error}
    <p class="text-red-700 text-sm">{error}</p>
  {/if}
</div>
