<script lang="ts">
    import { Ia } from "#lib/components/Links/index.js";
    import Meta from "#lib/components/Meta.svelte";
    import { changelogMetadata } from "../metadata";
</script>

<section>
    <Meta
        metadata={changelogMetadata["v26-27-6"]}
        lastUpdatedFormat={"released"}
    />

    <ul>
        <li>
            <span class="col bright green">+</span>
            <b>Added functionality to the warp panel.</b><br />
            You can open it by using the keybind <kbd>Ctrl</kbd>+<kbd>Shift</kbd
            >+<kbd>/</kbd>!
        </li>
        <li>
            <span class="col bright green">+</span>
            Added the Discord domain ownership verification file.
        </li>
        <li>
            <span class="col bright green">+</span>
            Added rich metadata to existing pages.
        </li>
        <li>
            <span class="col bright green">+</span>
            Added donations information page at
            <Ia href="/about/donations">/about/donations</Ia>.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            <b
                >Moved the Legal Information to a dedicated section, <a
                    href="/legal">/legal</a
                >.</b
            ><br />
            Redirects has been configured for compatibility, so old URLs such as
            <code>/privacy-policy</code>
            and <code>/tos</code> will still remain functional.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Improved the design of the <Ia href="/404">404</Ia> page.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Improved the base font size calculation logic.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Updated Legal Information.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Updated the <Ia href="/profile">profile</Ia> page.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Updated the <Ia href="/about">about</Ia> page.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Improved the design of the navigation panel.
        </li>
        <li>
            <span class="col bright yellow">~</span><span
                class="col bright orange">i</span
            >
            Renamed some unintuitive selector names.
        </li>
    </ul>
</section>
