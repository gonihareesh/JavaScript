let ages=[18,23,56,11,15];
//The filter() method creates a new array filled with elements that pass a test provided by a function.
let adults=ages.filter(checkage);

adults.forEach(print);


function checkage(elements){
    return elements>=18;
}
function print(elements){
    console.log(elements);
}