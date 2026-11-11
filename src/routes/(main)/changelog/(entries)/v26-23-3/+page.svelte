<script lang="ts">
    import { Ia } from "#lib/components/Links/index.js";
    import Meta from "#lib/components/Meta.svelte";
    import { changelogMetadata } from "../metadata";
</script>

<section>
    <Meta
        metadata={changelogMetadata["v26-23-3"]}
        lastUpdatedFormat={"released"}
    />

    <ul>
        <li>
            <span class="col bright green">+</span>
            Added a link to
            <Ia href="https://status.lanzoor.dev">core-status</Ia>
            within
            <Ia href="/projects">the projects page</Ia>.
        </li>
        <li>
            <span class="col bright green">+</span>
            Added a changelog page at
            <Ia href="/projects/core/changelog">/projects/core/changelog</Ia>,
            which is exactly what you're looking at right now!
        </li>
        <li>
            <span class="col bright yellow">~</span>
            <b>Improved top panel link hover animations.</b>
            Implemented a better color pallete and a more noticable text shadow.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            <b>
                Moved the <Ia href="/legacy/anti-JPA">anti-JPA project</Ia> to the
                legacy category.
            </b>
            This project will be archived for a while, and will be deleted eventually.
        </li>
        <li>
            <span class="col bright yellow">~</span><span
                class="col bright blue">p</span
            >
            Changed the position of the left panel to the right.
        </li>
        <li>
            <span class="col bright red">-</span>
            Removed the outdated status page at
            <code>/troubleshooting/status.html</code>, in favor of the new
            work-in-progress one.
        </li>
    </ul>
</section>
