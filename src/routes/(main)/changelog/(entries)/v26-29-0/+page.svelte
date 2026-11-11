<script lang="ts">
    import Meta from "#lib/components/Meta.svelte";
    import { Ia } from "#lib/components/Links/index.js";
    import { changelogMetadata } from "../metadata";
</script>

<section>
    <Meta
        metadata={changelogMetadata["v26-29-0"]}
        lastUpdatedFormat={"released"}
    />

    <p>
        <b>long time no see everyone!!</b> i'm back from working on my
        <i>other</i> web projects.
    </p>

    <p>
        this changelog is HUGE. i could've released them separately, but meh,
        this is more fun :D
    </p>

    <h2>Major Changes</h2>

    <ul class="spacious">
        <li>
            <span class="col bright green">+</span>
            <b>added a reusable metadata & header component!</b> FINALLY!!! this makes
            metadata management way easier.
        </li>
        <li>
            <span class="col bright green">+</span>
            <b>added collapsibles.</b> these are like <code>details</code>
            elements but <i>cooler&trade;.</i>
        </li>
        <li>
            <span class="col bright green">+</span>
            <b>added a set of new components, called "icon blocks"!</b> these
            are usually be used in blockquote elements, to help clarify what the
            blockquote is for. they looks pretty nice, i guess. you can check
            <Ia href="/test/icon-blocks">here</Ia> to preview all of the icon blocks.
        </li>
        <li>
            <span class="col bright green">+</span>
            <b>
                added a preview link of the internal error page at <Ia
                    href="/5xx">/5xx</Ia
                >.
            </b>
        </li>
        <li>
            <span class="col bright green">+</span>
            <b>added more easter eggs!</b> in fact, there is one hidden right in this
            page. good luck finding it!
        </li>
        <li>
            <span class="col bright yellow">~</span>
            <b>
                <Ia
                    external
                    href="https://svelte.dev/docs/kit/migrating-to-sveltekit-3"
                    >migrated</Ia
                >
                the entire project to SvelteKit 3!
            </b>

            i should've done this earlier tbh.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            <b>reworked on almost every page on this website.</b> this includes
            but is not limited to:
            <ul>
                <li>the homepage. haha gradients go brr</li>
                <li>the profile page.</li>
                <li>the about page.</li>
                <li>the documents page.</li>
                <li>the blog page.</li>
                <li>the credits page.</li>
                <li>the error pages.</li>
                <li>...and more!</li>
            </ul>
        </li>
        <li>
            <span class="col bright yellow">~</span>
            <b
                >improved the overall layout of sections to be more comfortable
                and spacious.</b
            ><br />

            the website looks more comfortable now, yey! my dyslexia has been
            getting worse day by day, so i at least want to make the website
            friendly for me.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            <b>
                improved how entries are loaded in <Ia href="/blog">blog</Ia> and
                <Ia href="/changelog">changelog</Ia> pages.
            </b>
        </li>
        <li>
            <span class="col bright yellow">~</span>
            <b>changed the writing style entirely.</b>
            this is because i've officially decided that i want this website to be
            less serious and more of a casual space where people can just find stuff
            about me.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            <b> changed how fonts are loaded. </b>

            the website no longer uses Google Fonts anymore! (yay)<br />
            fonts are now statically hosted at <code>/assets/fonts</code>.
            however this means that there will be less peam text animations,
            which is pretty sad...
        </li>
        <li>
            <span class="col bright yellow">~</span>
            <b>
                improved the design and the layouts of lists, tables, and <code
                    >blockquote</code
                > elements.
            </b>
        </li>
        <li>
            <span class="col bright yellow">~</span>
            <b>redesigned the navigation panel.</b>
            seriously why did the semi-transparent background get undetected for AGES.
            it doesn't even fit the website lmao
        </li>
        <li>
            <span class="col bright yellow">~</span>
            <b>updated the privacy policy.</b> i haven't changed anything important,
            i just clarified ambiguous stuff and improved the wording.
        </li>
        <li>
            <span class="col bright red">-</span>
            <b>removed <code>api.lanzoor.dev</code>,</b> as well as all client<span
                class="dim"
                >(<code>lanzoor.dev</code>)
            </span>-side logic that depends on the api service.
        </li>
        <li>
            <span class="col bright red">-</span>
            <b>
                removed the terms of service page, the legal information page,
                as well as the legal information panel.
            </b>
            i don't really know why i had all those features in the first place, i'm
            not running some kind of interactive service, so...
            <span class="dim"
                >(in unrelated news, i really hope someone doesn't DDoS my
                website...)</span
            > <br />
            at least my source code looks a <i>bit</i> less messy now. yay!
        </li>
        <li>
            <span class="col bright red">-</span>
            <b>removed breadcrumb elements entirely.</b>
        </li>
        <li>
            <span class="col bright red">-</span>
            <b>removed the metadata system for blog and changelog entries.</b>
        </li>
        <li>
            <span class="col bright red">-</span>
            <b>removed the warp panel.</b>
        </li>
    </ul>

    <h2>Minor Changes</h2>

    <ul>
        <li>
            <span class="col bright yellow">~</span>
            <b>
                changed the css code to use <code>rem</code> units instead of
                <code>em</code> units.
            </b>
        </li>
        <li>
            <span class="col bright yellow">~</span>
            <b>improved the overall structure of the source code.</b> hopefully my
            website is a bit more organized now.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            improved the redirects system.
        </li>
        <li>
            <span class="col bright red">-</span>
            removed unnecessary redirects.
        </li>
        <li>
            <span class="col bright red">-</span>
            removed unnecessary styles.
        </li>
    </ul>
</section>
