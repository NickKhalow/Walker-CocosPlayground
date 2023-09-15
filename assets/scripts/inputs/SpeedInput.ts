import { Input } from "./Input"

export class SpeedInput implements Input {
    private speed: number
    private origin: Input

    constructor(origin: Input, speed: number) {
        this.origin = origin
        this.speed = speed
    }

    public get x(): number {
        return this.origin.x * this.speed
    }

    public get y(): number {
        return this.origin.y * this.speed
    }

}