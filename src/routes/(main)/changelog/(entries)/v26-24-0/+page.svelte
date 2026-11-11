<script lang="ts">
    import { Ia } from "#lib/components/Links/index.js";
    import Meta from "#lib/components/Meta.svelte";
    import { changelogMetadata } from "../metadata";
</script>

<section>
    <Meta
        metadata={changelogMetadata["v26-24-0"]}
        lastUpdatedFormat={"released"}
    />

    <p>
        <b>The long-awaited navigation UI/UX overhaul is finally here!</b><br
        /><br />

        I hesitated quite a bit before publishing this update, but who knows
        what will happen? Anyways, this major update includes several
        improvements to the navigation experience across the website.<br /><br
        />

        <b>
            As always, please feel free to
            <Ia href="/contact">get in touch</Ia>!
        </b>
        We'd love to hear your feedback. Have a nice day!
    </p>

    <ul>
        <li>
            <span class="col bright yellow">~</span>
            <b>Completely reworked the design of the navigation panels.</b>
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Massively simplified and improved the design of the footer and its connections.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Reworked the design of <code>hr</code> elements.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Improved the design of breadcrumbs navigation.
        </li>
        <li>
            <span class="col bright yellow">~</span><span
                class="col bright orange">i</span
            >
            Renamed some unintuitive internal names.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Reworked the <Ia href="/credits/assets/">asset credits page</Ia>.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Reworked the asset structure.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Improved the validation logic of the search feature in the changelog page.
        </li>
    </ul>
</section>
