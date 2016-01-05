function Airport() {
   this.runway = []
   this.open = true
}

Airport.prototype.land = function(plane){
  if(this.open){
    plane.touch_down();
    this.runway.push(plane);
  } else {
    throw('Stormy weather, no landing')
  };
};

Airport.prototype.take_off = function(plane){
  if(this.open){
    plane.fly();
    var index = this.runway.indexOf(plane);
    this.runway.splice(index,1)
  } else {
    throw('Stormy weather, no flying')
  };
};

Airport.prototype.conditions = function(weather){
  if(weather.stormy()){this.open = false}
  else {this.open = true};
};
