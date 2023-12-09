let prices=[20,25,30,35,40,45,50];
//reduce function for array elements.
//reduce() returns a single value..
 let total=prices.reduce(checkout);
 
 console.log(`The total is: $${total}`);


function checkout(total,element){
    return total+element;
}