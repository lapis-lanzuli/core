<script lang="ts">
    import { page } from "$app/state";

    const depth = $derived(
        page.params.eggs
            ? page.params.eggs.split("/").filter(Boolean).length + 1
            : 1,
    );

    const messages = [
        "you found the easter egg.",
        "you found the easter egg inside the easter egg.",
        "you found the easter egg inside the easter egg inside the easter egg. aren't you getting tired?",
        "you found the easter egg inside the easter egg inside the easter egg inside the easter egg. why are you still doing this",
        "you found the easter egg inside the easter egg inside the easter egg inside the easter egg inside the easter egg.<br> there are other things on this website, you know...",
        "you found the easter egg inside the easter egg inside the easter egg inside the easter egg inside the easter egg inside the easter egg. i don't think there's anything else here.",
        "you found the easter egg inside the easter egg inside the easter egg inside the easter egg inside the easter egg inside the easter egg inside the easter egg. there is nothing else.",
        "you found the easter egg inside the easter egg inside the easter egg inside the easter egg inside the easter egg inside the easter egg inside the easter egg inside the easter egg. i'm serious.",
        "you found the easter egg inside the easter egg inside the easter egg inside the easter egg inside the easter egg inside the easter egg inside the easter egg inside the easter egg inside the easter egg. <b>STOP.</b>",
        "you found the easter egg inside the easter egg inside the easter egg inside the easter egg inside the easter egg inside the easter egg inside the easter egg inside the easter egg inside the easter egg inside the easter egg.<br>congratulations. now please go look at literally ANYTHING other than this.</b>",
    ];

    const message = $derived(messages[Math.min(depth, messages.length) - 1]);

    const exhausted = $derived(depth > messages.length);
</script>

<section>
    {#if exhausted}
        <p>no more eggs.</p>
    {:else}
        <p>{@html message}</p>
    {/if}
</section>
