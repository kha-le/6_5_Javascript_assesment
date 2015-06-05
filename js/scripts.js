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
    }

    return totalPrice = (totalPrice + this.toppings) * this.qty
};

$(document).ready(function(){
  $("form#new-ticket").submit(function(event) {
    event.preventDefault();


    $("ul#tickets").append("<li><span class='ticket'>" + "$" + newTicket.basePrice + ".00" + ", " + newTicket.movie)

    $("ul#tickets").append("<li><span class='ticket'>" + "$" + newTicket.basePrice + ".00" + ", " + newTicket.movie)

    $("input#ticket-type").val("");
    $("input#movie").val("");
  });
});
