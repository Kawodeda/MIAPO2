import { clampValue } from '../utils/math';

export function rgbToHex(rgbColor) {
    const rHex = convertComponent(rgbColor.r);
    const gHex = convertComponent(rgbColor.g);
    const bHex = convertComponent(rgbColor.b);

    return `#${rHex}${gHex}${bHex}`;
}

function convertComponent(value) {
    return clampValue(value, 0, 255)
        .toString(16)
        .padStart(2, '0');
}