import { _decorator, CharacterController, Component, Node, Quat, Vec3 } from 'cc';
import { Input } from './inputs/Input';
import { ConstInput } from './inputs/ConstInput';
import { SpeedInput } from './inputs/SpeedInput';
import { CcKeyboardInput } from './inputs/CcKeyboardInput';
import { SimpleKeyboardInput } from './inputs/SimpleKeyboardInput';
import { Vector3Input } from './inputs/Vector3Input';
import { LogInput } from './inputs/LogInput';
const { ccclass, property } = _decorator;

@ccclass('Character')
export class Character extends Component {

    @property()
    speed: number = 10;

    controller: CharacterController
    input: Input

    rotation = new Quat()

    start() {
        this.controller = this.getComponent(CharacterController)
        console.log(this.speed)
        this.input = LogInput(
            new SpeedInput(
                this.getComponent(SimpleKeyboardInput),
                this.speed
            )
        )
    }

    update(deltaTime: number) {
        let move = Vector3Input(this.input, deltaTime)
        this.controller.move(move)
        //this.node.rotation = Quat.fromEuler(this.rotation, move.x, move.y, move.z)
        if (move.lengthSqr() > 0) {
            this.node.rotation = Quat.fromViewUp(this.rotation, move.negative(), Vec3.UP);
        }
    }
}

