<script lang="ts">
    import { descPlaceholder, type LzMetadata } from "#lib/metadata.js";
    import { page } from "$app/state";
    import { Ia } from "./Links";

    let {
        metadata,
        lastUpdatedFormat = "last-updated",
    }: {
        metadata: LzMetadata;
        lastUpdatedFormat?: "last-updated" | "released";
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

        {#if metadata.lastUpdated || metadata.version}
            <p class="dim">
                {#if metadata.lastUpdated}
                    {#if lastUpdatedFormat === "last-updated"}
                        Last updated at <b>{metadata.lastUpdated}</b>
                    {:else if lastUpdatedFormat === "released"}
                        Released at <b>{metadata.lastUpdated}</b>
                    {/if}
                    <br />
                {/if}
                {#if metadata.version}
                    Current version: <b>{metadata.version}</b>
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
