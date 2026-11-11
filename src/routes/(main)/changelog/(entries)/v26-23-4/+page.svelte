<script lang="ts">
    import { Ia } from "#lib/components/Links/index.js";
    import Meta from "#lib/components/Meta.svelte";
    import { changelogMetadata } from "../metadata";
</script>

<section>
    <Meta
        metadata={changelogMetadata["v26-23-4"]}
        lastUpdatedFormat={"released"}
    />

    <ul>
        <li>
            <span class="col bright yellow">~</span>
            Fixed some in-site links using the <code>_blank</code> attribute in
            <Ia href="/projects">the projects page</Ia>.
        </li>
        <li>
            <span class="col bright yellow">~</span><span
                class="col bright blue">p</span
            >
            Altered the color scheme of codeblocks.
        </li>
        <li>
            <span class="col bright red">-</span>
            Removed the annoying margin for <code>code</code> and
            <code>kbd</code> elements.
        </li>
    </ul>
</section>
