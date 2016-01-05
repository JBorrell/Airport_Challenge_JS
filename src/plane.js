function Plane() {
  this.isFlying = true
}

Plane.prototype.fly = function(){
  this.isFlying = true;
};

Plane.prototype.touch_down = function(){
  this.isFlying = false;
};
