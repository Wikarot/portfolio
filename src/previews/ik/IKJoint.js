import { Vec2 } from "../../js/vec.min";

export default class IKJoint {
  constructor(length, target) {
    this.base = new Vec2(0, 0);
    this.end = new Vec2(0, 0);
    this.anchor = new Vec2(0, 0);
    this.target = target;
    this.length = length;
    this.angle = 0;
  }

  reach() {
    let newBase = Vec2.subtract(this.target, this.base);
    this.angle = newBase.angleX;
    newBase.magnitude = this.length;
    newBase.scale(-1);
    this.base.copy(Vec2.add(this.target, newBase));
    this.update();
  }

  fix() {
    this.base.copy(this.anchor);
    this.update();
  }

  update() {
    this.end.copy(Vec2.fromPolarCoords(this.length, this.angle));
    this.end.add(this.base);
  }
}
