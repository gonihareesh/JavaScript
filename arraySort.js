let number=[100,35,50,90,80];

/*var grades=number.sort(descendingSort);
grades.forEach(print);
console.log("--------");
var grades=number.sort(ascendingSort);
grades.forEach(print);
//normal function expression...
function descendingSort(x,y){
 return y-x;
}
function print(element){
    console.log(element);
}
function ascendingSort(x,y){
    return x-y;
}*/
//arrow function expression...
number.sort((x,y)=> y-x);
number.forEach((element)=>console.log(element));