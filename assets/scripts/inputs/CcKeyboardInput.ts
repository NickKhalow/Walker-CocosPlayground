import { Component, EventKeyboard, input, Input, KeyCode, _decorator } from 'cc'
import { Input as UserInput } from './Input'
const { ccclass } = _decorator

@ccclass('CcKeyboardInput')
export class CcKeyboardInput extends Component implements UserInput {

    x: number = 0
    y: number = 0

    protected onLoad(): void {
        console.log('hello')
        input.on(
            Input.EventType.KEY_PRESSING,
            this.onPress,
            this
        )
        console.log('done')
    }
    
    protected onDestroy(): void {
        input.off(
            Input.EventType.KEY_PRESSING,
            this.onPress,
            this
        )
    }

    onPress(event: EventKeyboard) {
        console.log('press')
        switch (event.keyCode) {
            case KeyCode.KEY_W:
                this.y = 1
                break;
            case KeyCode.KEY_S:
                this.y = -1
                break;
        }
        switch (event.keyCode) {
            case KeyCode.KEY_A:
                this.x = 1
                break;
            case KeyCode.KEY_D:
                this.x = -1
                break;
        }
    }
}