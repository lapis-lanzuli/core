<script lang="ts">
    import { Ia } from "#lib/components/Links/index.js";
    import Meta from "#lib/components/Meta.svelte";
    import { changelogMetadata } from "../metadata";
</script>

<section>
    <Meta
        metadata={changelogMetadata["v26-27-3"]}
        lastUpdatedFormat={"released"}
    />

    <ul>
        <li>
            <span class="col bright green">+</span>
            Implemented a few testing pages.<br />
            Feel free to check it out at <Ia href="/test">/test</Ia>!
        </li>
        <li>
            <span class="col bright yellow">~</span>
            <b>Completely overhauled the changelog system.</b><br />
            You can now search for changelog entries more easily. Check it out at
            <Ia href="/projects/core/changelog">/changelog</Ia>!
        </li>
        <li>
            <span class="col bright yellow">~</span>
            <b>Improved the blog system.</b> Check it out at
            <Ia href="/projects/core/blog">/blog</Ia>!
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Improved the metadata system for dynamically loaded locations.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Improved the design of most panels and overlays.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Improved the design of the <Ia href="/projects">projects</Ia> page. Again.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Made the website more mobile-friendly.
        </li>
        <li>
            <span class="col bright red">-</span>
            Removed the legacy changelog search overlay, in favor of the new system.
        </li>
    </ul>
</section>
