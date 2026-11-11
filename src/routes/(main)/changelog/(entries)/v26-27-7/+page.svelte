<script lang="ts">
    import { Ia } from "#lib/components/Links/index.js";
    import Meta from "#lib/components/Meta.svelte";
    import { changelogMetadata } from "../metadata";
</script>

<section>
    <Meta
        metadata={changelogMetadata["v26-27-7"]}
        lastUpdatedFormat={"released"}
    />

    <ul>
        <li>
            <span class="col bright green">+</span>
            Added some easter eggs.
        </li>
        <li>
            <span class="col bright green">+</span>
            Added the trivia section to the <Ia href="/profile">profile</Ia> page.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Updated the <Ia href="/profile">profile</Ia> page.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Improved design of the <Ia href="/map">sitemap</Ia> page.
        </li>
        <li>
            <span class="col bright yellow">~</span><span
                class="col bright orange">i</span
            >
            Refactored internal code.
        </li>
        <li>
            <span class="col bright red">-</span>
            Removed unnecessary styles.
        </li>
    </ul>
</section>
