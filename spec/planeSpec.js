describe('Plane', function(){
  var plane;

  beforeEach(function(){
    plane = new Plane();
  });

  it('Plane should be flying', function(){
    expect(plane.isFlying).toEqual(true);
  });

  it('Landed plane is not flying', function(){
    plane.touch_down();
    expect(plane.isFlying).toEqual(false);
  });

  it('On fly plane should be flying', function(){
    plane.touch_down();
    plane.fly();
    expect(plane.isFlying).toEqual(true);
  });

  it('Landed plane cannot land again', function(){
    plane.touch_down();
    expect(function(){
      plane.touch_down();
    }).toThrow('Plane is already landed');
  });

  it('Flying planes cannot take off', function(){
    expect(function(){
      plane.fly();
    }).toThrow('Plane is already flying');
  })

});
