<script lang="ts">
    import Meta from "#lib/components/Meta.svelte";
    import { Ia } from "#lib/components/Links/index.js";
    import type { LzMetadata } from "#lib/metadata.js";

    export const metadata: LzMetadata = {
        title: "about",
        description:
            "a simple FAQ section about the website to help you get started.",
    };
</script>

<section id="faq">
    <Meta {metadata} />

    <p>
        here's a simple FAQ section about the website to help you get started!
    </p>

    <p>
        <b>
            if you have any questions, please feel free to
            <Ia href="/contact">get in touch</Ia>!
        </b>
    </p>

    <h2>what is this website?</h2>

    <p>
        <code>lanzoor.dev</code> is a personal website featuring projects, documents,
        and other things i create.
    </p>

    <h2>who maintains this website?</h2>

    <p>
        this website is maintained by none other than <span
            class="col bright purple">Lapis Lanzuli</span
        >!
    </p>

    <h2>how was it created?</h2>

    <p>
        the website is currently hosted on
        <Ia href="https://vercel.com" external>Vercel</Ia>
        and built using
        <Ia href="https://svelte.dev/docs/kit/introduction" external
            >SvelteKit</Ia
        >.
    </p>

    <p>
        the <Ia href="/domains">domain</Ia> itself is registered via
        <Ia href="https://porkbun.com" external>Porkbun</Ia>.
    </p>

    <h2>why?</h2>

    <p>
        <s>yes.</s>
    </p>

    <p>
        the website originally started with a simple profile for myself. at that
        time, it was mostly for fun. but over time i kept getting new ideas,
        which led to the website growing into a collection of projects and
        showcases.
    </p>

    <h2>can i use the content from this website?</h2>

    <p>
        unless otherwise stated,
        <b>
            the content on this website primarily belongs to the me and the
            <Ia href="/credits#special-thanks">contributors</Ia>.
        </b>
    </p>

    <p>
        please ask for permission before redistributing or modifying personal
        works. otherwise i'm gonna get REALLY sad and punch my monitor :c
    </p>

    <div class="enable-spacing dim">
        <h2>looking for something else?</h2>

        <ul>
            <li>
                <Ia href="/domains">Domain information</Ia>
            </li>
            <li>
                <Ia href="/contact">Contact methods</Ia>
            </li>
        </ul>
    </div>
</section>
