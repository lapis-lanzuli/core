<script lang="ts">
    import { Ia } from "#lib/components/Links/index.js";
    import Meta from "#lib/components/Meta.svelte";
    import { changelogMetadata } from "../metadata";
</script>

<section>
    <Meta
        metadata={changelogMetadata["v26-27-4"]}
        lastUpdatedFormat={"released"}
    />

    <ul>
        <li>
            <span class="col bright yellow">~</span>
            Improved tag styles within the <Ia href="/projects">project</Ia> and
            <Ia href="/blog">blog</Ia> pages.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Updated the <Ia href="/credits/assets">asset credits</Ia> page.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Tweaked some sentences within existing pages.
        </li>
    </ul>
</section>
