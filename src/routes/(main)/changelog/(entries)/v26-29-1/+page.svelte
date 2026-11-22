<script lang="ts">
    import { Ia } from "#lib/components/Links/index.ts";
    import Meta from "#lib/components/Meta.svelte";
    import { changelogMetadata } from "../metadata";
</script>

<section>
    <Meta metadata={changelogMetadata["v26-29-1"]} />

    <p>
        this is gonna be the last update of november, i've got finals as well as
        other projects to work on.
    </p>

    <ul>
        <li>
            <span class="col bright yellow">~</span>
            <b>improved the metadata date system!</b> now, all date objects
            <span class="dim"
                >(such as last updated, published, released, etc.)</span
            >
            are stored in a separate
            <code>dates</code> object. yes, this does mean that i had to go through
            every file and implement this lmao
        </li>
        <li>
            <span class="col bright yellow">~</span>
            improved design of the <Ia href="/credits">credits</Ia> page.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            improved design of the navigation panel.
        </li>
        <li>
            <span class="col bright purple">ƒ</span>
            fixed the discord link username.
        </li>
    </ul>
</section>
