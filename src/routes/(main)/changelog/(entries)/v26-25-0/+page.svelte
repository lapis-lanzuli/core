<script lang="ts">
    import { Ia } from "#lib/components/Links/index.js";
    import Meta from "#lib/components/Meta.svelte";
    import { changelogMetadata } from "../metadata";
</script>

<section>
    <Meta
        metadata={changelogMetadata["v26-25-0"]}
        lastUpdatedFormat={"released"}
    />

    <p>
        <b>The Svelte migration process has been fully completed!</b><br />
        We have migrated every page
        <span class="dim">(excluding deletions)</span> and feature to the new version.
        Although the process was tedious, the migration was definitely worth it.
    </p>

    <p>
        <b>
            Anyways, we've decided to make a few changes here and there. We hope
            you like it! Thanks as always.
        </b>
    </p>

    <ul>
        <li>
            <span class="col bright green">+</span>
            Added selection styles by the <code>::selection</code> pseudo-element.
        </li>
        <li>
            <span class="col bright green">+</span>
            Added the <Ia href="/tools/">tools</Ia> project collection.
        </li>
        <li>
            <span class="col bright green">+</span>
            Added the <Ia href="/tools/">tools</Ia> as a collection within the
            <Ia href="/projects">projects page</Ia>.
        </li>
        <li>
            <span class="col bright green">+</span>
            Migrated the <Ia href="/credits/assets">asset credits</Ia> page.
        </li>
        <li>
            <span class="col bright yellow">+</span><span
                class="col bright orange">i</span
            >
            Added proper <code>robots.txt</code> definitions and restrictions.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Reworked the design of the <Ia href="/projects">projects page</Ia>.
        </li>
        <li>
            <span class="col bright yellow">~</span><span
                class="col bright orange">i</span
            >
            Added <code>rel="noopener noreferrer"</code> attributes to external links.
        </li>
        <li>
            <span class="col bright yellow">~</span><span
                class="col bright orange">i</span
            >
            Split global styles into multiple stylesheet documents.
        </li>
        <li>
            <span class="col bright red">-</span>
            Removed some unnecessary and now irrelevant information.
        </li>
    </ul>
</section>
