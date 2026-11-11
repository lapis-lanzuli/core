<script lang="ts">
    import Meta from "#lib/components/Meta.svelte";
    import Note from "#lib/components/IconBlocks/Note.svelte";
    import { Ia } from "#lib/components/Links/index.js";
    import type { LzMetadata } from "#lib/metadata.js";

    export const metadata: LzMetadata = {
        title: "privacy policy",
        description:
            "a detailed privacy policy explaining what information is collected, how it is used, and how it is handled.",
        lastUpdated: "2026-10-29",
        version: "v1.3",
    };
</script>

<section>
    <Meta {metadata} />

    <h2 id="data-collection">α. Data Collection</h2>

    <p>
        <b>
            This website does not intentionally collect or use personal data or
            use analytics services. Period.
        </b>
    </p>

    <h2 id="third-party">β. Third-Party Services</h2>

    <blockquote>
        <p>
            <Note />
        </p>

        <p>
            Although I strive to minimize the use of third-party services,
            <b
                >some services are just... <i>required</i> for the operation, security,
                and delivery of this website.</b
            > Thanks for your understanding!
        </p>
    </blockquote>

    <h3>Information</h3>

    <p>
        These third-party services may process limited information necessary to
        provide their services. <b
            >The website itself, however, does not intentionally share personal
            information with third parties for advertising, analytics, or
            tracking purposes.</b
        >
    </p>

    <p>
        <b>
            I am <i>not</i> affiliated with the services listed below. I do not control
            how these services process information, and neither do I access or use
            information collected by these services for its own purposes.
        </b>
    </p>

    <h3>Cloudflare</h3>

    <p>
        <b
            >Cloudflare provides DNS, content delivery, and email routing
            services for this website.</b
        >
        As part of providing these services, Cloudflare may process technical information
        such as IP addresses.
    </p>

    <p>
        For more information, please refer to <Ia
            href="https://www.cloudflare.com/privacypolicy/"
            external
        >
            Cloudflare's privacy policy
        </Ia>.
    </p>

    <p>
        <b>This website is hosted via Vercel.</b>
        As part of normal operation, Vercel may collect technical information such
        as IP addresses, request logs, and performance metrics.
    </p>

    <p>
        For more information, please refer to
        <Ia
            href="https://vercel.com/legal/privacy-notice#how-we-use-info"
            external
        >
            Vercel's privacy policy
        </Ia>.
    </p>
</section>
