<script lang="ts">
    import { onMount } from "svelte";

    const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
        "abcdefghijklmnopqrstuvwxyz" +
        "0123456789" +
        "!@#$%^&*()-=_+[]{}\\|,./<>?;':\"`~" +
        "ΑαΒβΓγΔδΕεΖζΗηΘθΙιΚκΛλΜμΝνΞξΟοΠπΡρΣσςΤτΥυΦφΧχΨψΩω" +
        "АаБбВвГгДдЕеЁёЖжЗзИиЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщЪъЫыЬьЭэЮюЯя";

    let el: HTMLSpanElement;
    let name = "abcd efgh ij"; // you're not supposed to actually see this

    onMount(() => {
        const interval = setInterval(() => {
            el.textContent = name
                .split("")
                .map((char) =>
                    char === " "
                        ? " "
                        : chars[Math.floor(Math.random() * chars.length)],
                )
                .join("");
        }, 200);

        return () => clearInterval(interval);
    });
</script>

<section>
    <p>
        thank you <span class="cryptic" bind:this={el}>{name}</span>. thank you
        for everything. you are the best. please take care.
    </p>
</section>

<style>
    .cryptic {
        text-shadow: 0 0 2rem white;
        display: inline-block;

        background: linear-gradient(
            90deg,
            hsl(0, 100%, 80%) 0%,
            hsl(90, 100%, 80%) 25%,
            hsl(180, 100%, 80%) 50%,
            hsl(270, 100%, 80%) 75%,
            hsl(360, 100%, 80%) 100%
        );

        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;

        animation:
            rainbow-scroll 4s linear infinite,
            float 6s ease infinite;
    }
</style>
