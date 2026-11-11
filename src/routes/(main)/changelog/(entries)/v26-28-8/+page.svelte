<script lang="ts">
    import { Ia } from "#lib/components/Links/index.ts";
    import Meta from "#lib/components/Meta.svelte";
    import { changelogMetadata } from "../metadata";
</script>

<section>
    <Meta
        metadata={changelogMetadata["v26-28-8"]}
        lastUpdatedFormat={"released"}
    />

    <ul>
        <li>
            <span class="col bright yellow">~</span>
            Fixed some typos.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Improved the design of the <Ia href="/">homepage</Ia>.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Updated the <Ia href="/credits/contributors">contributors</Ia> page, and
            moved ASEANCoin to the asset credits page.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Updated the <Ia href="/profile">profile</Ia> page.
        </li>
    </ul>
</section>
