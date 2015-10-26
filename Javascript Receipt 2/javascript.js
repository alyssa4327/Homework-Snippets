var receiptPrices = [1.25, 2.35, 3.50, 4.50, 6.50, 7.55];

var taxRate = .0725;

var subtotal = 0;

function list(priceList){
  for (var i=0; i<priceList.length; i++){
    
  document.write(priceList[i].toFixed(2) + '<br />')
  subtotal = subtotal + priceList[i];  
  }
  document.write(subtotal + '<br />');
}


list(receiptPrices);
      
      
//var receiptPrices = [1.25, 2.35, 3.50, 4.50, 6.50, 7.55];
//
//var taxRate = .0725;
//
//var subtotal = 0;
//
//function list(priceList){
//
//  for (var i=0; i<priceList.length; i++){
//      document.write(priceList[i].toFixed(2) + '<br />’)
//      //here is where we want to add to our subtotal as we access each item
//    }
////once we have calculated the subtotal then we can write it
//}
//
//list(receiptPrices);
//
////var calculatePrices = [2.99, 3.67, 12.56, 4.78, 4.69, 3.70, 26.42];
////
////var taxRate= 0.075;
////
////var subtotal=0;
////
////var totalTax = 0;
////
//////function that lists prices on page, parameter: prices
////  //for each item in prices, write to document
////
////function list(priceList) {
////  for (var i = 0; i < priceList.length; i++){
////  document.write(priceList[i].toFixed(2) + '<br />');
////  }
////}
////
////list(calculatePrices);
////
//////function that calculates subtotal parameter: prices
////  //add all items together from prices
////
////function listTotal(priceList){  
////  for (var i = 0; i < priceList.length; i++){
//////    add value to subtotal
////    subtotal = subtotal + priceList[i];
////  }
////  document.write(subtotal+ '<br />');
////}
////
////listTotal(calculatePrices);
////
//////function calculate tax amount 
////  //take the subtotal of all items and multiply by tax rate
////
////
////function calculateTax(subtotal,taxRate){
////  totalTax=((subtotal*taxRate).toFixed(2));
////  document.write("Tax: $"+(subtotal*taxRate).toFixed(2)+ '<br />');
////}
////
////calculateTax(subtotal,taxRate);
////
//////calculate the total
////  //subtotal and add out tax amount
////
////function calculateTotal(totalTax,subtotal){
////  document.write("Total: $"+(Number(totalTax)+Number(subtotal)));
////}
////
////calculateTotal(totalTax,subtotal);
//
//var subtotal=0;
//
//subtotal=
//  
//  subtotal = subtotal + 2
//
//
//
//
//
//
//
