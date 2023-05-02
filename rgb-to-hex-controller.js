import { RgbColor } from './model/rgb-color.js';
import { rgbToHex } from './convert/rgb-to-hex.js';

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('rgbToHex').addEventListener('submit', (e) => {
        e.preventDefault();

        const r = document.getElementById('inputR').value;
        const g = document.getElementById('inputG').value;
        const b = document.getElementById('inputB').value;
        const color = new RgbColor(r, g, b);

        const output = document.getElementById('hexResult');
        output.innerText = rgbToHex(color);
    });
});