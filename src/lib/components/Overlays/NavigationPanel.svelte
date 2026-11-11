<script lang="ts">
    import { navigationOverlay } from "#lib/overlays.svelte.js";
    import { onMount } from "svelte";
    import { Ba, Ia } from "../Links";
    import { formatDateTime } from "#lib";
    import { LzMeta } from "#lib/metadata.ts";

    onMount(() => {
        const listener = (event: KeyboardEvent) => {
            if (event.ctrlKey && event.shiftKey && event.code === "KeyN") {
                event.preventDefault();
                navigationOverlay.open = !navigationOverlay.open;
            }
        };

        document.addEventListener("keydown", listener);

        return () => {
            document.removeEventListener("keydown", listener);
        };
    });
</script>

<div id="navigation" class:open={navigationOverlay.open}>
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="bg" onclick={() => (navigationOverlay.open = false)}>
        <div
            class="panel enable-layout"
            onclick={(event) => event.stopPropagation()}
        >
            <div class="header enable-layout">
                <Ba href="/">
                    <h1 class="logo">
                        <span class="head">lanzoor</span>.<span class="tail"
                            >dev</span
                        >
                    </h1>
                </Ba>

                <p>
                    a small website maintained by Lapis Lanzuli,<br />
                    including projects, showcases, documents, and more!
                </p>
            </div>

            <hr />

            <nav class="links enable-layout">
                <h3>⬩ links ⬩</h3>

                <div class="group">
                    <Ia href="/">home</Ia>
                    <Ia href="/profile">profile</Ia>
                    <Ia href="/about">about</Ia>
                    <Ia href="/projects">projects</Ia>
                    <Ia href="/docs">documents</Ia>
                    <Ia href="/blog">blog</Ia>
                </div>

                <p class="footer">
                    <Ia href={LzMeta.changelog}>{LzMeta.version}</Ia> ⬩ last updated
                    at
                    <b>{formatDateTime(LzMeta.lastUpdated)}</b><br />
                    <b>© 2026 Lapis Lanzuli</b> ⬩ Do not redistribute.
                </p>
            </nav>
        </div>
    </div>
</div>

<style lang="css">
    #navigation {
        position: fixed;
        inset: 0;

        opacity: 0;
        pointer-events: none;
        z-index: 2147483647;
    }

    #navigation.open {
        opacity: 1;
        pointer-events: auto;

        transition: 0.5s ease;
    }

    #navigation .bg {
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
        cursor: pointer;
    }

    #navigation .panel {
        position: fixed;
        inset: 0 0 0 auto;
        text-align: left;
        background: black;
        border-left: 2.5px solid rgb(224, 204, 255);
        min-width: 40%;
        max-width: 100%;

        padding: 1.5em;
        overflow-y: auto;
    }

    #navigation .panel .header {
        text-align: center;
        padding: 0 2rem;
    }

    #navigation .panel .header h1 {
        font-size: 2.5rem;
    }

    #navigation .panel .header p {
        font-size: 0.9rem;
    }

    #navigation .panel .links {
        padding: 0 2rem;
    }

    #navigation .panel .links .group {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        background: #1a0f25;
        padding: 2rem;
        border: 2px solid rgb(150, 100, 255);
    }

    #navigation .panel .footer {
        text-align: center;
        opacity: 0.8;
        font-size: 0.8rem;
    }
</style>
