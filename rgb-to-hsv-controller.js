import { RgbColor } from './model/rgb-color.js';
import { rgbToHsv } from './convert/rgb-to-hsv.js';

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('rgbToHsv').addEventListener('submit', (e) => {
        e.preventDefault();

        const r = document.getElementById('inputR2').value;
        const g = document.getElementById('inputG2').value;
        const b = document.getElementById('inputB2').value;
        const color = new RgbColor(r, g, b);

        setHsvOutput(rgbToHsv(color));
    });
});

function setHsvOutput(hsvColor) {
    document.getElementById('hResult').innerText = toPositiveRange(hsvColor.hue).toFixed(2);
    document.getElementById('sResult').innerText = hsvColor.saturation.toFixed(2);
    document.getElementById('vResult').innerText = hsvColor.value.toFixed(2);
}

function toPositiveRange(hue) {
    if(hue < 0) {
        return 360 + hue;
    }

    return hue;
}