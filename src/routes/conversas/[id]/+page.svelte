<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<svelte:head>
    <title>{data.chat?.title}</title>
    <meta name="description" content={data.chat?.details} />
    <meta property="og:image" content={data.chat?.iconUrl} />
    <meta name="twitter:title" content={data.chat?.title} />
    <meta name="twitter:description" content={data.chat?.details} />
</svelte:head>

<div class="flex flex-col items-center">
    <img src={data.chat?.iconUrl} alt={data.chat?.title} />
    <h1>{data.chat?.title}</h1>
    <p>{data.chat?.details}</p>
    <p>{data.chat?.platform}</p>
    <p>{data.chat?.type}</p>
</div>
