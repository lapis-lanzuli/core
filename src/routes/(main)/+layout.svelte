<script lang="ts">
    import "../../app.css";

    import { onMount } from "svelte";

    import TopPanel from "#lib/components/Panels/TopPanel.svelte";
    import FooterPanel from "#lib/components/Panels/FooterPanel.svelte";
    import NavigationPanel from "#lib/components/Overlays/NavigationPanel.svelte";

    import { handleEscape } from "#lib/overlays.svelte.js";

    import Konami from "#lib/components/EasterEggs/Konami.svelte";

    import { cleanupOldData } from "#lib/cleanup.js";
    import { Ia } from "#lib/components/Links/index.ts";

    let { children } = $props();

    let hydrated = $state(false);

    onMount(() => {
        hydrated = true;

        cleanupOldData();

        const listener = handleEscape();

        document.addEventListener("keydown", listener);

        return () => {
            document.removeEventListener("keydown", listener);
        };
    });
</script>

<svelte:head>
    <link rel="icon" type="image/png" href="/assets/iris.png" />
</svelte:head>

<TopPanel />

{#if !hydrated}
    <div id="hydration">
        <h1>loading...</h1>

        <p>
            this website is currently loading... this probably shouldn't take
            more than a second!<br />
            in case this message persists, please try again in a few minutes, or
            <Ia href="/contact">get in touch</Ia> with the details.
        </p>
    </div>
{/if}

<main>
    {@render children()}
</main>

<FooterPanel />

<NavigationPanel />

<Konami />

<style>
    #hydration {
        display: fixed;
        width: 100vw;
        height: 100vh;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;

        text-align: center;

        z-index: 3000000000;

        background: var(--bg);
    }
</style>
