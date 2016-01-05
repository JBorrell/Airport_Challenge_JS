function Plane() {
  this.isFlying = true
}

Plane.prototype.fly = function(){
  if(this.isFlying){throw('Plane is already flying')};
  this.isFlying = true;
};

Plane.prototype.touch_down = function(){
  if(!this.isFlying){throw('Plane is already landed')};
  this.isFlying = false;
};
