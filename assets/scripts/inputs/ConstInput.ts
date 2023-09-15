import { Input } from "./Input";

export class ConstInput implements Input {
    x: number
    y: number

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }
}