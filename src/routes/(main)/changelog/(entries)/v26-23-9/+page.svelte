<script lang="ts">
    import { Ia } from "#lib/components/Links/index.js";
    import Meta from "#lib/components/Meta.svelte";
    import { changelogMetadata } from "../metadata";
</script>

<section>
    <Meta
        metadata={changelogMetadata["v26-23-9"]}
        lastUpdatedFormat={"released"}
    />

    <p>
        <b>We're officially getting ready for the navigation UI/UX overhaul!</b>
    </p>

    <ul>
        <li>
            <span class="col bright purple">ƒ</span>
            Fixed an issue where the analytics panel would pop up in the privacy policy
            page even after seeing it.
        </li>

        <li>
            <span class="col bright green">+</span>
            <b>Added breadcrumbs navigation to most major pages.</b> This would allow
            for easier navigation and clarity.
        </li>

        <li>
            <span class="col bright green">+</span>
            Added a search feature to the changelog page.
        </li>

        <li>
            <span class="col bright green">+</span>
            Implemented a basic <Ia href="/about">about</Ia> page.
        </li>

        <li>
            <span class="col bright yellow">~</span>
            Improved the structure of some pages on mobile devices.
        </li>
    </ul>
</section>
