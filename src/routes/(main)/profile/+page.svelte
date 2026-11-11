<script lang="ts">
    import { pickRandom, randInt } from "#lib";
    import { LzStorage } from "#lib/storage.ts";
    import type { LzMetadata } from "#lib/metadata.js";
    import { onMount } from "svelte";
    import Meta from "#lib/components/Meta.svelte";

    const profileDesc = "very cool profile image of my original character Iris";
    const timeFormatter = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Seoul",
    });

    const dateFormatter = new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "2-digit",
    });

    const formatTime = () => timeFormatter.format(new Date()).toUpperCase();
    const formatDate = () => dateFormatter.format(new Date());

    let time = $state(formatTime());
    let date = $state(formatDate());

    const interval = setInterval(() => {
        time = formatTime();
        date = formatDate();
    }, 5000);

    $effect(() => {
        return () => clearInterval(interval);
    });

    type WordStyle = {
        x: number;
        y: number;
        s: string;
        r?: number;
    };

    type Word = {
        text: string;
        color: string;
        style: WordStyle;
    };
    const words: Word[] = [
        {
            text: "한국어",
            color: "rgb(120, 180, 255)",
            style: { x: 65, y: 42, s: "2.1em", r: 12 },
        },
        {
            text: "English",
            color: "rgb(255, 215, 120)",
            style: { x: 12, y: 18, s: "1.9em", r: -8 },
        },
        {
            text: "日本語",
            color: "rgb(255, 140, 170)",
            style: { x: 35, y: 70, s: "1.6em" },
        },
        {
            text: "中文",
            color: "rgb(140, 255, 210)",
            style: { x: 80, y: 25, s: "1em", r: 5 },
        },
        {
            text: "Español",
            color: "rgb(220, 170, 255)",
            style: { x: 55, y: 85, s: "1.1em" },
        },
        {
            text: "Deutsch",
            color: "rgb(180, 255, 255)",
            style: { x: 94, y: 78, s: "1.1em", r: 10 },
        },
    ];

    // if ur seeing this uhh then can you please recommend me more trivia i honestly don't fkn know what to write anymore

    const triviaList = [
        // Programming & Tech
        "i have a very weird love-hate relationship with programming.",
        "SvelteKit is my favorite framework.",
        "i like giving my projects unnecessarily elaborate names.",
        "i HATE REACT. screw React states.",
        "the first webpage I ever made was a page for my conlang, Lanzoorian.<br>yes, i know that name sucks. anyways, this conlang has been retired since then in favor of Lanzavel.",
        "this site actually started as a single-page profile website.",
        "i absolutely HATE recursive functions.",
        "i like CLIs more than i probably should.",
        "i have a python program that backs up my workspace folder.",
        "i once spent 2 hours struggling while editing a project<br>until i realized i was in the wrong directory. 🤦",
        "i make webpage games to study and memorize stuff for my tests.",

        // Languages
        "contrary to popular belief, my favorite language is actually English.",
        "i like how Japanese letters look.",
        'my favorite sound is <span class="ipa">/x/</span>.',
        'i pronounce GIF as <span class="ipa">/gɪf/</span>.',
        "i really like words with unusual consonant clusters.",
        "i'm really inconsistent when it comes to writing.",
        "i think Latin makes every word sound like a mythical artifact.",
        "i have a weird obsession with Greek letters.",

        // Common
        "i have a love-hate relationship with math;<br>love because math is actually a goated subject,<br>and hate because of how it's taught and forced.",
        "my favorite color is purple. it used to be blue, though.",
        "my favorite numbers are 11, 13, and 17.<br>i especially like 13 for some reason.",
        "i can see colors in numbers for some reason. 3 is yellow-ish beige, 7 is either tan or cyan, and so on.",
        "water is the best drink.",
        "i enjoy going down extremely specific rabbit holes.",
        "i am obsessed with monospace fonts.",
        "i can spend an unreasonable amount of time choosing a font.",
        "i have a tendency to memorize random things perfectly.",
        "this sentence is false. :trollface:",
    ];

    const specialTriviaList = [
        // Programming
        "text-shadow: 0 0 10px currentColor™",
        "CSS is a programming language if you believe hard enough...",

        // Funni
        "i think this text is yellow. feel free to prove me wrong.",
        "i'm allergic to peaches.",
        "emu is meaning smile!! :walc",
        "visual/studio",
        '"you sound vaguely russian lmao" - filipino guy',

        // Easter Eggs
        "i am legally required to put at least one easter egg in every website I make.",
        "enter the konami code. you won't regret it...",
        "may the eggs duplicate in peace.",
        "it-all-begins.",
        "Lan lan man. The sixteenth developer, lying hidden somewhere in this website. The one they call the Ultimate Procrastinator. Watch out for him.",
        "what happens when you shatter the boundaries?",

        '<b class="col bright yellow">hey, thank you for spending a little bit of your time here! ♡</b><br>i put a lot of myself into the things i make, so knowing that someone chose to look at them really means a lot to me.',
    ];

    type TriviaType = null | "normal" | "special";

    function pickTrivia() {
        let list;

        const roll = randInt(1, 1000);

        if (roll <= 50) {
            // special: 5%
            triviaType = "special";
            list = specialTriviaList;
        } else {
            triviaType = "normal";
            list = triviaList;
        }

        trivia = pickRandom(list);
    }

    let trivia = $state("");
    let triviaType = $state<TriviaType>(null);

    let boundaryShatter = $state(false);
    let shaking = false;
    let shatterLevel = 0;

    function shatter(event: KeyboardEvent) {
        if (event.key === "r") {
            boundaryShatter = false;
            LzStorage.set("boundaryShatter", "false");
            return;
        }

        if (event.key !== "v" || shaking) return;
        if (boundaryShatter) return;

        shaking = true;
        shatterLevel++;

        if (shatterLevel >= 10) {
            let answer = confirm(
                "are you sure you want to shatter the boundaries?",
            );

            if (answer) {
                boundaryShatter = true;
                alert(
                    "you've officially shattered the boundaries! this is just an excuse to talk about the more private stuff. you may now look for secrets within the page. you can press <R> to undo this change.",
                );
                LzStorage.set("boundaryShatter", "true");
            }

            shatterLevel = 0;
        }

        document.documentElement.classList.remove("shake");
        void document.documentElement.offsetWidth;
        document.documentElement.classList.add("shake");

        setTimeout(() => {
            document.documentElement.classList.remove("shake");
            shaking = false;
        }, 150);
    }

    export const metadata: LzMetadata = {
        title: "profile",
        description: "a short section dedicated to my profile!",
    };

    onMount(() => {
        if (LzStorage.get("boundaryShatter", "false") === "true") {
            boundaryShatter = true;
        }
    });
</script>

<svelte:window onkeydown={shatter} />

<section id="intro">
    <Meta {metadata} />

    <div class="card">
        <div class="wrapper">
            <img
                class="profile"
                src="/assets/iris.png"
                alt={profileDesc}
                title={profileDesc}
            />
        </div>

        <div class="group">
            <div class="name">Lapis Lanzuli</div>

            <div class="handle"><b>@lapis-lanzuli</b> ⬩ @lanzoor</div>
        </div>
    </div>

    <p>
        hey, nice to see you again! :D <b
            >my name is <span class="col bright purple">Lapis Lanzuli</span>.</b
        >
    </p>

    <p>
        this is my profile page, which contains anything about me that you might
        find useful. have fun!
    </p>
</section>

<section id="bio">
    <h1><span class="col bright yellow">[ 01 ]</span> names & meta</h1>

    <p>
        <b>
            i go by the name of
            <span class="col bright purple">Lapis Lanzuli</span>, which is
            <i>roughly</i> pronounced
            <span class="ipa">/ˈlæpɪs lænˈzʊliː/</span>.
        </b><br />

        my name actually used to be
        <span class="col bright purple">Lanzoor</span> but i changed it. it's still
        my "internal" name, though, and i'm willing to change it fully once i'm comfortable
        with my new aliases.
    </p>

    <p>
        my other names include Lanzy (<span class="ipa">/ˈlæn.ziː/</span>),
        Lapis, Lanzuli, lan lan man, Lan Z. Oore, and lanlanroll.
    </p>

    <p>
        <b>my pronouns are <b class="col bright purple">he/they</b>!</b>
        <span class="dim">(might change later)</span><br />
        since these are just pronouns that i'm the most comfortable with, feel free
        to use <span class="col bright red">any/all</span>.<br />
        <span class="dim">
            (...maybe except <span class="col bright orange">it/its</span> lmao)
        </span><br />
    </p>

    <p>i'm also aroace. <span class="dim">(aromatic asexual)</span></p>

    <h1>
        <span class="col bright yellow">[ 02 ]</span> nationality
    </h1>

    <p>
        <b>i am from South Korea 🇰🇷!</b> no i am not from North Korea, yes there's
        a difference. don't ask me :D
    </p>

    <p>i currently live in a small-ish city located in 📍 Gyeonggi-do.</p>

    <p>
        <b>
            we use the glorious GMT+9 <span class="dim"
                >(KST, Korean Standard Time)</span
            > timezone.
        </b><br />
        it is currently
        <span
            title="this counter is updated every 5 seconds. i don't want to overload your browser, yk."
        >
            <b>{time}</b>, <b>{date}</b>
        </span>
        in my location.
        <b>feel free to send me messages regardless of this counter!</b>
    </p>

    <h1><span class="col bright yellow">[ 03 ]</span> personality</h1>

    <p>here are a few notes about my personality:</p>

    <ul class="spacious">
        <li>
            <b>my MBTI type is <span class="col bright cyan">INTP</span>.</b>
        </li>
        <li>
            <b>i am <i>EXTREMELY</i> introverted unless i'm online.</b> i have
            intense social anxiety.<br />
            please ignore me if you <i>somehow</i> manage to find me in real life
            /hj
        </li>
        <li>
            <b>
                i absolutely <i>HATE</i> memorizing stuff without second thought.
            </b><br />

            i like to understand why and how things actually work.
        </li>
        <li>
            <b>i love yapping</b>, whether it'd be yapping myself or listening
            to someone yap.
        </li>
        <li>i'm autistic.</li>
        <li>i am the #1 overthinker in korea trust</li>
    </ul>

    <p>
        <b>
            my rule is: <i>if you respect me, i respect you.</i>
        </b>
        it's that simple!<br />
        i enjoy talking with people who are open-minded and willing to have genuine
        conversations.
        <i>
            please do not talk to me if all you do is ragebait or make fun of
            me.
        </i>
    </p>

    <details class="dim-detail" class:hidden={!boundaryShatter}>
        <summary> toggle details </summary>

        <div class="content">
            <p>hey there, congrats on finding the secret! yay~</p>

            <p>
                <b>
                    this section just contains some private stuff about myself
                    that's <i>probably</i> worth mentioning.
                </b>
            </p>

            <p>
                however,
                <b>
                    please do note that this might also discomfort some users,
                </b>
                so <i>please</i> do not feel obligated to read the entire thing.
            </p>

            <p>
                otherwise, if you're interested,
                <b>
                    i kindly ask you not to misuse this information or use this
                    to your advantage.
                </b>
                thanks! {"<3"}
            </p>

            <details>
                <summary> continue </summary>

                <div class="content">
                    <p>i have intense social anxiety and chronic depression.</p>

                    <p>
                        i also often experience panic attacks when i'm reminded
                        of my traumas or placed in such a situation, which
                        include:
                    </p>

                    <ul>
                        <li>
                            <b>dogs</b>.
                        </li>
                        <li>
                            <b>sports involving throwing balls</b>, including
                            soccer, basketball and dodgeball.
                        </li>
                        <li>
                            <b>irl human interactions</b>, especially when
                            impromptu.
                        </li>
                        <li>
                            <b>the dark</b>.
                        </li>
                    </ul>

                    <p>
                        <b>
                            i show symptoms associated with autism, ADHD, and
                            OCD.
                        </b>
                        i also tend to overreact to everything, which means that i
                        may start a drama without noticing.
                        <b>
                            if i'm bothering you, then <i>please</i> let me know.
                        </b>
                    </p>
                </div>
            </details>
        </div>
    </details>
</section>

<section id="interests">
    <h1>Interests</h1>

    <p>
        as you can probably see, <b>i have a LOT of interests.</b>
    </p>

    <details id="tech" class="collapsible">
        <summary>i like programming!</summary>

        <section class="content">
            <p>
                <b
                    >programming has always been my favorite hobby, and also the
                    hobby I'm the most passionate about.</b
                >

                i actually started taking programming seriously in around
                <span class="col bright cyan">late 2024</span>. since then it's
                become one of my favorite hobbies.
            </p>

            <p>
                <b>
                    most of my projects are web-based because of how accessible
                    the web is.
                </b>
                if someone has a browser,
                <i>they can view what i build instantly</i> without having to download
                or compile anything.
            </p>

            <div class="stacks">
                <div class="stack svelte" title="SVELTE SUPREMACY RAHHHH">
                    SvelteKit
                </div>
                ⬩
                <div class="stack next">Next.js</div>
            </div>

            <div class="stacks">
                <div class="stack svelte">Svelte</div>
                ⬩
                <div class="stack react">React</div>
                ⬩
                <div class="stack js">JavaScript</div>
                ⬩
                <div class="stack ts">TypeScript</div>
                ⬩
                <div class="stack css">CSS</div>
                ⬩
                <div class="stack html">HTML</div>
            </div>

            <p>
                <b>
                    i primarily use
                    <span class="col bright red">SvelteKit</span>
                    for web projects, since it aligns with my coding principles and
                    doesn't have much boilerplate.
                </b>
                i also have experience with
                <b>Next.js</b> and <span class="col bright cyan">React</span>.
            </p>

            <p>
                i have <i>some</i> experience with
                <span class="col bright orange">backend</span>
                development as well. i've built
                <b
                    >REST APIs, Discord bots, database integrations, and API
                    systems
                </b> although most of them have been discontinued due to dismotivation.
            </p>

            <hr />

            <div class="stacks">
                <div class="stack python">Python</div>
                ⬩
                <div class="stack c">C</div>
                ⬩
                <div class="stack rust">Rust</div>
                ⬩
                <div class="stack bash">Bash</div>
                ⬩
                <div class="stack zsh">Zsh</div>
            </div>

            <p>
                <b
                    >i usually write scripts in <span class="col bright blue"
                        >python</span
                    ></b
                >
                since it suits me the best. i find the syntax pretty straightforward
                and easy to work with.
                <b>i'm familiar with with most of the common libraries.</b>
            </p>

            <p>i mainly use python for:</p>

            <ul class="spacious">
                <li>making CLI and TUI programs & utilities.</li>
                <li>
                    making math-related animation videos using
                    <code>manim</code>.
                </li>
                <li>
                    automating repetitive tasks, such as making backups and
                    running long commands.
                </li>
            </ul>
        </section>
    </details>

    <details id="cybersecurity" class="collapsible">
        <summary> i like learning cybersecurity! </summary>

        <section class="content">
            <div class="stacks">
                <div class="stack">networking</div>
                ⬩
                <div class="stack">cryptography</div>
                ⬩
                <div class="stack">OSINT</div>
                ⬩
                <div class="stack">OPSEC</div>
            </div>

            <p>
                over time my interest in programming has led me towards
                networking and cybersecurity.

                <b>
                    i like understanding how systems

                    <span class="col bright cyan">communicate</span>, where they
                    can
                    <span class="col bright red">fail</span>, and how they can
                    be
                    <span class="col bright green">improved</span>.
                </b>
            </p>

            <p>
                i like learning networking as well as how the internet actually
                works. i'm also really interested in OSINT and OPSEC.
            </p>
        </section>
    </details>

    <details id="languages" class="collapsible">
        <summary>i like learning and making languages!</summary>

        <section class="content">
            <div class="word-cloud">
                {#each words as word}
                    <span
                        class="word noto-sans"
                        style={`
                left:${word.style.x}%;
                top:${word.style.y}%;
                font-size:${word.style.s};
                color:${word.color};
                transform:translate(-50%, -50%) rotate(${word.style.r ?? 0}deg);
            `}
                    >
                        {word.text}
                    </span>
                {/each}
            </div>

            <ul>
                <li>
                    <h3>
                        <img
                            src="/assets/icons/countries/south-korea.svg"
                            alt="Korea Icon"
                        />
                        <div>
                            korean <span class="adaptive-text-shadow col green"
                                >(<i>native</i>, C1)</span
                            >
                        </div>
                    </h3>

                    <p>i'm a native korean speaker!</p>
                </li>
                <li>
                    <h3>
                        <img
                            src="/assets/icons/countries/united-kingdom.svg"
                            alt="UK Icon"
                        />
                        <div>
                            english <span
                                class="adaptive-text-shadow col bright green"
                                >(B2 ~ C1)</span
                            >
                        </div>
                    </h3>

                    <div class="content">
                        <p>
                            <b
                                >i learned english through the immersion
                                method&trade;.</b
                            >
                            i spent my free time consuming english content and communicating
                            with friends online via text.
                            <b
                                >this method was very effective for me because I
                                was able to learn while actually enjoying it.</b
                            >
                        </p>

                        <p>
                            i'm still a bit weak at language output, though. i
                            tend to be really inconsistent, especially with
                            pronunciation. i'm actively trying to fix this by
                            communicating with friends online via voice chat.
                        </p>
                    </div>
                </li>
                <li>
                    <h3>
                        <img
                            src="/assets/icons/countries/japan.svg"
                            alt="Japan Icon"
                        />
                        <div>
                            japanese <span
                                class="adaptive-text-shadow col bright yellow"
                                >(B1 ~ B2, N3)</span
                            >
                        </div>
                    </h3>

                    <p>
                        <b>
                            i started learning japanese around <b>March 2025</b> after
                            discovering japanese music and anime.
                        </b>
                    </p>

                    <p>
                        as a korean speaker, <b
                            >i find japanese relatively easy because the two
                            languages share similar grammar and vocabulary
                            roots.</b
                        >
                    </p>
                </li>
                <li>
                    <h3>
                        <img
                            src="/assets/icons/countries/china.svg"
                            alt="China Icon"
                        />
                        <div>
                            chinese <span
                                class="adaptive-text-shadow col orange"
                                >(A2, HSK 1 ~ 2)</span
                            >
                        </div>
                    </h3>

                    <div class="content">
                        <p>
                            i started learning chinese in around <b
                                >early 2026</b
                            > as another way to explore languages.
                        </p>

                        <p>
                            i actually used to be HSK 3 when i was younger, but
                            forgot most of it due to dismotivation.
                        </p>
                    </div>
                </li>
                <li>
                    <h3>
                        <img
                            src="/assets/icons/countries/spain.svg"
                            alt="Spain Icon"
                        />
                        <div>
                            spanish <span class="adaptive-text-shadow col red"
                                >(A2)</span
                            >
                        </div>
                    </h3>

                    <p>
                        <b
                            >spanish was the first romance language I ever
                            started learning.</b
                        >
                        although i am still a beginner, i find the contrast between
                        spanish and english pretty interesting.
                    </p>
                </li>
            </ul>

            <p>
                <b>
                    i'm willing to help anyone learn or practice any of the
                    languages listed above,
                </b>
                especially korean, english and japanese.
                <i>i'm not really the best at teaching, though.</i> :c
            </p>

            <p>but that's not all; i also love linguistics!</p>

            <p>
                <b>
                    i love studying grammar, pronunciation, writing systems, and
                    other aspects of linguistics.
                </b>
                i like exploring how languages work because i want to help others
                learn languages in more efficient ways.
            </p>

            <p>
                i also occasionally spend my time making conlangs. most of them
                are dead, duh.
            </p>
        </section>
    </details>

    <details id="media" class="collapsible">
        <summary> i'm into a lot of medias and stuff! </summary>

        <section class="content">
            <details class="dim-detail" class:hidden={!boundaryShatter}>
                <summary> content warning </summary>

                <div class="content">
                    <p>
                        i also have pretty unusual interests, including
                        <b>gore (and violence in general) and vore. </b>
                    </p>

                    <p>
                        although i'm not generally good at handling scary stuff,
                        i do enjoy some horror. if only gore didn't have horror
                        elements...
                    </p>
                </div>
            </details>

            <h1>anime & shows</h1>

            <p>
                i enjoy watching stuff in my free time! but like, i've been
                running out of free time itself, hmmm...
            </p>

            <p>my favorite genres of anime include:</p>

            <ul>
                <li>comedy! :D</li>
                <li>tragedy! :C</li>
                <li>romance in general, especially yuri!</li>
                <li>slice of <s class="dim">cheesecake</s> life!</li>
            </ul>

            <p>i also enjoy watching object shows.</p>

            <h1>music</h1>

            <p>
                <b>i always listen to music when programming or studying.</b>
                it helps me lock in.
            </p>

            <ul>
                <li>
                    <b>i love japanese music!</b> whether it'd be j-pop, vocaloid
                    or anime music i enjoy listening to them.
                </li>
                <li>
                    <b>i like electronic music and game OSTs!</b> mostly because they've
                    been a huge part of my childhood.
                </li>
            </ul>

            <h1>gaming</h1>

            <p>
                <b>
                    i play games especially when i'm tired, as a way to relax
                    and just have fun.
                </b> i don't really take gaming competitively or seriously, though.
            </p>

            <h2>rhythm games</h2>

            <p>
                <b>rhythm games are actually my favorite type of games!</b><br
                />
                i really don't know why, maybe i just like mashing my keyboard until
                it breaks?
            </p>

            <div class="stacks">
                <div
                    class="stack"
                    title="no bro it's not tap tap tap TAP tap it's actually tap tap TAP tap tap"
                >
                    A Dance of
                    <span class="col bright red">Fire</span> and
                    <span class="col bright blue">Ice</span>
                </div>
                ⬩
                <div
                    class="stack"
                    title="click the rhombicosidodecahedrons        to the beat"
                >
                    <span class="col bright magenta">osu!</span>
                </div>
                ⬩
                <div class="stack" title="PHENOMENAL game btw. life/changing">
                    <span style="color: #ff0070">vivid</span>/<span
                        style="color: #00ffff">stasis</span
                    >
                </div>
            </div>

            <h2>idle games</h2>

            <p>
                tbf idle games are way too underrated. i like growth&trade; and
                BIG numbers.
            </p>

            <div class="stacks">
                <div
                    class="stack col bright cyan"
                    title="haha number go up simulator go brrr"
                >
                    Antimatter Dimensions
                </div>
                ⬩
                <div class="stack col bright blue">Cell to Singularity</div>
                ⬩
                <div class="stack col bright orange">Idle Slayer</div>
            </div>

            <h2>platformer games</h2>

            <p>
                platformer games are really fun to grind and get better at.<br
                />

                <span class="dim small">
                    yes, i consider Geometry Dash to be a platformer game.
                    whatever
                </span>
            </p>

            <div class="stacks">
                <div
                    class="stack col bright yellow"
                    title="duh duh duh duh dudududududududu- GEOMETRY DASH *epic drop*"
                >
                    Geometry Dash
                </div>
                ⬩
                <div
                    class="stack col bright red"
                    title="omg it peak platformer gaem!!"
                >
                    Celeste
                </div>
            </div>

            <h2>other games</h2>

            <div class="stacks">
                <div class="stack col green" title="creeper aww mann">
                    Minecraft
                </div>
                ⬩
                <div
                    class="stack col bright black"
                    title="Lan lan man. The sixteenth developer, lying hidden somewhere in this website. The one they call the Ultimate Procrastinator. Watch out for him."
                >
                    Danganronpa
                </div>
            </div>
        </section>
    </details>

    <details id="science" class="collapsible">
        <summary> i like science! </summary>

        <section class="content">
            <div class="stacks">
                <div class="stack col blue">astronomy</div>
                ⬩
                <div class="stack col purple">physics</div>
                ⬩
                <div class="stack col green">chemistry</div>
                ⬩
                <div class="stack col orange">thermodynamics</div>
            </div>

            <p>
                i enjoy studying most branches of science, but i especially find <b
                    >astronomy, physics, and chemistry</b
                > the best.
            </p>

            <p>
                <b>
                    i have been interested in astronomy since i was very young.
                </b> it eventually led me towards physics. i enjoy learning about
                the principles that govern how the world works.
            </p>
        </section>
    </details>

    <details id="math" class="collapsible">
        <summary> i like math! </summary>

        <section class="content">
            <p>
                i <i>really</i> enjoy solving math problems in my free time,
                <b>especially calculus and geometry.</b> calculus my beloved lmao
            </p>

            <p>
                <b>i have experience with writing LaTeX notes and proofs.</b>
                i've created multiple math-related animations and demonstrations using
                a Python library called <code>manim</code>.
            </p>
        </section>
    </details>
</section>
<!--
<section id="other-interests">
    <h2>Making Videos</h2>

    <p>
        <b>I often post funny and goofy videos to YouTube.</b>
        (<Ia external href="/projects/videos">link</Ia>) Most of them are just
        inner jokes and memes you'll probably NEVER understand but I
        <i>occasionally</i> make quality content.
    </p>

    <h2>Other Interests</h2>

    <p>Some of my other interests include:</p>

    <ul>
        <li>
            <b>Solving Rubik's cubes.</b> My PB & PR
            <span class="dim">(yes you heard that right.)</span> on the 3x3 is 14.6
            seconds.
        </li>
        <li>
            <b
                >Listening to music, and playing instruments such as the drum
                and the piano.</b
            >
        </li>
        <li><b>Watching anime.</b> yuri is so peak i swear</li>
    </ul>
</section> -->

<section id="trivia">
    <h1>Trivia</h1>

    <p>
        if want to learn something random about me, then
        <b>click the button below!</b>
    </p>

    <button onclick={pickTrivia}>generate trivia</button>

    <p class="quote {triviaType}">
        {#if triviaType === "normal"}<b>did you know?</b><br />{/if}
        {@html trivia}
    </p>
</section>

<style lang="css">
    #intro {
        background: rgba(0, 0, 0, 0.6);
    }

    #intro .card {
        align-self: flex-start;

        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
        gap: 2rem;
        padding: 2rem;

        background: black;
    }

    #intro .card .wrapper {
        border: 4px solid rgb(219, 194, 255);
        box-shadow:
            0 0 20px rgb(91, 4, 179),
            inset 0 0 20px rgb(91, 4, 179);
        padding: 0.5rem;
        line-height: 0;
    }

    #intro .card .wrapper .profile {
        max-width: 7.5rem;
        max-height: 7.5rem;
    }

    #intro .card .wrapper .profile:hover {
        transform: scale(0.95);
        cursor: pointer;
    }

    #intro .card .group {
        text-align: left;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 0.25rem;
    }

    #intro .card .group .name {
        position: relative;
        color: white;
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        font-size: 2rem;
        font-weight: 600;
        letter-spacing: 0.1rem;
    }

    #intro .card .group .handle {
        opacity: 0.75;
    }

    #bio {
        background:
            radial-gradient(circle at 20% 40%, #333 8%, transparent 8.1%),
            radial-gradient(circle at 90% 60%, #333 7%, transparent 7.1%),
            radial-gradient(circle at 70% 30%, #222 10%, transparent 10.1%),
            radial-gradient(circle at 50% 80%, #222 10%, transparent 10.1%),
            #111;
    }

    #bio > h1 {
        font-size: 1.5rem;
    }

    #bio > h1 .col {
        font-size: 1.25em;
    }

    .dim-detail > summary {
        opacity: 0.05;
    }

    .dim-detail > summary:hover {
        opacity: 0.1;
    }

    #tech {
        background-image: url("/assets/backgrounds/vscodium.png");
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
    }

    #tech > .content {
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(2px);
        color: rgba(240, 240, 255, 0.75);
    }

    #tech > .content b {
        color: rgba(230, 230, 255, 0.8);
    }

    #tech > .content h1,
    #tech > .content h2,
    #tech > .content h3 {
        color: rgba(220, 220, 255, 0.9);
    }

    .stacks {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        gap: 1rem;
        color: #444;

        padding: 0 2rem;
        text-shadow: 0 0 20px
            oklch(from currentColor calc(l * 0.7) calc(c * 2) calc(h + 10));
    }

    .stacks .stack {
        font-family: "JetBrains Mono";
        font-size: 1rem;
        letter-spacing: 0.15rem;
        font-weight: 400;
        color: white;

        background: transparent;
        transition: 200ms ease;
    }

    .stacks .stack:hover {
        cursor: pointer;
        transform: scale(1.1);
    }

    .stacks .stack.svelte {
        color: #ff3e00;
    }
    .stacks .stack.react {
        color: #61dafb;
    }
    .stacks .stack.js {
        color: #f7df1e;
    }
    .stacks .stack.ts {
        color: #017acb;
    }
    .stacks .stack.css {
        color: #264de4;
    }
    .stacks .stack.html {
        color: #e44d26;
    }
    .stacks .stack.python {
        color: #387eb8;
    }
    .stacks .stack.c {
        color: #5c6bc0;
    }
    .stacks .stack.rust {
        color: #a04f12;
    }

    #languages .content {
        background: rgb(0, 0, 20);
        box-shadow: inset 0 0 50px rgba(9, 30, 71, 0.75);
    }

    .word-cloud {
        position: absolute;
        inset: 0;
        overflow: hidden;
        pointer-events: none;
    }

    .word {
        font-family: "Noto Sans";
        position: absolute;
        opacity: 0.5;
        text-shadow: 0 0 20px
            oklch(from currentColor calc(l * 0.7) calc(c * 2) calc(h + 10));
        white-space: nowrap;
        user-select: none;
        z-index: 1999;
    }

    #languages ul li {
        margin: 1em 0;
    }
    #languages ul li h3 {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
    }

    #languages ul li h3 img {
        width: 1.5rem;
        height: 1.5rem;
    }

    #trivia {
        background:
            radial-gradient(
                circle at 15% 20%,
                rgba(80, 140, 255, 0.12) 0,
                rgba(80, 140, 255, 0.12) 8%,
                transparent 8.1%
            ),
            radial-gradient(
                circle at 85% 75%,
                rgba(180, 100, 255, 0.1) 0,
                rgba(180, 100, 255, 0.1) 12%,
                transparent 12.1%
            ),
            radial-gradient(
                circle at 70% 15%,
                rgba(255, 255, 255, 0.05) 0,
                rgba(255, 255, 255, 0.05) 3%,
                transparent 3.1%
            ),
            #111;
    }

    #trivia button {
        background: white;
        color: #111;
        padding: 0.5em 1rem;
        border: 2px solid white;
        border-radius: 200px;

        align-self: center;
        transition: 200ms ease;
    }

    #trivia button:hover {
        background: rgba(255, 255, 255, 0.05);
        box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.25);
        color: white;
    }

    #trivia button:active {
        transform: scale(1.05);
        box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5);
    }

    #trivia .quote {
        text-align: center;
    }

    #trivia .quote.special {
        opacity: 0.95;
        color: var(--bright-yellow);
        text-shadow: 0 0 20px var(--yellow);
    }

    :global(html.shake) {
        animation: shake 150ms ease-in-out;
    }

    @keyframes shake {
        0%,
        100% {
            transform: translate(0, 0) rotate(0deg);
        }
        20% {
            transform: translate(-5px, 2px) rotate(0.5deg);
        }
        40% {
            transform: translate(5px, -2px) rotate(-0.5deg);
        }
        60% {
            transform: translate(-4px, -2px) rotate(0.5deg);
        }
        80% {
            transform: translate(4px, 2px) rotate(-0.5deg);
        }
    }
</style>
