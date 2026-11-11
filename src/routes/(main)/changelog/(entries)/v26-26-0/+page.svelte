<script lang="ts">
    import { Ia } from "#lib/components/Links/index.js";
    import Meta from "#lib/components/Meta.svelte";
    import { changelogMetadata } from "../metadata";
</script>

<section>
    <Meta
        metadata={changelogMetadata["v26-26-0"]}
        lastUpdatedFormat={"released"}
    />

    <p>
        <b
            >Here's a surprise update! You definitely weren't expecting this,
            right?</b
        >
    </p>

    <ul>
        <li>
            <span class="col bright green">+</span>
            <b>Added the <Ia href="/tos">Terms of Service</Ia> page.</b>
        </li>
        <li>
            <span class="col bright green">+</span>
            <b>
                Added a notice panel that notifies you whether the Legal
                Information changes, or you first visit the website.
            </b>
        </li>
        <li>
            <span class="col bright green">+</span>
            Added the ability to exit the search screen within the
            <Ia href="/changelog/">changelogs</Ia> by pressing the
            <kbd>Escape</kbd> key.
        </li>
        <li>
            <span class="col bright green">+</span>
            Added <Ia href="/conlangs/">conlangs</Ia> as a collection within the
            <Ia href="/projects">projects page</Ia>.
        </li>
        <li>
            <span class="col bright green">+</span>
            Added the internal change marker (<span class="col bright orange"
                >i</span
            >) for changelog entries.
        </li>
        <li>
            <span class="col bright green">+</span>
            Added new navigation entries to the footer panel.
        </li>
        <li>
            <span class="col bright green">+</span><span
                class="col bright orange">i</span
            >
            <b>Added automatic cleanup of outdated localStorage data.</b><br />
            Previously stored keys that are no longer used may now be automatically
            removed.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Improved style definitions for <code>{"<kbd>"}</code>,
            <code>{"<ul>"}</code>,
            <code>{"<ol>"}</code>, as well as some block elements.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Improved color palette.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Updated <Ia href="/about">/about</Ia> to match the new changes.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Changed layout of the footer panel.
        </li>
        <li>
            <span class="col bright yellow">~</span><span
                class="col bright orange">i</span
            >
            Renamed long selector identifiers.
        </li>
        <li>
            <span class="col bright yellow">~</span><span
                class="col bright orange">i</span
            >
            Split <code>app.css</code> into even more stylesheets.
        </li>
        <li>
            <span class="col bright red">-</span>
            <b>Completely removed intentional data collection. Period.</b>
        </li>
        <li>
            <span class="col bright red">-</span>
            Completely removed the analytics notice panel, in favor of the new one.
        </li>
        <li>
            <span class="col bright red">-</span>
            Added clear visuals in the Privacy Policy page to indicate that data collection
            has been temporarily disabled.
        </li>
    </ul>
</section>
