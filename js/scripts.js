function Pizza(size,toppings) {
  this.size = size;
  this.toppings = toppings;
};

Pizza.prototype.price = function() {
  var totalPrice = 0
    if (this.size === 'large') {
      totalPrice = 12
    }
    else if (this.size === 'medium') {
      totalPrice = 10
    };
    return totalPrice + this.toppings
};
