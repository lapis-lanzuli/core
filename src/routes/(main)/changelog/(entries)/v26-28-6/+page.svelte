<script lang="ts">
    import { Ia } from "#lib/components/Links/index.js";
    import Meta from "#lib/components/Meta.svelte";
    import { changelogMetadata } from "../metadata";
</script>

<section>
    <Meta
        metadata={changelogMetadata["v26-28-6"]}
        lastUpdatedFormat={"released"}
    />

    <ul>
        <li>
            <span class="col bright yellow">~</span>
            Improved the design of the <Ia href="/projects">projects</Ia> page.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Improved the design of the <Ia href="/404">404</Ia> page.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Updated outdated metadata.
        </li>
    </ul>
</section>
