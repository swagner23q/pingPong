describe('pingPong', function() {
  it("it will count up to a number by one", function() {
    expect(pingPong(7)).to.eql([1, 2, 3, 4, 5, 6, 7]);
  });
  it("it will give numbers divisble by 15 from a user number", function() {
    expect(pingPong(60)).to.eql([15, 30, 45, 60]);
  });
  it("it will give numbers divisble by 5 from a user number", function() {
    expect(pingPong(20)).to.eql([5, 10, 15, 20]);
  });
  it("it will give numbers divisible by 3 from a user number", function () {
    expect(pingPong(12)).to.eql([3, 6, 9, 12]);
  })
});
