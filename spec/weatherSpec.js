describe('Weather', function(){
  var weather = new Weather;

  it('Should return a random value', function (){
    expect(weather.forecast()).toEqual(jasmine.any(Number));
  });

  it('Should be stormy if forecast > 7', function(){
    spyOn(Math, 'floor').and.returnValue(8);
    expect(weather.stormy()).toEqual(true);

  });
  it('Should not be stormy if forecast < 7', function(){
    spyOn(Math, 'floor').and.returnValue(3);
    expect(weather.stormy()).toEqual(false);
  });


});
