let students=["Sandeep","sheshu","Digamber","Charan"];
students.forEach(capital);

function capital(element,index,array){
array[index]=element[0].toUpperCase()+element.substring(1);

}
console.log(students)
console.log(students[0]);
console.log(students[0].toUpperCase())