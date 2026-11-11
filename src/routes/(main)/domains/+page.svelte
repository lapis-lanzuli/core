<script lang="ts">
    import { Ia } from "#lib/components/Links/index.js";
    import Meta from "#lib/components/Meta.svelte";
    import type { LzMetadata } from "#lib/metadata.js";

    export const metadata: LzMetadata = {
        title: "domains",
        description:
            "information about which domains are actually mine and which are not.",
    };
</script>

<section>
    <Meta {metadata} />

    <h2>Registered Domains</h2>

    <p>
        <b>
            as of now, the only domains i have purchased that's related to this
            website are:
        </b>
    </p>

    <ul>
        <li>
            <code>lanzoor.dev</code> (the main website)
        </li>
        <li>
            <code>lanzoor.xyz</code> (redirects to <code>lanzoor.dev</code>, for
            now)
        </li>
    </ul>

    <p>
        <b>
            yes, subdomains of the websites above, such as <code
                ><u>api</u>.<span class="dim">lanzoor.dev</span></code
            > are indeed mine.
        </b>
    </p>

    <p>
        if you see ANY other domain that's not on the list above,
        <i class="col bright red"><b>it's not affiliated with me!</b></i>
    </p>

    <p class="dim">
        also... i do not own <code>lanzoor.com</code>. it's probably worth
        mentioning that it didn't exist until i bought
        <code>lanzoor.dev</code>.
    </p>

    <h2>Registrar</h2>

    <p>
        <b>
            all of my domains are registered via
            <Ia href="https://porkbun.com/" external>Porkbun</Ia>!
        </b>
        good registrar tbh.
    </p>
</section>
