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
    const delta = delta(rgbColor);
    if(nearlyEquals(delta, 0)) {
        return 0;
    }

    const r = toRelative(rgbColor.r);
    const g = toRelative(rgbColor.g);
    const b = toRelative(rgbColor.b);
    const maxComponent = maxComponent(rgbColor);

    if(nearlyEquals(maxComponent, r)) {
        return 60 * ((g - b) / delta % 6);
    }
    if(nearlyEquals(maxComponent, g)) {
        return 60 * ((b - r) / delta + 2);
    }
    if(nearlyEquals(maxComponent, b)) {
        return 60 * ((r - g) / delta + 4);
    }
}

function saturation(rgbColor) {
    const maxComponent = maxComponent(rgbColor);
    if(nearlyEquals(maxComponent, 0)) {
        return 0;
    }
    else {
        return delta(rgbColor) / maxComponent;
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