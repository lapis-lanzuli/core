<script lang="ts">
    import type { HTMLAnchorAttributes } from "svelte/elements";

    let {
        external = false,
        disabled = false,
        useArrow = external,

        href,
        class: className,
        children,

        ...props
    }: HTMLAnchorAttributes & {
        external?: boolean;
        disabled?: boolean;
        useArrow?: boolean;
    } = $props();

    const generatedClassNames = $derived(
        [
            "-ia",
            "-inline-anchor",
            external && "external",
            disabled && "disabled",
            className,
        ]
            .filter(Boolean)
            .join(" "),
    );
</script>

<a
    {href}
    class={generatedClassNames}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    {...props}
    data-sveltekit-reload
>
    {@render children?.()}

    {#if external && useArrow}
        <img
            class="arrow"
            aria-hidden="true"
            alt=""
            src="/assets/icons/external-link.svg"
        />
    {/if}
</a>

<style>
    :global(.-ia.external) {
        color: #fff !important;
        display: inline-flex;
        align-items: baseline;
        justify-content: center;
        gap: 0.5em;
    }

    :global(.-ia.external:hover) {
        color: #ddd;
    }

    :global(.-ia.external > .arrow) {
        width: 0.8em;
        height: 0.8em;
    }
</style>
