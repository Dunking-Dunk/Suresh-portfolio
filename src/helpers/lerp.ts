export const lerp = (start: number, end: number, t: number) => {
    return start * (t - 1) + end * t
}