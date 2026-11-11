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
    let name = "bro is larping as liam tenma 'shitty' ajinomoto :skull:";

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
        }, 50);

        return () => clearInterval(interval);
    });
</script>

<section>
    <p>
        <span class="cryptic" bind:this={el}>{name}</span>
    </p>
</section>

<style>
    .cryptic {
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
