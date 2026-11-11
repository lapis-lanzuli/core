<script lang="ts">
    import Meta from "#lib/components/Meta.svelte";
    import { Ba, Ia } from "#lib/components/Links/index.js";
    import type { LzMetadata } from "#lib/metadata.js";
    import { blogMetadata } from "./(entries)/metadata";

    export const metadata: LzMetadata = {
        title: "blog",
        description: "announcements, articles, yapping and more!",
    };

    const entriesByYear = Object.entries(blogMetadata).reduce<
        Record<string, Record<string, LzMetadata>>
    >((acc, [path, metadata]) => {
        const [year] = path.split("/");

        if (!year) return acc;

        (acc[year] ??= {})[path] = metadata;

        return acc;
    }, {});
</script>

<section>
    <Meta {metadata} />

    <p>
        <b
            >hey there! this is a page where you can find all of my blog
            entries.</b
        ><br />
        unlike my other <Ia href="/docs">documents</Ia>, this section contains
        <b>more subjective and personal topics</b>.
    </p>

    <details class="collapsible">
        <summary>click here to show tag information!</summary>

        <section class="content">
            <p>
                <b>each and every blog entry has an unique set of tags</b>
                so that you know what to expect. everyone likes categorization!
            </p>

            <ul>
                <li>
                    <span class="tag"
                        >#<span class="personal">personal</span></span
                    >
                    - anything that directly relates to me as a whole.
                </li>
                <li>
                    <span class="tag"
                        >#<span class="website">website</span></span
                    > - anything that is related to the website.
                </li>
                <li>
                    <span class="tag"
                        >#<span class="article">article</span></span
                    > - ""formal yapping"", as if i was writing a real article.
                </li>
            </ul>
        </section>
    </details>

    {#each Object.entries(entriesByYear) as [year, entries]}
        <h1>{year}</h1>

        <hr />

        {#each Object.entries(entries) as [slug, entry]}
            <div>
                <h2><Ia href={"/blog/" + slug}>{entry.title}</Ia></h2>

                <p>
                    {#if entry.description}
                        {entry.description}
                    {:else}
                        <i>no description has been provided.</i>
                    {/if}
                </p>

                <p>
                    <span class="date dim">
                        {entry.lastUpdated}
                    </span>
                    ⬩
                    {#each entry.tags as tag}
                        <span class="tag">#<span class={tag}>{tag}</span></span
                        >{" "}
                    {/each}
                </p>
            </div>
        {/each}
    {/each}
</section>

<style lang="css">
    .entries {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: flex-start;
        gap: 2em;
    }

    .entries :global(.-ba) {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: flex-start;

        gap: 0.25rem;
        background: black;
        border: 0.1rem solid var(--purple);
        border-radius: 0.25rem;
        padding: 1.5rem;

        transition: 0.2s ease;
    }

    .entries :global(.-ba:hover) {
        background: rgb(15, 0, 33);

        box-shadow:
            0 0 1rem rgba(100, 0, 255, 0.5),
            inset 0 0 1rem rgba(100, 0, 255, 0.5);
    }

    .tag {
        color: #444;
    }

    .personal {
        color: var(--bright-red);
    }

    .website {
        color: var(--bright-yellow);
    }

    .article {
        color: var(--bright-green);
    }
    .entries :global(.-ba .heading) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
</style>
