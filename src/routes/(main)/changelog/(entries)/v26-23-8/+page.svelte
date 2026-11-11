<script lang="ts">
    import { Ia } from "#lib/components/Links/index.js";
    import Meta from "#lib/components/Meta.svelte";
    import { changelogMetadata } from "../metadata";
</script>

<section>
    <Meta
        metadata={changelogMetadata["v26-23-8"]}
        lastUpdatedFormat={"released"}
    />

    <ul>
        <li>
            <span class="col bright green">+</span>
            Added Japanese font support.
        </li>

        <li>
            <span class="col bright yellow">~</span>
            Reworked the entirety of
            <Ia href="/credits/contributors/">the contributors page</Ia>, and
            implemented a better convention for contributor roles.
        </li>
    </ul>
</section>
