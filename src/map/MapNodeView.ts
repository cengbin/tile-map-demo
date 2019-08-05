import MapNode from "./MapNode";

export default class MapNodeView extends Phaser.GameObjects.Container {
  bg
  node
  constructor(scene: Phaser.Scene, node:MapNode, color: number = 0xfafafa, alpha = 1) {
    super(scene, node.x,node.y)

    this.node = node
    let w = node.width
    let h = node.height
    let row = node.row
    let col = node.col

    var graphics = scene.add.graphics();
    graphics.fillStyle(color, alpha);
    graphics.lineStyle(1, 0xffffff, 1);
    graphics.beginPath();
    graphics.moveTo(0, h / 2);
    graphics.lineTo(w / 2, 0);
    graphics.lineTo(w, h / 2);
    graphics.lineTo(w / 2, h);
    graphics.closePath();
    graphics.fillPath();
    graphics.strokePath()
    this.add(graphics)
    this.bg = graphics

    let txt = scene.add.text(0, 0, (row) + ',' + (col), {
      fontSize: 10,
      color:'#ff0000'
    })
    this.add(txt)
    txt.setPosition(w / 2 - txt.width / 2, h / 2 - txt.height / 2)
  }

  changeState(color,alpha){
    let {width:w,height:h} = this.node
    var graphics = this.bg
    graphics.clear()
    graphics.fillStyle(color, alpha);
    graphics.lineStyle(1, 0xffffff, 1);
    graphics.beginPath();
    graphics.moveTo(0, h / 2);
    graphics.lineTo(w / 2, 0);
    graphics.lineTo(w, h / 2);
    graphics.lineTo(w / 2, h);
    graphics.closePath();
    graphics.fillPath();
    graphics.strokePath()
  }
}