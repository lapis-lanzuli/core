<script lang="ts">
    import { Ia } from "#lib/components/Links/index.js";
    import Meta from "#lib/components/Meta.svelte";
    import { changelogMetadata } from "../metadata";
</script>

<section>
    <Meta
        metadata={changelogMetadata["v26-28-0"]}
        lastUpdatedFormat={"released"}
    />

    <p>
        <b>This is the final release for <code>core</code>.</b>
        For more information, please refer to
        <Ia href="/blog/2026/08/core-has-been-completed">this article</Ia>.
    </p>

    <ul>
        <li>
            <span class="col bright yellow">~</span>
            Updated the <Ia href="/profile">profile</Ia>,
            <Ia href="/about">about</Ia>, <Ia href="/projects">projects</Ia>,
            and
            <Ia href="/">home</Ia> pages.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Updated the navigation panel to behave better on mobile devices.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Improved the font size calculation formula.
        </li>
    </ul>
</section>
