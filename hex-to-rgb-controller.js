import { hexToRgb } from './convert/hex-to-rgb.js'

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('hexToRgb').addEventListener('submit', (e) => {
        e.preventDefault();

        const hexColor = document.getElementById('inputHex').value;
        const result = hexToRgb(hexColor);
        setRgbOutput(result);
    });
});

function setRgbOutput(rgbColor) {
    document.getElementById('rResult1').innerText = rgbColor.r;
    document.getElementById('gResult1').innerText = rgbColor.g;
    document.getElementById('bResult1').innerText = rgbColor.b;
}