import { RgbColor } from '../model/rgb-color.js';

export function hsvToRgb(hsvColor) {
    const c = hsvColor.value * hsvColor.saturation;
    const x = c * (1 - Math.abs((hsvColor.hue / 60 % 2 - 1)));
    const m = hsvColor.value - c;

    let r = 0, g = 0, b = 0;
    const hue = hsvColor.hue;
    if(hue >= 0 && hue < 60) {
        [r, g, b] = [c, x, 0];
    }
    if(hue >= 60 && hue < 120) {
        [r, g, b] = [x, c, 0];
    }
    if(hue >= 120 && hue < 180) {
        [r, g, b] = [0, c, x];
    }
    if(hue >= 180 && hue < 240) {
        [r, g, b] = [0, x, c];
    }
    if(hue >= 240 && hue < 300) {
        [r, g, b] = [x, 0, c];
    }
    if(hue >= 300 && hue < 360) {
        [r, g, b] = [c, 0, x];
    }

    return new RgbColor(
        (r + m) * 255,
        (g + m) * 255,
        (b + m) * 255
    );
}