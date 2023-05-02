export class RgbColor {

    #r = 0;
    #g = 0;
    #b = 0;

    constructor(r = 0, g = 0, b = 0) {
        this.#r = r;
        this.#g = g;
        this.#b = b;
    }

    get r() {
        return this.#r;
    }

    get g() {
        return this.#g;
    }

    get b() {
        return this.#b;
    }
}