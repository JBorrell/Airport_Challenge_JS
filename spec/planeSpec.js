describe('Plane', function(){
  var plane = new Plane;

  it('Plane should be flying', function(){
    expect(plane.isFlying).toEqual(true);
  });

  it('Landed plane is not flying', function(){
    plane.touch_down();
    expect(plane.isFlying).toEqual(false);
  });

});
