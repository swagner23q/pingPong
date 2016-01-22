describe('pingPong', function() {
  it("it will count up to a number by one", function() {
    expect(pingPong(5)).to.eql([1, 2, 3, 4, 5]);
  });
  it("it will give numbers divisble by 3 from a user number", function() {
    expect(pingPong(12)).to.eql([3, 6, 9, 12]);
  }); 
});
