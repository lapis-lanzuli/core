<script lang="ts">
    import Redirects from "#lib/components/Information/Redirects.svelte";
    import { Ia } from "#lib/components/Links/index.ts";
    import Meta from "#lib/components/Meta.svelte";
    import type { LzMetadata } from "#lib/metadata.js";

    export const metadata: LzMetadata = {
        title: "testing",
        description: "testing... testing... testing...",
    };
</script>

<section>
    <Meta {metadata} />

    <Redirects links={["/testing", "/test"]} />

    <p>
        <b>hey there! you just discovered the testing page :o </b><br />
        i'm pretty sure i hid it pretty well...<br />
        well, this section contains some, "tests" with styles and experimental features
        for debugging purposes. feel free to just ignore this section of the website,
        there's nothing interesting. really
    </p>

    <ul>
        <li>
            <Ia href="/test/colors">/test/colors</Ia>
        </li>
        <li>
            <Ia href="/test/icon-blocks">/test/icon-blocks</Ia>
        </li>
        <li>
            <Ia href="/test/warnings">/test/warnings</Ia>
        </li>
        <li>
            <Ia href="/test/weird-mouse-effect">/test/weird-mouse-effect</Ia>
        </li>
    </ul>
</section>
