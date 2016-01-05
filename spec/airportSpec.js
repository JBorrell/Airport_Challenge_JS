describe('Airport', function(){

  var airport;
  var plane;
  var weather;

  beforeEach(function(){
   airport = new Airport();
   weather = new Weather();
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
    expect(function (){
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

});
