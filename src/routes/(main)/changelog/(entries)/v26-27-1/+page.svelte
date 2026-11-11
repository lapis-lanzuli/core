<script lang="ts">
    import { Ia } from "#lib/components/Links/index.js";
    import Meta from "#lib/components/Meta.svelte";
    import { changelogMetadata } from "../metadata";
</script>

<section>
    <Meta
        metadata={changelogMetadata["v26-27-1"]}
        lastUpdatedFormat={"released"}
    />

    <ul>
        <li>
            <span class="col bright purple">ƒ</span>
            Fixed an issue where some links would take you to the 404 page.
        </li>
        <li>
            <span class="col bright green">+</span>
            <b
                >Added the Quick Links section in the <Ia href="/">frontpage</Ia
                >.</b
            >
        </li>
        <li>
            <span class="col bright green">+</span>
            Added showcase pages to some projects.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Moved the <Ia href="/conlangs">conlangs</Ia> section from
            <code>/projects/conlangs</code>
            to
            <code>/conlangs</code>.<br />
            <b
                >A redirect from <code>/projects/conlangs</code> to
                <code>/conlangs</code> has been implemented for compatibility purposes.</b
            >
        </li>
    </ul>
</section>
