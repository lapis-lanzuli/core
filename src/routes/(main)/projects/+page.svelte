<script lang="ts">
    import { Ia } from "#lib/components/Links/index.js";
    import Meta from "#lib/components/Meta.svelte";
    import type { LzMetadata } from "#lib/metadata.js";

    export const metadata: LzMetadata = {
        title: "projects",
        description: "a showcase of the projects that i've been working on.",
    };
</script>

<section id="projects">
    <Meta {metadata} />

    <p>here is a showcase of some projects that i've been working on.</p>

    <p>
        <b>
            the reason why you don't see many projects here is because i've been
            working on this very website for a very long time.
        </b>

        i do plan to return to actual project creation in around
        <b>january 2027</b>.
    </p>

    <div id="container">
        <div class="project">
            <h1>core</h1>

            <p class="description">
                the frontend source code for lanzoor.dev, which is the website
                you're looking at right now.
            </p>

            <div class="information">
                <div class="data">
                    <div class="tag frontend">frontend</div>
                    <div class="tag webpage">webpage</div>
                    <div class="status complete">complete</div>
                </div>

                <div class="links">
                    links:

                    <Ia href="/">project</Ia>
                    <Ia href="/changelog">changelog</Ia>
                    <Ia href="https://github.com/lapis-lanzuli/core" external
                        >source</Ia
                    >
                </div>
            </div>
        </div>

        <div class="project">
            <h1>core-archive</h1>

            <p class="description">
                an archive / alternative website containing previous documents
                related to me that are no longer actively maintained.
            </p>

            <div class="information">
                <div class="data">
                    <div class="tag frontend">frontend</div>
                    <div class="tag webpage">webpage</div>
                    <div class="status complete">complete</div>
                </div>

                <div class="links">
                    links:

                    <Ia href="https://archive.lanzoor.dev" external>project</Ia>
                    <Ia
                        href="https://github.com/lapis-lanzuli/core-archive"
                        external>source</Ia
                    >
                </div>
            </div>
        </div>

        <div class="project">
            <h1>kagipass</h1>

            <p class="description">
                generate deterministic, strong passwords using the kagipass
                algorithm
            </p>

            <div class="information">
                <div class="data">
                    <div class="tag program">program</div>
                    <div class="tag cli">cli</div>
                    <div class="status wip">wip</div>
                </div>

                <div class="links">
                    links:

                    <Ia
                        href="https://github.com/lapis-lanzuli/kagipass"
                        external>source</Ia
                    >
                </div>
            </div>
        </div>

        <div class="project">
            <h1>BHOJ <span class="dim">(Bro Had One Job)</span></h1>

            <p class="description">
                an esoteric programming language compiler written in python
            </p>

            <div class="information">
                <div class="data">
                    <div class="tag program">program</div>
                    <div class="tag cli">cli</div>
                    <div class="status complete">complete</div>
                </div>

                <div class="links">
                    links:

                    <Ia href="https://github.com/lapis-lanzuli/BHOJ" external
                        >source</Ia
                    >
                </div>
            </div>
        </div>
    </div>

    <p>
        for archived projects (such as <code>periodica</code> and
        <code>profile-old</code>), refer to
        <Ia href="https://archive.lanzoor.dev" external>archive.lanzoor.dev</Ia
        >.
    </p>
</section>

<!-- <section id="portal">
    <h1>projects portal</h1>

    <p>
        There's also a plenty of projects hosted directly within this website.
    </p>

    <ul>
        <li>
            <Ia href="/tools">Tools</Ia>
        </li>

        <li>
            <Ia href="/conlangs">Conlangs</Ia>
        </li>

        <li>
            <Ia href="/games">Games</Ia>
        </li>
    </ul>
</section> -->

<style lang="css">
    :root {
        --projects-bg:
            radial-gradient(
                circle at top left,
                rgba(0, 72, 255, 0.1) 0%,
                transparent 25%,
                transparent 100%
            ),
            radial-gradient(
                circle at 100% 50%,
                rgba(0, 255, 255, 0.1) 0%,
                transparent 25%,
                transparent 100%
            ),
            radial-gradient(
                circle at bottom left,
                rgba(0, 180, 255, 0.1) 0%,
                transparent 25%,
                transparent 100%
            ),
            rgb(4, 0, 8);
    }

    #projects {
        background: var(--projects-bg);
    }

    #container {
        display: flex;
        flex-direction: column;
        border-radius: 1em;

        width: 100%;
        margin: 3em 0;
    }

    .project {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1.25em;

        padding: 2em;

        background: rgb(6, 2, 11);
        border: 2px solid #222;

        transition: 500ms ease;

        position: relative;
        overflow: hidden;
    }

    .project .information {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5em;
    }
    .project .data {
        display: flex;
        flex-wrap: wrap;
        gap: 1em;

        font-size: 0.8em;
        font-weight: 600;
        text-shadow: 0 0 20px
            oklch(from currentColor calc(l * 0.7) calc(c * 2) calc(h + 10));
    }

    .project .tag::before {
        content: ">_ ";
        color: #555;
        text-shadow: none;
    }

    .project .status::before {
        content: "//";
        color: #777;
        text-shadow: none;
    }

    .tag.backend {
        color: var(--bright-orange);
    }
    .tag.frontend {
        color: var(--bright-green);
    }
    .tag.webpage {
        color: var(--bright-cyan);
    }
    .tag.program {
        color: var(--bright-purple);
    }
    .tag.cli {
        color: var(--bright-magenta);
    }

    .status.complete {
        color: var(--bright-green);
    }
    .status.wip {
        color: var(--bright-yellow);
    }

    .project .links {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        column-gap: 1em;
        row-gap: 0.5em;
        max-width: 25em;
    }

    .project .links :global(a) {
        color: white;
        transition: 200ms ease;
    }

    .project .links :global(a):hover {
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    }

    @media (max-width: 768px) {
        .project .description,
        .project .links {
            max-width: none;
        }
    }
</style>
