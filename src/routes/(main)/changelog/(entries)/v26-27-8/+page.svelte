<script lang="ts">
    import { Ia } from "#lib/components/Links/index.js";
    import Meta from "#lib/components/Meta.svelte";
    import { changelogMetadata } from "../metadata";
</script>

<section>
    <Meta
        metadata={changelogMetadata["v26-27-8"]}
        lastUpdatedFormat={"released"}
    />

    <ul>
        <li>
            <span class="col bright green">+</span>
            Added more easter eggs, and their hints in the
            <Ia href="/profile#trivia">trivia</Ia> section.
        </li>
        <li>
            <span class="col bright green">+</span>
            Added the <Ia href="/arg">ARG</Ia> section, appropriate metadata, and
            links within the
            <Ia href="/projects">projects</Ia> page.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Improved the font size calculation formula.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Improved design of the navigation panel on mobile devices.
        </li>
        <li>
            <span class="col bright yellow">~</span><span
                class="col bright orange">i</span
            >
            Reworked the folder structure.
        </li>
    </ul>
</section>
