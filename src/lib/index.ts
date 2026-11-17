// export function setFrozen(value: boolean) {
//     const main = document.querySelector('main');

//     if (!main) return;

//     main.classList.toggle('frozen', value);
// }

export function randInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function pickRandom<const T>(array: readonly T[]): T {
    return array[Math.floor(Math.random() * array.length)];
}

export function shuffle<T>(array: T[]): T[] {
    return [...array].sort(() => Math.random() - 0.5);
}

export function formatDateTime(date: Date, timezone: string = "Asia/Seoul") {
    return date.toLocaleDateString("en-CA", {
        timeZone: timezone,
    });
}

export function addMonths(date: Date, months: number): Date {
    const result = new Date(date);
    const day = result.getDate();

    result.setDate(1);
    result.setMonth(result.getMonth() + months);

    const lastDay = new Date(
        result.getFullYear(),
        result.getMonth() + 1,
        0,
    ).getDate();

    result.setDate(Math.min(day, lastDay));

    return result;
}

export function formatDuration(from: Date, to: Date = new Date()): string {
    if (from.getTime() > to.getTime()) {
        [from, to] = [to, from];
    }

    let totalMonths = 0;

    while (addMonths(from, totalMonths + 1) <= to) {
        totalMonths++;
    }

    const cursor = addMonths(from, totalMonths);

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    let remaining = to.getTime() - cursor.getTime();

    const days = Math.floor(remaining / 86_400_000);
    remaining %= 86_400_000;

    const hours = Math.floor(remaining / 3_600_000);
    remaining %= 3_600_000;

    const minutes = Math.floor(remaining / 60_000);

    const UNITS = [
        [years, "year"],
        [months, "month"],
        [days, "day"],
        [hours, "hour"],
        [minutes, "minute"],
    ] as const;

    const result = UNITS.filter(([value]) => value > 0).map(
        ([value, unit]) => `${value} ${unit}${value !== 1 ? "s" : ""}`,
    );

    return result.join(", ") || "now";
}
