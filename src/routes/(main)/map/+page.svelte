<script lang="ts">
    import type { LzMetadata } from "#lib/metadata.js";

    export const metadata: LzMetadata = {
        title: "map",
        description: "a bare-bones site map",
    };
</script>

<section>
    <p>WORK IN PROGRESS</p>
</section>

<style lang="css">
    :global(.site-map li) {
        list-style-type: none;
    }

    :global(.site-map li:not(:has(summary))::before) {
        content: "- ";
    }

    .site-map,
    :global(.site-map ul) {
        list-style: none;
        margin: 0;
        padding: 0 1.5em 0 0;
    }
</style>
