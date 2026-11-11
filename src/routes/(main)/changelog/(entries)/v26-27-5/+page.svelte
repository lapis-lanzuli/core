<script lang="ts">
    import { Ia } from "#lib/components/Links/index.js";
    import Meta from "#lib/components/Meta.svelte";
    import { changelogMetadata } from "../metadata";
</script>

<section>
    <Meta
        metadata={changelogMetadata["v26-27-5"]}
        lastUpdatedFormat={"released"}
    />

    <ul>
        <li>
            <span class="col bright purple">ƒ</span>
            Fixed some issues related to the new redirects system.
        </li>
        <li>
            <span class="col bright green">+</span><span
                class="col bright orange">i</span
            >
            <b
                >Added an internal sitemap for the automated generation of
                metadata and navigation elements such as breadcrumbs and
                navigation features.</b
            >
        </li>
        <li>
            <span class="col bright green">+</span>
            Added content to the <Ia href="/map">site map</Ia>.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Improved the search features within the
            <Ia href="/blog">blog</Ia>
            and
            <Ia href="/changelog">changelog</Ia> pages.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Moved the <Ia href="/conventions/changelog"
                >changelog conventions</Ia
            >
            page from
            <code>/projects/core/changelog/conventions</code>
            to
            <code>/conventions/changelog</code>.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Updated the <Ia href="/profile">profile</Ia> page.
        </li>
    </ul>
</section>
