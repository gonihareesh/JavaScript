let firstName="krishna";
let age=28;
let student=true;

console.log("Hello ",firstName);
console.log("You are ",age," years old");
console.log("Enrolled: ",student);

document.getElementById("p1").innerHTML="Hello "+firstName;
document.getElementById("p2").innerHTML="You are "+age+" years old";
document.getElementById("p3").innerHTML="Enrolled: "+student;