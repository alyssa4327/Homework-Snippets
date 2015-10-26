var calculatePrices = [2.99, 3.67, 12.56, 4.78, 4.69, 3.70, 26.42];

var taxRate= 0.075;

var subtotal=0;

var totalTax = 0;

//function that lists prices on page, parameter: prices
  //for each item in prices, write to document

function list(priceList) {
  for (var i = 0; i < priceList.length; i++){
  document.write(priceList[i].toFixed(2) + '<br />');
  }
}

list(calculatePrices);

//function that calculates subtotal parameter: prices
  //add all items together from prices

function listTotal(priceList){  
  for (var i = 0; i < priceList.length; i++){
//    add value to subtotal
    subtotal = subtotal + priceList[i];
  }
  document.write(subtotal+ '<br />');
}

listTotal(calculatePrices);

//function calculate tax amount 
  //take the subtotal of all items and multiply by tax rate


function calculateTax(subtotal,taxRate){
  totalTax=((subtotal*taxRate).toFixed(2));
  document.write("Tax: $"+(subtotal*taxRate).toFixed(2)+ '<br />');
}

calculateTax(subtotal,taxRate);

//calculate the total
  //subtotal and add out tax amount

function calculateTotal(totalTax,subtotal){
  document.write("Total: $"+(Number(totalTax)+Number(subtotal)));
}

calculateTotal(totalTax,subtotal);










