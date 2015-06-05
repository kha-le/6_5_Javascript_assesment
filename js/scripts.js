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
  $("form#order").submit(function(event) {
    event.preventDefault();

    var size = $("#size").val();
    var topping = $("#toppings").val();
    var values = [];
      $('.toppings').each(function(){
        var $this = $(this);
        if ($this.is(':checked')) {
          values.push($this.val());
        }
      });
    var toppings = values.length
    var qty = $("#number").val();
    var finalPrice = new Pizza(size,toppings,qty).price();


    $("ul#totalPrice").append("<li><span class='totalPrice'>"+ qty + " " + size + " " + values + " " + "Total =" + " " + "$" + finalPrice)
  });
});
