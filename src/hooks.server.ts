import { redirect } from "@sveltejs/kit";
import type { Handle } from "@sveltejs/kit/hooks";

function normalizePath(path: string) {
    if (path !== "/" && path.endsWith("/")) {
        return path.slice(0, -1);
    }

    return path;
}

type LzRedirect = {
    from: string[];
    to: string;
    permanent?: boolean;
    preservePath?: boolean;
};

const redirects: LzRedirect[] = [
    { from: ["/documents"], to: "/docs", preservePath: true },
    {
        from: ["/projects/videos", "/videos"],
        to: "https://www.youtube.com/@lapis-lanzuli",
    },
    {
        from: ["/projects/core/changelog"],
        to: "/changelog",
        preservePath: true,
    },
    { from: ["/docs/blog"], to: "/blog", preservePath: true },
    { from: ["/docs/shitter"], to: "/docs/shitter/intro" },
    { from: ["/site-map"], to: "/map", preservePath: true },
    { from: ["/testing", "/tests"], to: "/test" },
    {
        from: ["/legacy", "/archived", "/archive"],
        to: "https://legacy.lanzoor.dev",
        preservePath: true,
    },
    {
        from: ["/privacy"],
        to: "/privacy-policy",
        preservePath: true,
    },
    {
        from: ["/projects/core-api/changelog"],
        to: "https://api.lanzoor.dev/docs/changelog",
        preservePath: true,
    },
    {
        from: ["/projects/conlangs"],
        to: "/conlangs",
        preservePath: true,
    },

    // rickroll redirects. i have no idea why i have this
    {
        from: ["/it-all-begins"],
        to: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
        from: ["/it-all-stops"],
        to: "https://www.youtube.com/watch?v=xMHJGd3wwZk",
    },

    {
        from: ["/repo", "/source", "/source-code"],
        to: "https://github.com/lapis-lanzuli/core",
        preservePath: true,
    },
    {
        from: ["/projects/anti-lanzoor"],
        to: "https://archive.lanzoor.dev/anti-lanzoor",
        preservePath: true,
    },
];

export const handle: Handle = async ({ event, resolve }) => {
    const pathname = normalizePath(event.url.pathname);

    for (const entry of redirects) {
        const code = entry.permanent === true ? 308 : 307;

        for (const rawFrom of entry.from) {
            const from = normalizePath(rawFrom);

            if (pathname === from) {
                throw redirect(code, entry.to);
            }

            if (entry.preservePath && pathname.startsWith(`${from}/`)) {
                throw redirect(code, entry.to + pathname.slice(from.length));
            }
        }
    }

    return resolve(event);
};
