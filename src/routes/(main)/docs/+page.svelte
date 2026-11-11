<script lang="ts">
    import { Ia } from "#lib/components/Links/index.ts";
    import Meta from "#lib/components/Meta.svelte";
    import type { LzMetadata } from "#lib/metadata.ts";

    export const metadata: LzMetadata = {
        title: "documents",
    };
</script>

<section>
    <Meta {metadata} />

    <p>
        <b>this is a page where you can find all of my documents.</b><br />
        most of them are just me overanalyzing some niche topic.
    </p>

    <h2>topics</h2>

    <ul>
        <!-- <li>
            <Ia href="/docs/math">math</Ia>
        </li> -->
        <li>
            <Ia href="/docs/linguistics">linguistics</Ia>
        </li>
        <!-- <li>
            <Ia href="/docs/tech">tech</Ia>
        </li> -->
    </ul>

    <h2>relevant documents</h2>

    <ul>
        <li>
            <Ia href="/blog/">blog</Ia>
        </li>
    </ul>

    <h2>miscellaneous documents</h2>

    <ul>
        <li>
            <Ia href="/docs/shitter">Shitter Explained, For Real!!</Ia> - Over the
            past few years, a Discord user known by his many online aliases as Pl4y3r,
            Tobuchou General and much more, has been psychopathically tracking and
            spying on us, even going so far as to fake his death for dramatic effect
            and more.
        </li>
    </ul>
</section>
