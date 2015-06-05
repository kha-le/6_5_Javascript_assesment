function Pizza(size,toppings,qty) {
  this.size = size;
  this.toppings = toppings;
  this.qty = qty;
};

Pizza.prototype.price = function() {
  var totalPrice = 0
    if (this.size === 'large') {
      totalPrice = 12
    }
    else if (this.size === 'medium') {
      totalPrice = 10
    }
    else if (this.size === 'small') {
      totalPrice = 8
    };

    return (totalPrice + this.toppings) * this.qty
};
