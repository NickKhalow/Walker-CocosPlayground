import { Input } from './Input'

export function LogInput(input: Input): Input {
    return {
        get x() {
            console.log(`${input.x} ${input.y}`)
            return input.x
        },
        get y() {
            console.log(`${input.x} ${input.y}`)
            return input.y
        }
    }
}