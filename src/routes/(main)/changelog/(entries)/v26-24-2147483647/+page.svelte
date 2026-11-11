<script lang="ts">
    import { Ia } from "#lib/components/Links/index.js";
    import Meta from "#lib/components/Meta.svelte";
    import { changelogMetadata } from "../metadata";
</script>

<section>
    <Meta
        metadata={changelogMetadata["v26-24-2147483647"]}
        lastUpdatedFormat={"released"}
    />

    <p>
        <b>
            This is probably going to be the last update I publish for a while,
            hence the name.
        </b>
        For more information, please check
        <Ia href="/blog/2026/06/monthly-recap#svelte">
            the monthly recap for June
        </Ia>.
    </p>

    <ul>
        <li>
            <span class="col bright green">+</span>
            Added several topic branches within <code>/docs</code>.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Improved the style of monthly recap pages.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Improved the style of the navigation panel.
        </li>
        <li>
            <span class="col bright red">-</span>
            Removed some unnecessary pages.
        </li>
        <li>
            <span class="col bright red">-</span><span class="col bright blue"
                >p</span
            >
            Removed analytics.
        </li>
    </ul>
</section>
