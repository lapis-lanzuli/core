<script lang="ts">
    import Note from "../IconBlocks/Note.svelte";
    import { Ia } from "../Links";

    let { links }: { links: string[] } = $props();

    let overflow = $derived(links.length > 3 || links.join("").length >= 100);
</script>

<blockquote>
    <p>
        <Note />
    </p>

    {#if !overflow}
        <p>
            this page can also be accessed through
            {#each links as link, i}
                <code>{link}</code
                >{#if i < links.length - 2}{", "}{/if}{#if i === links.length - 2}{" and "}{/if}{#if i === links.length - 1}{"."}{/if}
            {/each}
        </p>
    {:else}
        <p>
            this page can also be accessed through {links.length} redirect sources.
        </p>

        <details>
            <summary>Show all sources</summary>

            <ul>
                {#each links as link, _}
                    <li>
                        <Ia href={link}>
                            <code>{link}</code>
                        </Ia>
                    </li>
                {/each}
            </ul>
        </details>
    {/if}
</blockquote>
