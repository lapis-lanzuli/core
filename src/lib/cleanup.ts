// this function is just supposed to cleanup localstorage keys that are now irrelevant

import { LzStorage } from "./storage";

const keysToRemove = [
    "hasSeenNotice",
    "isTrackingAllowed",
    "legalConf",
    "acceptedLegalInfo",
    "hasRefreshed",
    "site-checkpoint",
];

export function cleanupOldData() {
    if (typeof window === "undefined") return;

    for (const key of keysToRemove) {
        LzStorage.remove(key);
    }
}
