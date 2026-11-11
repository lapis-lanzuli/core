<script lang="ts">
    import { Ia } from "#lib/components/Links/index.js";
    import Meta from "#lib/components/Meta.svelte";
    import { changelogMetadata } from "../metadata";
</script>

<section>
    <Meta
        metadata={changelogMetadata["v26-28-5"]}
        lastUpdatedFormat={"released"}
    />

    <ul>
        <li>
            <span class="col bright yellow">~</span>
            Changed the overflow threshold of the redirects information panel from
            50 characters to 100 characters.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Improved the <Ia href="/profile">profile</Ia> page.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Updated the <Ia href="/docs/personal-dict">Personal Dictionary</Ia> page.
        </li>
    </ul>
</section>
