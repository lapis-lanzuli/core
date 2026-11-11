<script lang="ts">
    import { Ia } from "#lib/components/Links/index.js";
    import Meta from "#lib/components/Meta.svelte";
    import { changelogMetadata } from "../metadata";
</script>

<section>
    <Meta
        metadata={changelogMetadata["v26-28-1"]}
        lastUpdatedFormat={"released"}
    />

    <ul>
        <li>
            <span class="col bright purple">ƒ</span>
            Fixed an issue where links within the <Ia href="/tools">tools</Ia> page
            wouldn't work.
        </li>
        <li>
            <span class="col bright green">+</span>
            Added the <Ia href="/tools/number-formatter">Number Formatter</Ia> tool.
        </li>
    </ul>
</section>
