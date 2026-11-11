<script lang="ts">
    import { Ia } from "#lib/components/Links/index.js";
    import Meta from "#lib/components/Meta.svelte";
    import { changelogMetadata } from "../metadata";
</script>

<section>
    <Meta
        metadata={changelogMetadata["v26-23-5"]}
        lastUpdatedFormat={"released"}
    />

    <p>
        <b>This update is part of the navigation UI/UX overhaul.</b>
        We do not have an ETA for the actual overhaul yet, but it will take place
        sometime in June.
    </p>

    <ul>
        <li>
            <span class="col bright green">+</span>
            Added a <code>.frozen</code> attribute to the <code>main</code> element,
            so some panels can disable user interaction with the main content when
            necessary.
        </li>

        <li>
            <span class="col bright green">+</span>
            Added a link to the <code>core-api</code> project's changelog within
            <Ia href="/projects">the projects page</Ia>.
        </li>

        <li>
            <span class="col bright green">+</span>
            Added a completely alternate layout for the warning panel for mobile devices.
        </li>

        <li>
            <span class="col bright green">+</span>
            Implemented a redirect from
            <code>/projects/core-api/changelog/:path*</code>
            to
            <code>https://api.lanzoor.dev/docs/changelog/:path*</code> to match the
            projects convention.
        </li>

        <li>
            <span class="col bright yellow">~</span>
            Improved the color pallete of the warning panel.
        </li>

        <li>
            <span class="col bright yellow">~</span>
            Updated <Ia href="/privacy-policy">the privacy policy</Ia>
            to <code>v2.3</code> in order to match so it matches the new changes.
        </li>

        <li>
            <span class="col bright yellow">~</span>
            Updated the logic of the script loaded by
            <Ia href="/privacy-policy">the privacy policy</Ia>
            to hide the panel when you make a choice via the button.
        </li>
    </ul>
</section>
