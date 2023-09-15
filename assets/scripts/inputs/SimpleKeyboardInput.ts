import { _decorator, Component, input, Input, EventKeyboard, KeyCode } from 'cc';
import { Input as UserInput } from './Input';
const { ccclass } = _decorator;

@ccclass("SimpleKeyboardInput")
export class SimpleKeyboardInput extends Component implements UserInput {

    x: number = 0
    y: number = 0

    onLoad() {
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
    }

    onDestroy() {
        input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
    }

    onKeyDown(event: EventKeyboard) {
        if (event.keyCode === KeyCode.KEY_A) {
            this.x -= 1;
        }
        if (event.keyCode === KeyCode.KEY_D) {
            this.x += 1;
        }
        if (event.keyCode === KeyCode.KEY_W) {
            this.y += 1;
        }
        if (event.keyCode === KeyCode.KEY_S) {
            this.y -= 1;
        }
    }

    onKeyUp(event: EventKeyboard) {
        if (event.keyCode === KeyCode.KEY_A) {
            this.x += 1;
        }
        if (event.keyCode === KeyCode.KEY_D) {
            this.x -= 1;
        }
        if (event.keyCode === KeyCode.KEY_W) {
            this.y -= 1;
        }
        if (event.keyCode === KeyCode.KEY_S) {
            this.y += 1;
        }
    }
}