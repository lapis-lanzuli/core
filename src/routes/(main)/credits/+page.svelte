<script lang="ts">
    import Break from "#lib/components/Blocks/Break.svelte";
    import Meta from "#lib/components/Meta.svelte";
    import { Ba, Ia } from "#lib/components/Links/index.js";
    import { LzMeta, type LzMetadata } from "#lib/metadata.js";

    const dateCreated = "2026-02-08T09:30:00Z";

    const createdDiff = Math.floor(
        (Date.now() - new Date(dateCreated).getTime()) / 86_400_000,
    );

    const updatedDiff = Math.ceil(
        Math.abs(
            LzMeta.lastUpdated.getTime() - new Date().setHours(0, 0, 0, 0),
        ) /
            (1000 * 60 * 60 * 24),
    );

    export const metadata: LzMetadata = {
        title: "credits",
    };
</script>

<section>
    <Meta {metadata} />

    <p>
        <b>welcome to the credits roll!</b> this includes anything that was involved
        with the making of this website, as well as attributions.
    </p>

    <p class="dim">
        btw i got hit with nostalgia for like. several dozens of times while
        making this thing lmao
    </p>
</section>

<section id="roll-bg">
    <section id="roll">
        <section id="milestones">
            <div>
                <h2>
                    <span class="col bright purple">lanzoor.dev</span> was created
                    at...
                </h2>

                <h1 class="date">
                    <span style="font-size: 3rem;">
                        <span class="col bright purple">2026-02-08</span>
                        <span class="col purple">9:30PM</span>
                    </span>
                    <span style="font-size: 1.5rem;">KST</span>
                </h1>
            </div>

            <div>
                <h2>days since creation</h2>

                <h1 class="created">{createdDiff} days</h1>
            </div>

            <div>
                <h2>days since last update</h2>

                <h1 class="updated">
                    {createdDiff !== 0 ? updatedDiff + " days" : "none"}
                </h1>
            </div>
        </section>

        <section id="made-withs">
            <h2>it was made thanks to...</h2>

            <ul>
                <li>
                    <Ia
                        external
                        href="https://svelte.dev/docs/kit/introduction"
                    >
                        SvelteKit
                    </Ia>, which is an <i>amazing</i> framework for building web projects!
                </li>
                <li>
                    <Ia external href="https://vscodium.com/">VSCodium</Ia>,
                    which is basically visual studio code but without the
                    microsoft brainrot.
                </li>
                <li>
                    <b>these AMAZING fonts,</b> loaded statically:

                    <div class="font-display">
                        <Ba
                            external
                            href="https://www.jetbrains.com/lp/mono/"
                            class="jetbrains-mono"
                        >
                            JetBrains Mono
                        </Ba>

                        •

                        <Ba
                            external
                            href="https://fonts.google.com/noto/specimen/Noto+Sans"
                            class="noto-sans"
                        >
                            Noto Sans</Ba
                        >

                        •

                        <Ba
                            external
                            href="https://fonts.google.com/noto/specimen/Noto+Sans+Mono"
                            class="noto-sans-mono"
                        >
                            Noto Sans Mono
                        </Ba>

                        •

                        <Ba
                            external
                            href="https://fonts.google.com/specimen/Sawarabi+Gothic"
                            class="sawarabi-gothic"
                        >
                            さわらびゴシック
                        </Ba>
                    </div>
                </li>

                <li>
                    <Ia external href="https://porkbun.com/">Porkbun</Ia>, for
                    the amazing domains.
                </li>

                <li>
                    <Ia external href="https://vercel.com/home/">Vercel</Ia>,
                    for the hosting service.
                </li>

                <li>and <b>your support</b>! :D</li>
            </ul>
        </section>

        <section id="made-withouts">
            <h2>
                it was made <i class="col bright red">without</i>...
            </h2>

            <ul>
                <li><b>clankers</b>, or any type of v*be c*ding.</li>
                <li><b>site generator services</b>, such as WordPress.</li>
            </ul>
        </section>

        <section id="special-thanks">
            <h2>
                <span class="rainbow">special thanks</span> to these
                <i>amazing</i> people!
            </h2>

            <ul>
                <li>
                    <b class="reymie" title="reyman hypothesis">Reymie</b>, for
                    being the goat and giving HUGE feedback for the website.
                </li>
                <li>
                    <Ia
                        external
                        href="https://github.com/Derukugis"
                        title="出る杭は打たれる">derukugi</Ia
                    >, for giving amazing feedback on the website.
                </li>
                <li>
                    <Ia
                        external
                        href="https://suw-profile.vercel.app/"
                        title=":OkuuMindBlown:">Suw</Ia
                    >, for giving direct fixes for the website.
                </li>
                <li>
                    <b class="aseancoin" title="filipino RAHHHH">ASEANCoin</b>,
                    for drawing my original character, Iris.
                </li>
                <li>
                    and anyone else who was involved with the making of this
                    website.
                </li>

                <Break height="5rem" />

                <li>
                    ...and of course, <b>you</b>! thanks for visiting my
                    website, it really means a lot to me {"<3"}
                </li>
            </ul>

            <hr />

            <p class="finish">
                <b>
                    anything else you see on this website was made by me,
                    <span class="col bright purple">Lapis Lanzuli</span>,
                </b><br />

                through real effort, hundreds of hours, and a lot of trial and
                error.
            </p>
        </section>
    </section>
</section>

<style>
    #roll-bg {
        background-image: url("/assets/backgrounds/website.png");
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;

        padding: 0;
    }

    #roll {
        gap: 5rem;
        backdrop-filter: blur(2px);
        background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.25) 0%,
            rgb(14, 1, 32) 100%
        );
    }

    #roll h1,
    #roll h2 {
        text-align: center;
    }

    #roll #milestones {
        gap: 10rem;
    }

    #roll .created,
    #roll .updated {
        font-weight: bold;
        font-size: 4rem;
    }

    #roll .created {
        color: transparent;

        background: linear-gradient(
            45deg,
            var(--dark-yellow) 0%,
            var(--dark-yellow) 25%,
            var(--bright-yellow) 50%,
            var(--dark-yellow) 75%,
            var(--dark-yellow) 100%
        );

        background-clip: text;
    }

    #roll .updated {
        color: transparent;

        background: linear-gradient(
            to bottom,
            rgb(225, 255, 255) 0%,
            var(--cyan) 75%
        );

        background-clip: text;
    }

    #roll .date {
        font-size: 2rem;
        font-weight: bold;
        letter-spacing: 0.2rem;
    }

    #roll section {
        gap: 3rem;
    }

    #roll .finish {
        text-align: center;
    }

    .font-display {
        width: 100%;

        margin: 1rem;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 1rem;

        color: rgba(255, 255, 255, 0.5);

        user-select: none;
    }

    .font-display :global(.-ba) {
        color: rgba(255, 255, 255, 0.75);

        font-size: 1.25em;
        font-weight: normal;

        transition: 1s ease;
    }

    .font-display :global(.-ba):hover {
        color: white;
        letter-spacing: 0.05em;

        transition: 0.2s ease;
    }

    .reymie {
        color: #ff9d2b;
    }

    .aseancoin {
        color: #425d90;
    }

    .rainbow {
        text-shadow: 0 0 2rem white;
        display: inline-block;

        background: linear-gradient(
            45deg,
            hsl(0, 100%, 70%) 0%,
            hsl(90, 100%, 70%) 25%,
            hsl(180, 100%, 70%) 50%,
            hsl(270, 100%, 70%) 75%,
            hsl(360, 100%, 70%) 100%
        );

        background-size: 200% 100%;
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;

        animation:
            rainbow-scroll 4s linear infinite,
            float 6s ease infinite;
    }

    @keyframes rainbow-scroll {
        from {
            background-position: 0% 50%;
        }

        to {
            background-position: 200% 50%;
        }
    }

    @keyframes float {
        0%,
        100% {
            transform: translateY(0.25rem);
        }

        50% {
            transform: translateY(-0.25rem);
        }
    }
</style>
