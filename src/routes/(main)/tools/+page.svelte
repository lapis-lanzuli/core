<script lang="ts">
    import { Ia } from "#lib/components/Links/index.ts";
    import Meta from "#lib/components/Meta.svelte";
    import type { LzMetadata } from "#lib/metadata.ts";

    export const metadata: LzMetadata = {
        title: "tools",
    };
</script>

<section>
    <Meta {metadata} />

    <p>this is a page where you can find all of my tools.</p>

    <ul>
        <li>
            <Ia href="/tools/bpm-checker">BPM Checker</Ia>
        </li>
        <li>
            <Ia href="/tools/number-formatter">Number Formatter</Ia>
        </li>
    </ul>
</section>
