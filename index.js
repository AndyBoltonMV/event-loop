//Preparation function
//Params - itemName String, callback Function (Will resolve once item is prepped)
//If/Else for menu items
function preparation(itemName, callback) {
  //How long it takes to prepate itemName
  let preparationTime;
  //Using switch as I'm checking for equality instead of truthy/falsy
  switch (itemName) {
    case "Coffee":
      preparationTime = 4000;
      break;
    case "Chips":
      preparationTime = 10000;
      break;
    case "Burger":
      preparationTime = 10000;
      break;
    case "Juice":
      preparationTime = 500;
      break;
    default:
      console.log("We don't have that");
      return;
  }
  //Tell JS "This is going to take time".
  //Once time has run, serve order.
  setTimeout(() => {
    console.log("Food prepped - " + itemName);
    callback(itemName);
  }, preparationTime);
}

//Take Order function
//Params - itemName String
//Call submitOrder function
function takeOrder(itemName) {
  //Waiter is still at table
  console.log(itemName + ", is that correct?");
  submitOrder(itemName);
}

//submitOrder function
//Params - itemName String, Pass to Prep function
function submitOrder(itemName) {
  console.log("taking " + itemName + " to Kitchen");
  //serveOrder is being passed as a callback function, no parenthesis
  //so it doesn't get called in place
  preparation(itemName, serveOrder);
}

//Serve function
//Params - itemName String, take back to table
function serveOrder(itemName) {
  console.log(itemName);
}
