describe('Pizza', function() {
  it("returns the price of 1 large cheese pizza", function() {
    var newPizza = new Pizza('large', 0);
    expect(newPizza.price()).to.equal(12);
  });

  it("returns the price of 1 large 1 topping pizza", function(){
    var newPizza = new Pizza('large', 1);
    expect(newPizza.price()).to.equal(13)
  })

});
