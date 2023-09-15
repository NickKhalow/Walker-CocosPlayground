import { Input } from './Input'
import { Vec3 } from 'cc'

export function Vector3Input(input: Input, deltaTime: number): Vec3 {
    return new Vec3(input.x * deltaTime, 0, -input.y * deltaTime)
}