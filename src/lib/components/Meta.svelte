<script lang="ts">
    import { descPlaceholder, type LzMetadata } from "#lib/metadata.js";
    import { page } from "$app/state";
    import { Ia } from "./Links";

    let {
        metadata,
    }: {
        metadata: LzMetadata;
    } = $props();

    const parentPath = $derived(page.url.pathname.replace(/\/[^/]+\/?$/, "/"));
    const titlePad = $derived(metadata.titlePad ? " | lanzoor.dev" : "");
</script>

<svelte:head>
    <meta property="og:title" content={metadata.title + titlePad} />
    <title>{metadata.title + titlePad}</title>
    <meta
        name="description"
        content={metadata.description ?? descPlaceholder}
    />
    <meta
        property="og:description"
        content={metadata.description ?? descPlaceholder}
    />
    <meta property="og:type" content={metadata.ogType ?? "website"} />
    <meta name="theme-color" content={metadata.themeColor ?? "#6f27f5"} />
</svelte:head>

{#if metadata.useEl !== false}
    <header>
        <p>
            <Ia href={parentPath ?? "../"}>../</Ia> ⬩
            <Ia onclick={() => history.back()}>{"<<"}</Ia>
            <Ia onclick={() => history.forward()}>{">>"}</Ia>
        </p>

        <h1 class="title">
            {metadata.title}
        </h1>

        {#if metadata.dates}
            <p class="dim">
                {#if metadata.dates.lastUpdated}
                    last updated at <b>{metadata.dates.lastUpdated}</b>
                {/if}
                {#if metadata.dates.released}
                    released at <b>{metadata.dates.released}</b>
                {/if}
                {#if metadata.version}
                    current version: <b>{metadata.version}</b>
                {/if}
            </p>
        {/if}

        <hr />
    </header>
{/if}

<style>
    header h1.title {
        font-weight: bold;
        letter-spacing: 0.1rem;
    }
</style>
