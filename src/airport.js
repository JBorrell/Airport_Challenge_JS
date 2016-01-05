function Airport() {
   this.runway = []
   this.open = true
   this.CAPACITY = 10
}

Airport.prototype.land = function(plane){
  if(this._full()) {throw('Airport is full, cannot land')};
  if(!this.open) {throw('Stormy weather, no landing')};
  plane.touch_down();
  this.runway.push(plane);
};

Airport.prototype.take_off = function(plane){
  if(this._identify(plane) === -1){throw('No such plane!')};
  if(!this.open) {throw('Stormy weather, no flying')};
  plane.fly();
  this._removePlane(plane);
};

Airport.prototype.conditions = function(weather){
  weather.stormy() ? this.open = false : this.open = true
};

Airport.prototype.max_capacity = function(number){
  this.CAPACITY = number;
};



Airport.prototype._identify = function(plane){
  return this.runway.indexOf(plane)
};

Airport.prototype._full = function(){
  return this.runway.length > this.CAPACITY;
};

Airport.prototype._removePlane = function(plane){
    this.runway.splice(this._identify(plane),1);
}
