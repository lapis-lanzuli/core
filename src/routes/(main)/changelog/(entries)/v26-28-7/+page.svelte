<script lang="ts">
    import { Ia } from "#lib/components/Links/index.ts";
    import Meta from "#lib/components/Meta.svelte";
    import { changelogMetadata } from "../metadata";
</script>

<section>
    <Meta
        metadata={changelogMetadata["v26-28-7"]}
        lastUpdatedFormat={"released"}
    />

    <ul>
        <li>
            <span class="col bright green">+</span>
            Added commit link attributes to changelog entries, starting from
            <Ia href="/changelog/v26-28-6">v26-28-6</Ia>.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Changed the email addresses in the <Ia href="/contact">contact</Ia> page.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Improved the design of the <Ia href="/404">404</Ia> page.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Improved the design of <code>ul</code> and <code>ol</code> elements.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Improved the wording in some pages.
        </li>
    </ul>

    <p>homepage & projects page overhaul coming soon i promise</p>
</section>
