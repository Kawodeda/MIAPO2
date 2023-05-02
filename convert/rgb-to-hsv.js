import { HsvColor } from '../model/hsv-color.js';
import { nearlyEquals } from '../utils/math.js'

export function rgbToHsv(rgbColor) {
    return new HsvColor(
        hue(rgbColor),
        saturation(rgbColor),
        maxComponent(rgbColor)
    );
}

function hue(rgbColor) {
    const d = delta(rgbColor);
    if(nearlyEquals(d, 0)) {
        return 0;
    }

    const r = toRelative(rgbColor.r);
    const g = toRelative(rgbColor.g);
    const b = toRelative(rgbColor.b);
    const cMax = maxComponent(rgbColor);

    if(nearlyEquals(cMax, r)) {
        return 60 * ((g - b) / d % 6);
    }
    if(nearlyEquals(cMax, g)) {
        return 60 * ((b - r) / d + 2);
    }
    if(nearlyEquals(cMax, b)) {
        return 60 * ((r - g) / d + 4);
    }
}

function saturation(rgbColor) {
    const cMax = maxComponent(rgbColor);
    if(nearlyEquals(cMax, 0)) {
        return 0;
    }
    else {
        return delta(rgbColor) / cMax;
    }
}

function delta(rgbColor) {
    return maxComponent(rgbColor) - minComponent(rgbColor);
}

function minComponent(rgbColor) {
    const minComponent = Math.min(rgbColor.r, rgbColor.g, rgbColor.b);

    return toRelative(minComponent);
}

function maxComponent(rgbColor) {
    const maxComponent = Math.max(rgbColor.r, rgbColor.g, rgbColor.b);

    return toRelative(maxComponent);
}

function toRelative(colorComponent) {
    return colorComponent / 255;
}