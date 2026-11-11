<script lang="ts">
    import { Ia } from "#lib/components/Links/index.js";
    import Meta from "#lib/components/Meta.svelte";
    import { changelogMetadata } from "../metadata";
</script>

<section>
    <Meta
        metadata={changelogMetadata["v26-23-7"]}
        lastUpdatedFormat={"released"}
    />

    <p>A bit of an internal update today.</p>

    <ul>
        <li>
            <span class="col bright purple">ƒ</span>
            Fixed an issue where the privacy policy link within the analytics panel
            would take you to the 404 page.
        </li>

        <li>
            <span class="col bright purple">ƒ</span>
            Fixed a logic issue within the analytics panel, where the panel would
            still show up on mobile devices in the privacy policy page.
        </li>

        <li>
            <span class="col bright yellow">~</span><span
                class="col bright orange">i</span
            >
            <b>
                Reworked the current font size convention to use <code>em</code>
                units instead of
                <code>px</code>.
            </b>
            This would allow responsive layouts to be easier to implement, and also
            improve readability on mobile devices.
        </li>

        <li>
            <span class="col bright yellow">~</span>
            Improved the design of the analytics panel, in order to make it friendly
            for devices with a significantly short width.
        </li>

        <li>
            <span class="col bright yellow">~</span><span
                class="col bright orange">i</span
            >
            Renamed the frontpage stylesheet from <code>styles.css</code> to
            <code>welcome.css</code> in order to match the new conventions.
        </li>

        <li>
            <span class="col bright yellow">~</span>
            Improved phrasing of some paragraphs within certain sections of the website.
        </li>
    </ul>
</section>
