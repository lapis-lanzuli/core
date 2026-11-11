<script lang="ts">
    import { Ia } from "#lib/components/Links/index.js";
    import Meta from "#lib/components/Meta.svelte";
    import { changelogMetadata } from "../metadata";
</script>

<section>
    <Meta
        metadata={changelogMetadata["v26-28-4"]}
        lastUpdatedFormat={"released"}
    />

    <ul>
        <li>
            <span class="col bright purple">ƒ</span>
            Fixed an issue where some redirects didn't preserve the inner paths.
        </li>
        <li>
            <span class="col bright green">+</span>
            Added the <Ia href="/docs/personal-dict">Personal Dictionary</Ia> page.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Updated the <Ia href="/profile">profile</Ia> page.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            <b>
                Changed the pathname for the changelog from <code
                    >/projects/core/changelog</code
                >
                to <code>/changelog</code>
            </b>. A redirect has already been implemented for compatibility
            purposes.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Switched the version display within the footer panel to a more manual
            format in order to prevent having to update versions within the API system
            as well.
        </li>
    </ul>
</section>
