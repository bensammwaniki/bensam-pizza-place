$(document).ready(function(){
    $(window).scroll(function() { 
      if ($(document).scrollTop() > 50) { 
        $(".navbar-light").css("background-color", "transparent","color","white"); 
      } else {
        $(".navbar-light").css("background-color", "rgba(255, 174, 0, 0.89)"); 

      }
    });
  });


  $('.checkout').click(function(e){
    $('.checkout').hide()
});
$('.omeDelivery').click(function(e){
  $('.orderNow').show()
  $('.addPizza').hide()
  $('#checkout').hide()

});
//   bussiness logic
var size_price , crust_price, topping_price ;
let total = 0;
function pizza(size,topping,crust,total){
    this.pizzaSize = size;
    this.pizzaTopping = topping;
    this.pizzaCrust = crust;
    this.totalprice = total;
}

// get data from form for selected pizza type 
$(document).ready(function(){
$("button.checkout").click(function(event){
  let pSize = $(".size option:selected").val();
  let pCrust = $(".crust option:selected").val();
  let pTopping = $(".topping option:selected").val();
    switch (pSize) {
        case "large":
            size_price = 1200;
            break;
        case "medium":
            size_price = 700;
            break;    
        case "small":
            size_price = 500;
            break;
        default:
            break;
    }
    switch(pCrust){
        case "0":
          crust_price = 50;
        break;
        case "crispy":
          crust_price = 200;
        break;
        case "stuffed":
          crust_price = 250;
        break;
        case "gluten":
          crust_price = 180;
        break;
        default:
      }
    switch(pTopping){
        case "roni":
         topping_price = 100;
        break;
        case "onions":
          topping_price = 200;
        break;
        case "mashroom":
          topping_price = 250;
        break;
        case "cheese":
          topping_price = 180;
          console.log("cheese")
        break;
        default:
          alert("Please select pizza size and crust"); 
      }
   if((pCrust == "0") && (pTopping == "0")){
    alert("Please select pizza size and crust"); 
  }
  else{

    $("#completeOrders").show();
  }
  total = topping_price + crust_price + size_price;
  let overAllTotal = 0;
  overAllTotal = overAllTotal + total

  $("#pizzasize").html( $(".size option:selected").val());
  $("#pizzacrust").html($(".crust option:selected").val());
  $("#pizzatopping").html($(".topping option:selected").val());
  $("#totals").html(total);
  
// add a new pizza 
  $("button.addPizza").click(function(event){
    let pSize = $(".size option:selected").val();
    let pCrust = $(".crust option:selected").val();
    let pTopping = $(".topping option:selected").val();
    switch (pSize) {
        case "large":
            size_price = 1200;
            break;
        case "medium":
            size_price = 700;
            console.log(size_price)

            break;    
        case "small":
            size_price = 500;
            console.log(size_price)
            break;
        default:
            break;
    }
    switch(pCrust){
        case "0":
          crust_price = 50;
        break;
        case "crispy":
          crust_price = 200;
        break;
        case "stuffed":
          crust_price = 250;
        break;
        case "gluten":
          crust_price = 180;
        break;
        default:
      }
    switch(pTopping){
        case "roni":
         topping_price = 100;
        break;
        case "onions":
          topping_price = 200;
        break;
        case "mashroom":
          topping_price = 250;
        break;
        case "cheese":
          topping_price = 180;
        break;
        default:
          console.log("No price"); 
      }
      total = topping_price + crust_price + size_price;
      overAllTotal = overAllTotal + total
      // constaractor function for new pizza 
      var newOrder = new pizza(pSize, pCrust,pTopping,total);
      console.log(newOrder)

      // add a neww pizza to the display table
      $("#orders").append('<tr>'+'</td><td id="pizzasize">' + newOrder.pizzaSize + '</td><td id="pizzacrust">'+newOrder.pizzaCrust + '</td><td id="pizzatopping">'+newOrder.pizzaTopping+'</td><td id="totals">'+newOrder.totalprice+'</td></tr>');

    })
    // show the bill in full including pizzas 
    $("button#checkout").click(function(){ 
      $("#pizzatotal").append("Your bill is sh. "+overAllTotal);
    });
    // showthe derivery form 
    $("button.omeDelivery").click(function(){
      $(".pizzatable").hide();
      $(".delivery").slideDown(1000);
      $("#addedprice").hide();
      $("button.omeDelivery").hide();
      $("#totalm").hide();
      $("#details").show();
      let delivery = overAllTotal+300;
      console.log(delivery)
      $("#totalm").append("Your bill including delivery fee is: "+delivery);
    });
  
// get data from derivery form 
    $("button.orderNow").click(function(event){
      event.preventDefault();
      let deliveryamount= overAllTotal+300;
      let person = $("input#name").val();
      let phone = $("input#phone").val();
      let location = $("input#location").val();

      if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""){
  
        $("#message").append("Thank you "+person+", We have recieved your order and will be delivered to you at "+location+ ".Please Prepare sh. "+deliveryamount+" or pay via m-pesa");
        $("#totalbill").hide();
        $("#message").slideDown(1200);
      }
      else {
        alert("Please fill in the details for delivery!");
        $(".delivery").show();
      }
    });

})
})