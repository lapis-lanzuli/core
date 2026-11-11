<script lang="ts">
    import Meta from "#lib/components/Meta.svelte";
    import { changelogMetadata } from "../metadata";
</script>

<section>
    <Meta
        metadata={changelogMetadata["v26-23-6"]}
        lastUpdatedFormat={"released"}
    />

    <p>Small update today.</p>

    <ul>
        <li>
            <span class="col bright purple">ƒ</span>
            Fixed an issue where the frozen state wouldn't get removed after the analytics
            panel is hidden.
        </li>

        <li>
            <span class="col bright yellow">~</span>
            <b>Completely overhauled the margin system.</b>
            Please do note that the pages within
            <code>/troubleshooting</code> hasn't been updated along yet.
            <i>We will work on this soon.</i>
        </li>

        <li>
            <span class="col bright yellow">~</span>
            Improved the structure within changelogs.
        </li>

        <li>
            <span class="col bright yellow">~</span>
            Improved analytics toggle logic.
        </li>

        <li>
            <span class="col bright yellow">~</span>
            Unified <code>&lt;meta&gt;</code> tag usage across pages.
        </li>
    </ul>
</section>
