<script lang="ts">
    import { page } from "$app/state";
    import { Ia } from "#lib/components/Links/index.js";
    import type { LzMetadata } from "#lib/metadata.js";
    import Meta from "#lib/components/Meta.svelte";

    let status = $state(page.status);
    let attemptedPath = $state(page.url?.pathname || "/");

    let is5xxPreview = attemptedPath === "/5xx";
    if (is5xxPreview) {
        status = 500;
    }

    export const metadata: LzMetadata = {
        title: "error",
        description: "whoops! something unexpected happened...",
        useEl: false,
    };

    const parentPath = $derived(page.url.pathname.replace(/\/[^/]+\/?$/, "/"));
</script>

{#if status !== 404 || is5xxPreview}
    <Meta {metadata} />

    <section id="internal-error" class="stretched">
        <p class="links">
            <Ia href={parentPath ?? "../"}>../</Ia> ⬩
            <Ia onclick={() => history.back()}>{"<<"}</Ia>
            <Ia onclick={() => history.forward()}>{">>"}</Ia>
        </p>

        <header class="disable-layout">
            <h1>{status}</h1>

            <div class="separator"></div>

            <h2>Internal error</h2>
        </header>

        <p>
            <b>something went wrong while processing your request.</b><br />
            the server encountered an unexpected error and could not complete the
            request.
        </p>

        <p>
            this error is extremely rare. this error is also most likely on our
            end.<br />
            <b>please feel free to <Ia href="/contact">get in touch</Ia>.</b>
        </p>

        {#if is5xxPreview}
            <p class="dim">
                you're currently previewing this error page on <code>/5xx</code
                >.<br />
                <b>the error did not actually happen.</b>
            </p>
        {/if}
    </section>
{:else if status === 404}
    <section id="error-404" class="stretched">
        <p class="links">
            <Ia href={parentPath ?? "../"}>../</Ia> ⬩
            <Ia onclick={() => history.back()}>{"<<"}</Ia>
            <Ia onclick={() => history.forward()}>{">>"}</Ia>
        </p>

        <header class="disable-layout">
            <h1>404</h1>

            <div class="separator"></div>

            <h2>Page not found</h2>
        </header>

        <p>
            <b>
                sorry, we couldn't find a resource located at
                <span class="col bright green">'{attemptedPath}'</span>!
            </b><br />
            the file might have been changed, moved or removed.
        </p>

        <p>
            try using the navigation panels above and below. you may also <Ia
                href={attemptedPath}>try again</Ia
            >.<br />
            if you believe this is a mistake, feel free to
            <Ia href="/contact">get in touch</Ia>.
        </p>
    </section>
{/if}

<style lang="css">
    #error-404 {
        background:
            radial-gradient(circle, rgba(100, 0, 255, 0.15), transparent 60%),
            radial-gradient(circle, rgba(220, 50, 255, 0.12), transparent 55%);

        background-size:
            200% 200%,
            180% 180%;

        background-position:
            0% 0%,
            100% 100%;

        animation: Background404 20s ease-in-out infinite;
    }

    @keyframes Background404 {
        0% {
            background-position:
                0% 0%,
                100% 100%;
        }

        25% {
            background-position:
                100% 25%,
                25% 75%;
        }

        50% {
            background-position:
                75% 100%,
                0% 25%;
        }

        75% {
            background-position:
                25% 75%,
                75% 0%;
        }

        100% {
            background-position:
                0% 0%,
                100% 100%;
        }
    }

    #internal-error {
        background:
            radial-gradient(circle, rgba(0, 30, 255, 0.15), transparent 60%),
            radial-gradient(circle, rgba(48, 210, 255, 0.12), transparent 55%);

        background-size:
            200% 200%,
            180% 180%;

        background-position:
            0% 0%,
            100% 100%;

        animation: InternalError 20s ease-in-out infinite;
    }

    @keyframes InternalError {
        0% {
            background-position:
                0% 0%,
                100% 100%;
        }

        25% {
            background-position:
                100% 25%,
                25% 75%;
        }

        50% {
            background-position:
                75% 100%,
                0% 25%;
        }

        75% {
            background-position:
                25% 75%,
                75% 0%;
        }

        100% {
            background-position:
                0% 0%,
                100% 100%;
        }
    }

    section {
        text-shadow: 4px 4px 1px color-mix(in oklch, currentColor, black 60%);
    }

    section header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 1.5em;
        letter-spacing: 0.1em;

        transition: 2s ease;
        cursor: pointer;
    }

    section header:hover {
        letter-spacing: 0.2em;
        transition: 200ms ease;
    }

    section header .separator {
        width: 2px;
        height: 2em;

        background: rgba(255, 255, 255, 0.25);
    }

    section p:not(.links) {
        text-align: center;
    }
</style>
