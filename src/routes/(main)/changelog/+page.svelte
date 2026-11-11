<script lang="ts">
    import Meta from "#lib/components/Meta.svelte";
    import Warn from "#lib/components/IconBlocks/Warn.svelte";
    import { Ia } from "#lib/components/Links/index.js";
    import type { LzMetadata } from "#lib/metadata.js";
    import { changelogMetadata } from "./(entries)/metadata";

    export const metadata: LzMetadata = {
        title: "changelog",
        description: "a list of all changes and updates made to the website.",
    };

    const entries = Object.entries(changelogMetadata).map(
        ([version, metadata]) => ({
            version,
            ...metadata,
        }),
    );

    const map = new Map<string, typeof entries>();

    for (const entry of entries) {
        const [major, minor] = entry.version.slice(1).split("-");

        if (!major || !minor) continue;

        const id = `v${major}.${minor}`;

        if (!map.has(id)) {
            map.set(id, []);
        }

        map.get(id)!.push(entry);
    }

    let searchQuery = $state("");
    let status = $state(
        "search a version name, and warp into an entry by pressing <kbd>Enter</kbd>!",
    );

    function normalize(query: string) {
        return query.trim().toLowerCase().replace(/\./g, "-");
    }

    const groups = $derived(
        [...map]
            .map(([id, entries]) => ({
                id,
                entries: entries.filter((entry) => {
                    const query = normalize(searchQuery);

                    return (
                        entry.version.includes(query) ||
                        entry.title?.toLowerCase().includes(query)
                    );
                }),
            }))
            .filter((group) => group.entries.length > 0),
    );

    function warpIntoVersion() {
        const normalized = normalize(searchQuery);

        if (!normalized) return;

        const entry = entries.find(
            (entry) => entry.version.toLowerCase() === normalized,
        );

        if (!entry) {
            status = `sorry, i couldn't find a version named ${searchQuery}. please try again!`;
            return;
        }

        window.location.href = `/changelog/${entry.version}`;
    }
</script>

<section>
    <Meta {metadata} />

    <p>
        <b>
            this page just contains a list of all changes and updates made to
            the website.
        </b>
        <br />

        i made this because i like seeing how my website has evolved over time.
    </p>

    <p>
        for the changelog conventions, please refer to
        <Ia href="/changelog/conventions">this article</Ia>!
    </p>

    <blockquote class="warning">
        <p>
            <Warn />
        </p>

        <p>
            <b class="col bright yellow"
                >not all updates come with a new changelog!</b
            ><br />
            if an update was small, urgent, or not assigned a version tag, it won't
            show up here.
        </p>
    </blockquote>
</section>

<section id="entries">
    <div class="search-options enable-layout">
        <p>
            {@html status}
        </p>

        <div class="search-bar">
            <input
                type="text"
                id="search-bar"
                bind:value={searchQuery}
                placeholder="Search for a version (e.g. v26.1.0)"
                onkeydown={(e) => e.key === "Enter" && warpIntoVersion()}
            />

            <button id="search-button" onclick={warpIntoVersion}> Warp </button>
        </div>
    </div>

    <p>
        <b>found {entries.length} changelog entries!</b> yes, this list is automatically
        generated. how cool!
    </p>

    {#each groups as group}
        <h1>{group.id}</h1>

        <ul>
            {#each group.entries as entry}
                <li>
                    <h2>
                        <Ia href="/changelog/{entry.version}">
                            {entry.title}
                        </Ia>
                    </h2>

                    <p class="dim">
                        published on <b>{entry.lastUpdated}</b>
                    </p>
                </li>
            {/each}
        </ul>
    {/each}

    <p class="dim">
        versions prior to <code>v26.23.3</code> aren't listed here, as they were simply
        not documented.
    </p>
</section>

<style>
    .search-options {
        margin: 2em auto;
    }

    .search-options .search-bar {
        display: flex;
        justify-content: center;
        align-items: stretch;
        gap: 0;
    }

    .search-options .search-bar input {
        width: 750px;
    }

    .search-options .search-bar button {
        background: #7155ff;
        color: white;

        padding: 0 10px;

        transition: 0.5s ease;
    }
    .search-options .search-bar button:hover {
        background: #aa91ff;
    }
</style>
