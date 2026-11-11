export interface OverlayState {
    identifier: string;
    open: boolean;
    closable?: boolean;
}

export const navigationOverlay = $state<OverlayState>({
    identifier: "navigation-overlay",
    open: false,
});

export const closePriorities = [navigationOverlay.identifier];

const overlays = {
    [navigationOverlay.identifier]: navigationOverlay,
};

export function handleEscape() {
    return (event: KeyboardEvent) => {
        if (event.key !== "Escape") return;

        const activeOverlay = closePriorities
            .map((id) => overlays[id])
            .find((overlay) => overlay.open && overlay.closable !== false);

        if (activeOverlay) {
            activeOverlay.open = false;
        }
    };
}
