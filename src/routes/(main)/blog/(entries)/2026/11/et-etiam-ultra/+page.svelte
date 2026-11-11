<script lang="ts">
    import Meta from "#lib/components/Meta.svelte";
    import { Ia } from "#lib/components/Links/index.ts";
    import headerDesignSketch from "./assets/header-design-sketch.png";
    import { blogMetadata } from "../../../metadata";
</script>

<section>
    <Meta metadata={blogMetadata["2026/11/et-etiam-ultra"]} />

    <p>hi!</p>

    <p>
        if you're reading this entry,
        <b>it means that v26.29.0 has been officially released!</b>
        yey!<br />
        i've made so many changes to the point where this feels like an entirely different
        website now lmao
    </p>

    <p>
        <b>this blog entry is just me yapping about this update as a whole.</b>
        for the full list of changes i strongly recommend checking out the <Ia
            href="/changelog/v26-29-0">changelog</Ia
        > page instead!
    </p>

    <p>anyways, here goes nothing...</p>

    <hr />

    <h2>lapis where the hell were you?!?!?!</h2>

    <p>
        the following is a set of reasons as to why i couldn't update my website
        recently.
    </p>

    <ul class="spacious">
        <li>
            <div class="content">
                <p>
                    <b>i have to... well, study!</b><br />

                    ..i don't have to explain this do i LMAO
                </p>

                <p>
                    but seriously, i've decided that i wanted to put more time
                    in studying.
                </p>
            </div>
        </li>
        <li>
            <b>i have <i>other</i> things to work on!</b><br />
            this includes web projects and videos. although i'm not allowed to reveal
            what they are, they've REALLY been consuming a lot of my time as well.
        </li>
        <li>
            <div class="content">
                <p>
                    <b>...other stuff!</b><br />
                    if you've read <Ia disabled href="/blog/2026/09/hiatus"
                        >09/hiatus</Ia
                    >
                    <span class="dim">(now deleted)</span> before then you know exactly
                    what i'm talking about.
                </p>

                <p>
                    for those who missed the thing, it mostly involves
                    dismotivation and mental health issues.
                </p>
            </div>
        </li>
    </ul>

    <hr />

    <h2>METADATA ☠️☠️☠️☠️☠️ SON.</h2>

    <p>
        i think i have a reputation of making the WORST metadata systems ever
        known to mankind. ...let's see how this has evolved.
    </p>

    <p>
        <b>
            my previous approach was using a very large <code>map.ts</code> file
        </b>
        that contains the metadata of EVERY file within the website.
    </p>

    <p>
        ..very classical lanzoor stuff, i know. <b>
            mind you this was made <i>only</i> because i wanted breadcrumbs.
        </b> this quickly snowballed into a very large list of metadata that was both
        hard and tedious to manage.
    </p>

    <p>
        ...and after thinking for like 2.7 seconds i officially decided that i
        no longer want breadcrumbs elements. 😭<br />
        istg they do not fit this website, like, at all.
    </p>

    <p>
        so, as part of this update i opted in for plan B, which is
        <b
            >making a reusable header element that, when fed metadata,
            automatically:</b
        >
    </p>

    <ul>
        <li>
            displays basic metadata, as well as navigation tools. <span
                class="dim">(go back, go forward, ../, etc.)</span
            >
        </li>
        <li>applies metadata to the page.</li>
    </ul>

    <p>
        as a result <b
            >i've ended up making each file export a <code>metadata</code> object,</b
        >
        whose types are <code>LzMetadata</code>. this has two benefits:
    </p>

    <ul>
        <li>
            when put in a dedicated <code>.ts</code> file,
            <b>other scripts and pages can easily access the metadata.</b><br />
            <span class="dim">
                (see any file named <code>metadata.ts</code> within
                <code>src/routes</code>) for a detailed implementation
            </span><br />
            <i>
                unfortunately, apparently you can't import directly from <code
                    >.svelte</code
                > files.
            </i> they really should make that a feature!
        </li>
        <li>
            <b>you can feed the metadata into other components</b> and automatically
            apply the metadata from there! how cool :D
        </li>
    </ul>

    <p>
        yes, it <i>did</i> take me a while to visit every file in the source code
        and integrate the feature. i had to do that thing for like. 3 times by now
        lmao
    </p>

    <p>
        but honestly, <b>i would definitely say this was worth it!</b> the source
        code feels way more organized.
    </p>

    <p>
        <b
            >i also reworked the changelog and blog metadata systems to match
            the new system!</b
        >
        now that i had the <code>metadata.ts</code> file with metadata exports, i
        removed the previous approach which was using a script to generate a large
        json file of metadata.
    </p>

    <hr />

    <p>
        ...anyways, back to the header element. <b
            >i sketched up a very basic design for the header element using
            GIMP.</b
        > here is the drawing:
    </p>

    <div class="image-grid">
        <img src={headerDesignSketch} alt="the sketch" />
    </div>

    <div class="image-description">
        <b>the sketch&trade;</b><br />for the initial design, the description
        within the header element and the text "Go back" were removed
    </div>

    <p>
        <b>
            i ended up making the design and integrating the header itself to
            every page on this website in around 3 hours.
        </b>
        i felt proud of this change cuz this website looks way more unified.
    </p>

    <p>
        well, that said,
        <b>
            i don't think this is the best metadata system that i could think
            of.
        </b>
        if you want to improve the system, feel free to
        <Ia external href="/source">review the code yourself</Ia> and
        <Ia href="/contact">get in touch</Ia>! feedback is always welcome,
        although it might take a few hours for me to go through every file lmao
    </p>

    <hr />

    <h2>i ULTRAKILLED the unnecessary stuff</h2>

    <p>
        guess what! <b>i removed <code>api.lanzoor.dev</code>!</b> horray!!!! :D<br
        />
    </p>

    <p>
        this is because
        <b>maintaining APIs doesn't really make me hAPI </b>.<br />

        <span class="dim small"
            >........get it??? 🤣😂😂🤣🤣😂🤣😂😂😂😂🤣😂😂😂🤣🤣😂🤣😂😂😂😂</span
        >
    </p>

    <p>
        ok, all jokes aside, there are actually so many reasons as to why i
        decided to ULTRAKILL <code>core-api</code>, but i really don't feel like
        listing every single one of them. although i am indeed a very passionate
        yapper, this is not the thing i'm willing to yap about.
    </p>

    <p>
        <b>to summarize it in three words:</b>
    </p>

    <ul>
        <li>NextJS</li>
        <li>lazy</li>
        <li>useless</li>
    </ul>

    <p>just fill the rest in with your imagination or smth lmao</p>

    <hr />

    <p>
        guess what else i also decided to kill. <b>Lanzaforge!</b> well, sort of.
    </p>

    <p>
        this one i can actually explain the reasons.
        <b>i decided that i do not want to maintain an organization!</b><br />
    </p>

    <p>
        seriously,
        <b>maintaining an organization is honestly tedious as hell.</b>
        managing like 2763 airillion accounts at once is NOT peam at all. i do not
        have enough free time to do that either. i'm starting to appreciate this individual
        setup, and i'm genuinely happy to make projects like this.
    </p>

    <p>
        <b
            >i've currently rebranded all accounts related to Lanzaforge
            <span class="dim"
                >(which includes Bluesky, PyPI, npmjs and etc.)</span
            >, and safely migrated all Lanzaforge projects to my accounts.
        </b>
        i also ended up having to delete some of my accounts as well. feel free to
        take them i guess. i genuinely don't care about Lanzaforge anymore
    </p>

    <p>
        i also removed everything at <code>lanzaforge.org</code> (as well as other
        Lanzaforge domains) because i didn't want to just. keep an unfinished project
        sitting there.
    </p>

    <hr />

    <p>ok, that's probably it! thanks for listening to me yap i guess.</p>

    <p>
        i do have finals to prepare for, so i will come back to programming in
        around december. cya
    </p>
</section>
