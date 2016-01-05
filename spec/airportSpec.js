describe('Airport', function(){
  var airport;
  var plane;

  beforeEach(function(){
   airport = new Airport();
   plane = new Plane();
  });

  it('Airport should be able to land plane', function(){
    airport.land(plane);
    expect(airport.runway).toContain(plane);
  });

  it('Airport should allow plane to take off', function(){
    airport.land(plane);
    airport.take_off(plane);
    expect(airport.runway).not.toContain(plane);
  });

});
