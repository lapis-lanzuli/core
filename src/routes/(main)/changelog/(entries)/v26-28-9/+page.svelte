<script lang="ts">
    import { Ia } from "#lib/components/Links/index.ts";
    import Meta from "#lib/components/Meta.svelte";
    import { changelogMetadata } from "../metadata";
</script>

<section>
    <Meta
        metadata={changelogMetadata["v26-28-9"]}
        lastUpdatedFormat={"released"}
    />

    <ul>
        <li>
            <span class="col bright purple">ƒ</span>
            Fixed a very annoying issue where metadata of nonexistent pages would
            default to <code>/</code>.
        </li>

        <li>
            <span class="col bright yellow">~</span>
            Improved the design of list and table elements.
        </li>

        <li>
            <span class="col bright yellow">~</span>
            Updated the <Ia href="/docs/shitter">Shitter docs</Ia>.
        </li>
    </ul>
</section>
