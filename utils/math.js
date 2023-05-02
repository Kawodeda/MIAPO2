export function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

export function nearlyEquals(a, b, epsilon = 0.00001) {
    const diff = Math.abs(a - b);

    return diff < epsilon;
}