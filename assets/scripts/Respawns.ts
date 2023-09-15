import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Respawns')
export class Respawns extends Component {

    @property(Node)
    point: Node = null!
    @property()
    respawnEdgeY = -5


    update(deltaTime: number) {
        if (this.node.position.y < this.respawnEdgeY) {
            this.node.position = this.point.position
        }
    }
}

