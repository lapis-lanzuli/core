<script lang="ts">
    import { Ia } from "#lib/components/Links/index.js";
    import Meta from "#lib/components/Meta.svelte";
    import { changelogMetadata } from "../metadata";
</script>

<section>
    <Meta
        metadata={changelogMetadata["v26-28-2"]}
        lastUpdatedFormat={"released"}
    />

    <ul>
        <li>
            <span class="col bright green">+</span>
            Added style definitions for <code>.example</code> elements.
        </li>
        <li>
            <span class="col bright green">+</span>
            Added the
            <Ia href="/conventions/versioning">versioning conventions</Ia> page.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Improved site metadata.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Improved design of the <Ia href="/contact">contact</Ia> page.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Updated the links as well as their destinations within the top panel and
            the navigation panel.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Split the <Ia href="/about">about</Ia> page into dedicated
            <Ia href="/contact">contact methods</Ia>
            and <Ia href="/domains">domain information</Ia> pages.
        </li>
    </ul>

    <h2>Path Changes</h2>

    <ul>
        <li>
            <Ia href="/blog">Blog</Ia>: <code>/docs/blog</code> ->
            <code>/blog</code>
        </li>
        <li>
            <Ia href="/legal/privacy">Privacy Policy</Ia>:
            <code>/legal/privacy-policy</code> -> <code>/legal/privacy</code>
        </li>
        <li>
            <Ia href="/legal/terms">Terms Of Service</Ia>:
            <code>/legal/terms-of-service</code> -> <code>/legal/terms</code>
        </li>
    </ul>

    <p>
        Redirects have already been implemented for compatibility purposes.
        Previous links will remain perfectly valid.
    </p>
</section>
