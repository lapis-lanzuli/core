<script lang="ts">
    import { Ia } from "#lib/components/Links/index.js";
    import Meta from "#lib/components/Meta.svelte";
    import { changelogMetadata } from "../metadata";
</script>

<section>
    <Meta
        metadata={changelogMetadata["v26-27-2"]}
        lastUpdatedFormat={"released"}
    />

    <ul>
        <li>
            <span class="col bright green">+</span>
            <b>Implemented a new system that handles redirects.</b>
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Improved style definitions for <code>External</code> link elements.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Updated information within the <Ia href="/about">about</Ia> page.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Improved design of the navigation panel.
        </li>
    </ul>
</section>
