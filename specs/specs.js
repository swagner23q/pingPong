describe('pingPong', function() {
  it("it will count up to a number by one", function() {
    expect(pingPong(5)).to.eql([1, 2, 3, 4, 5]);
  });
});
