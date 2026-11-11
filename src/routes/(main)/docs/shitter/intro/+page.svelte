<script lang="ts">
    import ContentWarning from "#lib/components/Information/ContentWarning.svelte";
    import Meta from "#lib/components/Meta.svelte";
    import DocumentNavigation from "#lib/components/Navigation/DocumentNavigation.svelte";
    import type { LzMetadata } from "#lib/metadata.ts";

    export const metadata: LzMetadata = {
        title: "Shitter Explained, For Real!!",
        description:
            "Over the past few years, a Discord user known by his many online aliases as Pl4y3r, Tobuchou General and much more, has been psychopathically tracking and spying on us, even going so far as to fake his death for dramatic effect and more.",
        lastUpdated: "2026-11-10",
        version: "v4.1",
    };
</script>

<section>
    <Meta {metadata} />

    <ContentWarning>
        this document, as well as all of the other documents listed in the
        navigation panel contain intense profanity and discuss themes related to
        suicidal thoughts and intentions.
    </ContentWarning>

    <p>
        Over the past {new Date().getFullYear() - 2024} years, a Discord user by the
        name of P. F [actual name redacted, yes we know], and known by his many online
        aliases as
        <b>Annette Katherine Ellington, EduAku, Pl4y3r, and <i>MUCH MORE</i>,</b
        >
        but whom we will refer to as just "Shitter", has been
        <b>psychopathically tracking and spying on us,</b> even going so far as
        to
        <b>
            fake his death for dramatic effect, being openly racist to his own
            country, endorsing colonialism, giving fake apologies and using his
            poor living condition as justification for his crimes beyond
            forgiveness.
        </b>
    </p>

    <p class="dim">
        Written and edited with passion by Lanzoor, kekeee, and TheCasualGuy. If
        you have any suggestions or questions, please feel free to contact any
        of the members listed in part 0 (except TCG).
    </p>

    <DocumentNavigation
        next={{ href: "/docs/shitter/part-0", title: "Part 0" }}
    />
</section>
