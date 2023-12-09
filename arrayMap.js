let number=[11,12,13,14,15,16];
let squares=number.map(square);
let cube=number.map(cubes);

cube.forEach(print);
squares.forEach(print); 

function square(element){
    return Math.pow(element,2);
}
function cubes(elements){
    return Math.pow(elements,3);
}
function print(element){
    console.log(element);
}