<script lang="ts">
    import Break from "../Blocks/Break.svelte";
    import WarnRed from "../IconBlocks/WarnRed.svelte";

    let { children }: { children: import("svelte").Snippet } = $props();
</script>

<blockquote class="error">
    <p>
        <WarnRed />
    </p>

    <p>
        <b class="col bright red">content warning!</b>
        {@render children()}
    </p>

    <p class="dim">
        viewer discretion is advised. please proceed with caution.<br />
        keep scrolling below to view the article.
    </p>
</blockquote>

<Break height="20em" />
