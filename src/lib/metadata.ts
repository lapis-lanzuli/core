export type LzMetadata = {
    title: string;
    titlePad?: boolean;
    description?: string;

    ogType?: string;
    themeColor?: string;
    dates?: {
        lastUpdated?: string | Date;
        released?: string | Date;
        published?: string | Date;
    };

    version?: string;
    tags?: string[];

    useEl?: boolean;
};

export const descPlaceholder =
    "no description has been provided for this page!";

export const LzMeta = {
    lastUpdated: new Date("2026-11-22T15:00:00+09:00"),
    version: "v26.29.1",
    changelog: "/changelog/v26-29-1",
};
