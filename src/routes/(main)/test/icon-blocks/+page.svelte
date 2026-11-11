<script>
    import Info from "#lib/components/IconBlocks/Info.svelte";
    import Note from "#lib/components/IconBlocks/Note.svelte";
    import Warn from "#lib/components/IconBlocks/Warn.svelte";
    import WarnRed from "#lib/components/IconBlocks/WarnRed.svelte";
</script>

<section>
    <h1>Icon Blocks</h1>

    <blockquote>
        <p>
            <Note />
        </p>

        <p>This website is very wacle.</p>
    </blockquote>

    <blockquote class="info">
        <p>
            <Info />
        </p>

        <p>This website is very wacle.</p>
    </blockquote>

    <blockquote class="warn">
        <p>
            <Warn />
        </p>

        <p>This website is very wacle.</p>
    </blockquote>

    <blockquote class="error">
        <p>
            <WarnRed />
        </p>

        <p>This website is very wacle.</p>
    </blockquote>
</section>
