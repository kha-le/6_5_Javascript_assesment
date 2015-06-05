describe('Pizza', function() {
  it("returns the price of 1 large cheese pizza", function() {
    var newPizza = new Pizza('large', 0, 1);
    expect(newPizza.price()).to.equal(12);
  });

  it("returns the price of 1 large 1 topping pizza", function(){
    var newPizza = new Pizza('large', 1, 1);
    expect(newPizza.price()).to.equal(13);
  })

  it("returns the price of 1 medium cheese pizza", function(){
    var newPizza = new Pizza('medium', 0, 1);
    expect(newPizza.price()).to.equal(10);
  })

  it("returns the price of 1 medium 3 toppings pizza", function(){
    var newPizza = new Pizza('medium', 3, 1);
    expect(newPizza.price()).to.equal(13);
  })

  it("returns the price of 1 small cheese pizza", function() {
    var newPizza = new Pizza('small', 0, 1);
    expect(newPizza.price()).to.equal(8);
  })

  it("returns the price of 1 small 5 toppings pizza", function() {
    var newPizza = new Pizza('small', 5, 1);
    expect(newPizza.price()).to.equal(13);
  })

  it("returns the price of 3 large cheese pizzas", function() {
    var newPizza = new Pizza('large', 0, 3);
    expect(newPizza.price()).to.equal(36);
  })

})
