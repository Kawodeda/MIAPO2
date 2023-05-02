import { RgbColor } from "../model/rgb-color.js";

export function hexToRgb(hexColor) {
    const hexRegex = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/;
    if(hexRegex.test(hexColor)) {
        const result = hexRegex.exec(hexColor);

        return new RgbColor(
            parseComponent(result[1]), 
            parseComponent(result[2]), 
            parseComponent(result[3])
        );
    }

    throw new Error('Recieved hex color string has invalid format');
}

function parseComponent(hexComponent) {
    return parseInt(hexComponent, 16);
}