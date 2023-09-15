import { _decorator, Component, Node, geometry, math, PhysicsSystem, CharacterController, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Gravity')
export class Gravity extends Component {

    @property()
    force: number = 9;

    character: CharacterController

    start() {
        this.character = this.getComponent(CharacterController)
    }

    update(deltaTime: number) {
        //this.node.position        
        if (!this.character.isGrounded) {
            this.character.move(
                Vec3.UP
                    .clone()
                    .multiplyScalar(-deltaTime * this.force)
            )
        }
    }
}

