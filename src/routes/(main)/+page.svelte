<script lang="ts">
    import { Ba, Ia } from "#lib/components/Links/index.js";
    import Meta from "#lib/components/Meta.svelte";
    import type { LzMetadata } from "#lib/metadata.js";

    export const metadata: LzMetadata = {
        title: "welcome!",
        description:
            "a small website maintained by Lapis Lanzuli, including projects, showcases, documents, and more!",
        useEl: false,
    };
</script>

<section id="intro">
    <Meta {metadata} />

    <header>
        <div class="left enable-layout">
            <h1 class="logo">
                <span class="head">lanzoor</span><span>.</span><span
                    class="tail">dev</span
                >
            </h1>

            <p class="adaptive-text-shadow tags">
                <span class="col black">//</span>
                <span class="col purple"> profile </span>
                <span class="col black">//</span>
                <span
                    class="col blue"
                    title="yes, this is a blue archive reference. how did you know?"
                >
                    archive
                </span>
                <span class="col black">//</span>
                <span class="col cyan"> projects </span>
                <span class="col black">//</span>
                <span class="col green"> showcases </span>
                <span class="col black">//</span>
            </p>

            <hr />

            <p>
                <b>hello!</b>
            </p>

            <p>
                <b>welcome to my little website!</b> i started making this
                website in
                <span class="col bright cyan">early 2026</span> as a little
                project since i wanted a corner where people can find
                information about me.
                <b>
                    this website just contains my projects and whatever my brain
                    decided it was a good idea.
                </b>
            </p>

            <p>
                oh, and who am i?
                <b>
                    my name is <span class="col bright purple"
                        >Lapis Lanzuli</span
                    >!
                </b>
                i'm just a random student from korea who is obsessed with
                <span class="col green">programming</span>,
                <span class="col yellow">science</span>,
                <span class="col orange">languages</span> and
                <Ia href="/profile#interests">more</Ia>, nothing much.
            </p>

            <p>
                that said, i hope you enjoy your time here.<br />

                <b>
                    make yourself at home and
                    <span class="col bright purple">have fun!</span>
                </b>
            </p>

            <hr />

            <div id="buttons">
                <Ba href="/profile"><button class="profile">profile</button></Ba
                >
                <Ba href="/projects"
                    ><button class="projects">projects</button></Ba
                >
            </div>
        </div>

        <div class="right">
            <img src="/assets/iris.png" alt="[alt] my OC Iris" />
        </div>
    </header>
</section>

<style lang="css">
    #intro {
        background:
            radial-gradient(
                circle at 20% 40%,
                /* WHEN YOU SEE IT */ rgba(120, 47, 255, 0.1727),
                transparent 50%
            ),
            radial-gradient(
                circle at 80% 90%,
                rgba(100, 0, 255, 0.125),
                transparent 50%
            ),
            black;
        padding-left: 10vw;
        padding-right: 10vw;
    }

    #intro header .logo {
        font-size: 4rem;
    }

    #intro header .logo::after {
        position: absolute;
        left: auto;
        content: "_";
        animation: cursorBlink 1s none infinite;
    }

    @keyframes cursorBlink {
        0% {
            opacity: 0%;
        }

        50% {
            opacity: 100%;
        }

        100% {
            opacity: 0%;
        }
    }

    #intro header {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        gap: 5em;
    }

    #intro header img {
        width: 15em;
        height: 15em;
        transform: rotate(5deg);
        opacity: 0.75;
        transition: 200ms ease;
    }

    #intro header img:hover {
        transform: rotate(0deg) scale(1.1);
        opacity: 1;
        cursor: pointer;
    }

    #intro header #buttons {
        display: flex;
        flex-direction: row;
        gap: 1em;
        margin: 1em 0;
    }

    #intro header button {
        background: transparent;
        border: 3px solid white;
        color: white;
        padding: 0.5em 1.25em;
        font-size: 0.9em;

        transition: 200ms ease;
    }

    #intro header button.profile {
        background: white;
        color: #111;
    }

    #intro header button.profile:hover {
        background: transparent;
        color: var(--bright-blue);
        box-shadow:
            inset 0 0 20px var(--dark-blue),
            -20px -20px 20px var(--dark-cyan),
            20px 20px 20px var(--dark-purple);
        border-color: var(--dark-blue);
    }

    #intro header button.projects {
        background: #111;
        color: white;
        box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.5);
        border-color: rgba(255, 255, 255, 0.5);
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    }

    #intro header button.projects:hover {
        background: #201430;
        color: var(--bright-purple);
        box-shadow:
            inset 0 0 10px var(--dark-purple),
            0 10px 20px var(--dark-purple);
        border-color: var(--dark-purple);
        text-shadow: 0 0 10px var(--dark-purple);
    }

    @media (max-width: 1200px) {
        #intro {
            padding-left: 5vw;
            padding-right: 5vw;
        }

        #intro header .right {
            display: none;
        }

        #intro header .tags {
            font-size: 0.85em;
        }
    }
</style>
