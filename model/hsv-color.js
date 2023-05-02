export class HsvColor {

    #hue = 0;
    #saturation = 0;
    #value = 0;

    constructor(hue = 0, saturation = 0, value = 0) {
        this.#hue = hue;
        this.#saturation = saturation;
        this.#value = value;
    }

    get hue() {
        return this.#hue;
    }

    get saturation() {
        return this.#saturation;
    }

    get value() {
        return this.#value;
    }
}