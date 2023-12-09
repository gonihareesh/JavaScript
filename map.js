const store=new Map([
["t-shirt",15],
["sweat-sweater",40],
["jeans","30"],
["shirt",10]
]);
store.set("Towle",8);
console.log(store);
console.log(store.keys());
let shoppingCart = 0;
shoppingCart += store.get("sweat-sweater");
shoppingCart += store.get("jeans");
console.log(shoppingCart);

store.forEach((value,key)=> console.log(`${key} $${value}`));