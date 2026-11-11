<script>
    import ContentWarning from "#lib/components/Information/ContentWarning.svelte";
    import Deleted from "#lib/components/Information/Deleted.svelte";
    import Outdated from "#lib/components/Information/Outdated.svelte";
    import Redirects from "#lib/components/Information/Redirects.svelte";
</script>

<section>
    <Deleted />
    <Outdated />
    <ContentWarning>insert description</ContentWarning>
    <Redirects links={["/a", "/b", "/c"]} />
    <Redirects links={["/a", "/b", "/c", "/d", "/e", "/f"]} />
    <Redirects
        links={[
            "/bingchillingbingchillingbingchillingbingchillin",
            "/bingchillingbingchillingbingchillingbingchillinbingchillingbingchillinbingchillingbingchillin",
            "/bingchillingbingchillingbingchillingbingchillinbingchillingbingchillinbingchillingbingchillinbingchillingbingchillinbingchillingbingchillin",
        ]}
    />
</section>
