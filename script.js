$(document).ready(function(){
    $(window).scroll(function() { 
      if ($(document).scrollTop() > 50) { 
        $(".navbar-light").css("background-color", "transparent","color","white"); 
      } else {
        $(".navbar-light").css("background-color", "rgba(255, 174, 0, 0.89)"); 

      }
    });
  });

//   bussiness logic
var size_price , crust_price, topping_price ;
let total = 0;
function pizza(size,topping,crust){
    this.pizzaSize = size;
    this.pizzaTopping = topping;
    this.pizzaCrust = crust;
}


$(document).ready(function(){
    let pTopping = $("#topping option:selected").val();
    let pSize = $("#size option:selected").val();
    let pCrust = $("#crust option:selected").val();
$("#checkout").click(function(event){
        switch (pSize) {
  
        case "large":
            size_price = 1200;
            break;
        case "medium":
            size_price = 700;
            break;    
        case "small":
            size_price = 500;
            console.log(size_price)
            break;
        default:
            console.log("input data")
            break;
    }
    switch(pCrust){
        case "0":
          crust_price = 0;
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
          console.log("No price"); 
      }
    switch(pTopping){
        case "roni":
         topping_price = 0;
        break;
        case "onion":
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

})
})