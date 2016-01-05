function Weather (){
};

Weather.prototype.forecast = function(){
  return Math.floor(Math.random() *10 ) +1;
};

Weather.prototype.stormy = function(){
  if(this.forecast() >= 7) {return true}
  else {return false};
};
