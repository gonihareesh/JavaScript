let username;
var address;
document.getElementById("button").onclick=function(){
    username=document.getElementById("enter your name").value;
    console.log(username);
    address=document.getElementById("address").Value;
    console.log(address);
    document.getElementById("MyLabel").innerHTML=username;
}