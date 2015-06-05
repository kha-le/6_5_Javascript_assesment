describe('Pizza', function() {
  it("returns the price of 1 large cheese pizza", function() {
    var newPizza = new Pizza('large');
    expect(newPizza.price()).to.equal(12);
  });
  
});
