<script lang="ts">
    import { Ia } from "#lib/components/Links/index.js";
    import Meta from "#lib/components/Meta.svelte";
    import { changelogMetadata } from "../metadata";
</script>

<section>
    <Meta
        metadata={changelogMetadata["v26-28-3"]}
        lastUpdatedFormat={"released"}
    />

    <ul>
        <li>
            <span class="col bright green">+</span>
            Added style definitions for shiki codeblock elements.
        </li>
        <li>
            <span class="col bright green">+</span>
            Added reusable <code>Ba</code> and
            <code>Ia</code> components. Changed existing links to match the new components.
        </li>
        <li>
            <span class="col bright green">+</span>
            Added a few other components.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Reworked the CSS layering system.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Improved structure, styles, and class names of the panels.
        </li>
    </ul>
</section>
