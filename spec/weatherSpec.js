describe('Weather', function(){
  var weather = new Weather;

  it('Should be stormy if forecast > 0.7', function(){
    spyOn(Math, 'random').and.returnValue(.8);
    expect(weather.stormy()).toEqual(true);

  });
  it('Should not be stormy if forecast < 0.7', function(){
    spyOn(Math, 'random').and.returnValue(.3);
    expect(weather.stormy()).toEqual(false);
  });


});
