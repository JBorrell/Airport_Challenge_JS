describe('Airport', function(){

  var airport;
  var plane;
  var weather;

  beforeEach(function(){
   airport = new Airport();

   weather = {
     stormy: function(){
       return false;
     }
   };

   plane = {
     touch_down: function(){},
     fly: function(){}
   };
   spyOn(plane, 'touch_down');
   spyOn(plane, 'fly');
  });


  it('Airport should be able to land plane', function(){
    airport.land(plane);
    expect(plane.touch_down).toHaveBeenCalled();
    expect(airport.runway).toContain(plane);
  });

  it('Airport should allow plane to take off', function(){
    airport.land(plane);
    airport.take_off(plane);
    expect(plane.fly).toHaveBeenCalled();
    expect(airport.runway).not.toContain(plane);
  });

  it('should not allow plane to take off if stormy', function(){
    airport.land(plane);
    spyOn(weather, 'stormy').and.returnValue(true);
    airport.conditions(weather);
    expect(function(){
      airport.take_off(plane);
    }).toThrow('Stormy weather, no flying');
  });

  it('should not allow plane to land if stormy', function(){
    spyOn(weather, 'stormy').and.returnValue(true);
    airport.conditions(weather);
    expect(function(){
      airport.land(plane);
    }).toThrow('Stormy weather, no landing');
  });

  it('if full planes should not be able to land', function(){
    for (var i = 0; i <= 10; i++){
      airport.land(plane)};
    expect(function(){
      airport.land(plane);
    }).toThrow('Airport is full, cannot land');
  });

  it('should be able to change airport capacity', function(){
    airport.max_capacity(2);
    expect(airport.CAPACITY).toEqual(2);
  });

  it('cannot release plane if not there', function(){
    expect(function(){
      airport.take_off(plane);
    }).toThrow('No such plane!');
  });


});
