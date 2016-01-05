function Airport() {
   this.runway = []
}

Airport.prototype.land = function(plane){
  plane.touch_down();
  this.runway.push(plane);
}

Airport.prototype.take_off = function(plane){
  plane.fly();
  var index = this.runway.indexOf(plane);
  this.runway.splice(index,1);
}
