<script lang="ts">
    import { formatDateTime } from "#lib";
    import { LzMeta } from "#lib/metadata.ts";
    import { Ba, Ia } from "../Links";
</script>

<section id="footer-panel" class="disable-padding">
    <section id="navigation">
        <nav>
            <div class="group">
                <h2>General</h2>
                <a href="/">Home</a>
                <a href="/profile">Profile</a>
                <a href="/map">Site map</a>
            </div>
            <div class="group">
                <h2>Projects</h2>
                <a href="/projects">Projects</a>
                <a href="/tools">Tools</a>
                <Ia href="/projects/videos" external>Videos</Ia>
            </div>
            <div class="group">
                <h2>Documents</h2>
                <a href="/docs">Documents</a>
                <a href="/blog">Blog</a>
                <a href="/conventions">Conventions</a>
            </div>
            <div class="group">
                <h2>Meta</h2>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/changelog">Changelog</a>
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/credits">Credits</a>
            </div>
        </nav>
    </section>

    <section class="enable-layout" id="bottom">
        <div class="enable-layout">
            <h1 class="logo">
                <span class="head">lanzoor</span>.<span class="tail">dev</span>
            </h1>

            <p>
                a small website maintained by Lapis Lanzuli, including projects,
                showcases, documents, and more!
            </p>

            <p class="dim">
                <b>{LzMeta.version}</b> ⬩ last updated at
                <b>{formatDateTime(LzMeta.lastUpdated)}</b>
                ⬩
                <Ia href={LzMeta.changelog}>view changelog</Ia>
            </p>
        </div>

        <hr />

        <div id="footer" class="enable-layout">
            <div id="connections">
                <Ba href="https://www.discord.com" external>
                    <img
                        src="/assets/icons/socials/discord.svg"
                        alt="Discord"
                    />

                    <span class="handle">
                        @<span class="col bright purple">lapis-lanzuli</span>
                    </span>
                </Ba>

                <Ba href="https://www.reddit.com/user/Lanzoor/" external>
                    <img src="/assets/icons/socials/reddit.svg" alt="Reddit" />

                    <span class="handle">
                        u/<span class="col bright purple">Lanzoor</span>
                    </span>
                </Ba>

                <Ba href="https://github.com/lapis-lanzuli" external>
                    <img src="/assets/icons/socials/github.svg" alt="GitHub" />

                    <span class="handle">
                        <span class="col bright purple">lapis-lanzuli</span>
                    </span>
                </Ba>

                <Ba href="https://steamcommunity.com/id/lanzoor/" external>
                    <img src="/assets/icons/socials/steam.svg" alt="steam" />

                    <span class="handle">
                        <span class="col bright purple">Lanzoor</span>
                    </span>
                </Ba>

                <Ba href="https://www.youtube.com/@lanzoormakesvideos" external>
                    <img
                        src="/assets/icons/socials/youtube.svg"
                        alt="YouTube"
                    />

                    <span class="handle">
                        @<span class="col bright purple">lapis-lanzuli</span>
                    </span>
                </Ba>

                <Ba href="mailto:mail@lanzoor.dev" external>
                    <img src="/assets/icons/socials/email.svg" alt="Email" />

                    <span class="handle">
                        mail@<span class="col bright purple">lanzoor</span>.dev
                    </span>
                </Ba>
            </div>

            <footer>
                <b>© 2026 Lapis Lanzuli</b> ⬩ Do not redistribute.<br />
                <a href="/credits">credits</a> ⬩ made with <Ia
                    href="https://svelte.dev/docs/kit/introduction"
                    external>SvelteKit</Ia
                > and ♡
            </footer>
        </div>
    </section>
</section>

<style lang="css">
    :root {
        --footer-panel-bg: radial-gradient(
            circle at 50% -25%,
            #22054d 0%,
            #000 100%
        );
    }

    #footer-panel {
        padding: auto 10%;
        background: var(--footer-panel-bg);
        border-top: 3px solid rgba(133, 91, 224, 0.5);

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 2%;

        font-family: "JetBrains Mono";
    }

    #footer-panel section {
        width: 100%;
    }

    #footer-panel #navigation {
        padding: 4em;
        border-bottom: 3px solid rgba(133, 91, 224, 0.5);
    }

    #footer-panel #navigation nav {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(10vw, 1fr));
        gap: 2em;
    }

    @media (max-width: 1200px) {
        #footer-panel #navigation nav {
            grid-template-columns: repeat(auto-fit, minmax(30vw, 1fr));
        }
    }

    #footer-panel #navigation nav .group {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.25em;
    }

    #footer-panel #navigation nav .group h2 {
        margin: 0.25em 0 0.5em 0;
        font-family: "JetBrains Mono";
        font-size: 1.1em;
        color: rgb(123, 61, 255);
    }

    #footer-panel #connections {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        column-gap: 1.5em;
        row-gap: 0.5em;

        margin: 0 2em;
    }

    #footer-panel :global(#connections .-ba) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        opacity: 0.75;
        gap: 0.5em;
        transition: opacity 500ms ease;
    }

    #footer-panel :global(#connections .-ba img) {
        width: 1rem;
        height: 1rem;

        transition: 200ms ease;
    }

    #footer-panel :global(#connections .-ba:hover) {
        opacity: 1;
        text-decoration: none;
    }

    #footer-panel :global(#connections .-ba:hover img) {
        transform: translateY(-0.05rem);

        filter: drop-shadow(0 0.1rem 0 #aaa);
    }

    #footer-panel #connections .handle {
        color: rgb(110, 55, 192);
    }

    #footer-panel footer {
        font-size: 0.75em;
        opacity: 0.5;
        text-align: center;
    }

    @media (max-width: 1200px) {
        #footer-panel :global(#connections .-ba img) {
            width: 1.5rem;
            height: 1.5rem;
        }

        #footer-panel #connections {
            justify-content: flex-start;
            column-gap: 1rem;
            row-gap: 0.25rem;

            margin: 0;
        }

        #footer-panel #connections .handle {
            display: none;
        }
    }
</style>
