import { HsvColor } from './model/hsv-color.js';
import { hsvToRgb } from './convert/hsv-to-rgb.js';

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('hsvToRgb').addEventListener('submit', (e) => {
        e.preventDefault();

        const h = document.getElementById('inputH').value;
        const s = document.getElementById('inputS').value;
        const v = document.getElementById('inputV').value;
        const color = new HsvColor(h, s, v);
        setRgbOutput(hsvToRgb(color));
    });
});

function setRgbOutput(rgbColor) {
    document.getElementById('rResult2').innerText = rgbColor.r.toFixed(0);
    document.getElementById('gResult2').innerText = rgbColor.g.toFixed(0);
    document.getElementById('bResult2').innerText = rgbColor.b.toFixed(0);
}