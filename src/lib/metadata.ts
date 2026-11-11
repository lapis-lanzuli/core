export type LzMetadata = {
    title: string;
    titlePad?: boolean;
    description?: string;

    ogType?: string;
    themeColor?: string;
    lastUpdated?: string | Date;
    version?: string;
    tags?: string[];

    useEl?: boolean;
};

export const descPlaceholder =
    "no description has been provided for this page!";

export const LzMeta = {
    lastUpdated: new Date("2026-11-11T21:00:00+09:00"),
    version: "v26.29.0",
    changelog: "/changelog/v26-29-0",
};
