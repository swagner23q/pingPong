describe('pingPong', function() {
  it("it will count up to a number by one", function() {
    expect(pingPong(7)).to.eql([1, 2, 3, 4, 5, 6, 7]);
  });
  it("it will replace numbers divisble by 15 from a user number with the word ping-pong", function() {
    expect(pingPong(60)).to.eql("ping-pong");
  });
  it("it will replace numbers divisble by 5 from a user number with the word pong", function() {
    expect(pingPong(20)).to.eql("pong");
  });
  it("it will replace numbers divisible by 3 from a user number with the word ping", function () {
    expect(pingPong(12)).to.eql("ping");
  })
});
