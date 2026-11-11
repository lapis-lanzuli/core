<script lang="ts">
    import Meta from "#lib/components/Meta.svelte";
    import Warn from "#lib/components/IconBlocks/Warn.svelte";
    import { Ia } from "#lib/components/Links/index.js";
    import type { LzMetadata } from "#lib/metadata.js";

    export const metadata: LzMetadata = {
        title: "contact",
        description:
            "a list of contact information, which includes where you can find me online.",
    };
</script>

<section>
    <Meta {metadata} />

    <p>
        got any
        <span class="col bright black">questions</span>,
        <span class="col bright yellow">suggestions</span>, or
        <span class="col bright red">concerns</span>? feel free use the contacts
        below to get in touch!
    </p>

    <!-- <blockquote class="warning">
        <b class="col bright yellow">Note:</b>
        If you believe your inquiry is more related to <Ia
            href="https://www.lanzaforge.org/contact"
            external>Lanzaforge</Ia
        > than to me personally, then please consider using the contact methods listed
        on
        <Ia href="https://www.lanzaforge.org/contact" external
            >Lanzaforge's contact page</Ia
        >.
    </blockquote> -->

    <h2>Email</h2>

    <blockquote>
        <p>
            primary link: <a href="mailto:mail@lanzoor.dev">mail@lanzoor.dev</a
            ><br />
            clicking the link above will open a <code>mailto:</code> link.
        </p>
    </blockquote>

    <p>
        emails sent to
        <b>mail@lanzoor.dev</b>,
        <b>hello@lanzoor.dev</b>, or
        <b>support@lanzoor.dev</b>
        are forwarded to my personal email address,
        <a href="mailto:lapis-lanzuli@proton.me">lapis-lanzuli@proton.me</a>.
        feel free to contact my personal email address as well.
    </p>

    <p>
        <b>
            replies currently come from
            <a href="mailto:lapis-lanzuli@proton.me">
                lapis-lanzuli@proton.me
            </a>, and not the
            <code><span class="dim">...</span>@lanzoor.dev</code> addresses.
        </b>
        thank you for your understanding!
    </p>

    <h2>Social Media</h2>

    <ul>
        <li>
            <h3>
                Discord -

                <code>lanzoor</code>
            </h3>

            <p>
                i strongly recommend using Discord since i check it the most
                often.<br />
                you may send me a friend request,
                <b
                    >but i strongly recommend stating your inquiry with the
                    request so that i know you're not a scammer.</b
                >
            </p>
        </li>
        <li>
            <h3>
                Reddit -

                <Ia href="https://www.reddit.com/user/Lanzoor/" external
                    >u/Lanzoor</Ia
                >
            </h3>

            <p>
                this is like an alternate contact method. use this if my Discord
                somehow gets hacked or something.
            </p>
        </li>
    </ul>

    <blockquote class="warning">
        <p>
            <Warn />
        </p>

        <p class="col bright yellow">
            <b>please use my contact methods responsibly.</b>
        </p>

        <p>
            <b
                >messages containing spam, scams, harassment, abuse, or other
                inappropriate content may be ignored, blocked, reported, or
                otherwise dealt with at my discretion.</b
            >

            please be respectful and keep your messages relevant.
            <b
                >constructive feedback, questions, bug reports, and genuine
                inquiries are always welcome.</b
            >
        </p>

        <p>
            <b>
                please do not interact with me if all you're doing is being a
                jerk, disrespecting my efforts, or attempting to manipulate me.

                <i>
                    <u> i am a human being, not your servant. </u>
                </i>
            </b>
        </p>
    </blockquote>
</section>
